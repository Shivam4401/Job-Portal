const express = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");

const {
  applyJob,
  getApplliedJobs,
  getApplicants,
  updateStatus,
} = require("../controllers/application.controller");

const router = express.Router();

router.get("/apply/:id", isAuthenticated, applyJob);
router.get("/getjobs", isAuthenticated, getApplliedJobs);
router.get("/:id/applicants", isAuthenticated, getApplicants);
router.post("/status/:id/update", isAuthenticated, updateStatus);

module.exports = router;
