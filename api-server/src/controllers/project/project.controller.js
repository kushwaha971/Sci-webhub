const { generateSlug } = require("random-word-slugs");
const db = require("../../models");
const { client } = require("../../config/kafka");
const deploymentController = require("../deployment/deployment.controller");
const { runEcsTask } = require("../../config/ecs");
const projectController = {};
projectController.createProject = async (req, res) => {
  try {
    const { name, git_url, user_id } = req.body;
    const project = await db.Project.create({
      name,
      git_url,
      custome_domain: generateSlug(),
      user_id,
    });

    const projectId = project?.dataValues?.id;

    const deployment = await db.Deployment.create({
      project_id: projectId,
      status: "QUEUED",
    });

    let deploymentId = null;

    if (deployment) {
      const gitURL = git_url;
      deploymentId = deployment.dataValues.id;
      await runEcsTask({ gitURL, projectId, deploymentId });
    }

    return res.json({
      status: "success",
      data: { project, deploymentId },
    });
  } catch (error) {
    console.error("Error creating Project:", error);
    return res.status(500).json({ error: "Failed to create Project" });
  }
};

projectController.getProjectsByUserId = async (req, res) => {
  try {
    const userId = req.query.userId;
    if (!userId) {
      return res.status(401).json({ error: "user ID Required!" });
    }
    const projects = await db.Project.findAll({
      where: {
        user_id: userId,
      },
    });

    if (!projects || projects.length === 0) {
      return res
        .status(404)
        .json({ error: "No projects found for the provided user ID" });
    }

    return res.json({ status: "success", data: { projects } });
  } catch (error) {
    console.error("Error retrieving projects by user ID:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve projects by user ID" });
  }
};

projectController.getProjectById = async (req, res) => {
  try {
    const projectId = req.query.projectId;
    if (!projectId) {
      return res.status(401).json({ error: "user ID Required!" });
    }
    const project = await db.Project.findByPk(projectId, {
      include: [
        {
          model: db.Deployment,
          as: "project_deployment",
          limit: 1,
          order: [["createdAt", "DESC"]],
        },
      ],
    });

    if (!project) {
      return res
        .status(404)
        .json({ error: "No project found for the provided ID" });
    }

    return res.json({ status: "success", data: { project } });
  } catch (error) {
    console.error("Error retrieving project by project ID:", error);
    return res
      .status(500)
      .json({ error: "Failed to retrieve project by project ID" });
  }
};

module.exports = projectController;
