const express = require("express");

const isAuthenticated = require("../middlewares/isAuthenticated");

const {
  registerCompany,
  getCompanyById,
  updateCompany,
  getCompany,
} = require("../controllers/company.controller");
const router = express.Router();

router.post("/register", isAuthenticated, registerCompany);
router.get("/get", isAuthenticated, getCompany);
router.get("/get/:id", isAuthenticated, getCompanyById);
router.put("/update/:id", isAuthenticated, updateCompany);

module.exports = router;
