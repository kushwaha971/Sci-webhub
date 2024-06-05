const { generateSlug } = require("random-word-slugs");
const { runEcsTask } = require("../../config/ecs");
const db = require("../../models");
const { Sequelize } = require("sequelize");
const { client } = require("../../config/kafka");
const deploymentController = {};

deploymentController.getLogs = async (req, res) => {
  try {
    const id = req.params.id;
    const logs = await client.query({
      query: `SELECT event_id, deployment_id, log, timestamp from log_events where deployment_id = {deployment_id:String}`,
      query_params: {
        deployment_id: id,
      },
      format: "JSONEachRow",
    });

    const rawLogs = await logs.json();

    return res.json({ logs: rawLogs });
  } catch (error) {
    console.error("Error in getting logs:", error);
    return res.status(500).json({ error: "Error in getting logs", error });
  }
};

module.exports = deploymentController;
