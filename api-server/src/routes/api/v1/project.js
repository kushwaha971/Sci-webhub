const express = require("express");
const projectController = require("../../../controllers/project/project.controller");
const { JWTAuth } = require("../../../middleware");

const router = express.Router();

router.post("/create", [JWTAuth.verifyToken], projectController.createProject);
router.get(
  "/get",
  [JWTAuth.verifyToken],
  projectController.getProjectsByUserId
);
router.get(
  "/get-by-id",
  [JWTAuth.verifyToken],
  projectController.getProjectById
);
module.exports = router;
