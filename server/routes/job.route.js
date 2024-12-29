const express = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");

const {
  postJob,
  getAllJobs,
  getAdminJobs,
  getJobById,
} = require("../controllers/job.controller");
const router = express.Router();

router.post("/postjobs", isAuthenticated, postJob);
router.get("/getjobs", isAuthenticated, getAllJobs);
router.get("/getadminjobs", isAuthenticated, getAdminJobs);
router.get("/getjobs/:id", isAuthenticated, getJobById);

module.exports = router;
