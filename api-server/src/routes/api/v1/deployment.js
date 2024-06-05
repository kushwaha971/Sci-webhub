const express = require("express");
const deploymentController = require("../../../controllers/deployment/deployment.controller");
const { JWTAuth } = require("../../../middleware");

const router = express.Router();

router.get("/logs/:id", deploymentController.getLogs);

module.exports = router;
