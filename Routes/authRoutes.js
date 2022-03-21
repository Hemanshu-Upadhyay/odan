const express = require("express");
const router = express.Router();

const usercontroller = require("../controller/authController");

router.get("/", (req, res) => {
  res.send("Auth Routes Working");
});

router.post("/register", usercontroller.Signup);
router.post("/login", usercontroller.login);
router.patch("/UpdatePassword", usercontroller.UpdatePassword);

module.exports = router;
