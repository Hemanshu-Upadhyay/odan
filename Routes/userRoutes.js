const express = require("express");
const router = express.Router();
const Auth = require("../Auth/AuthMiddleware");

const usercontroller = require("../controller/userController");

router.get("/", (req, res) => {
  res.send("User Routes Working");
});

router.get("/AdmingetUsers", Auth, usercontroller.getUserByIdAdmin);
router.get("/getUser", Auth, usercontroller.getUserById);
router.put("/updateUser", Auth, usercontroller.UpdateUser);

module.exports = router;
