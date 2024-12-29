const express = require("express");
const {
  register,
  login,
  updateProfile,
  logout,
} = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");
const { singleUpload } = require("../middlewares/multer");
const router = express.Router();

router.post("/register", singleUpload, register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/profile/update", isAuthenticated, updateProfile);

module.exports = router;
