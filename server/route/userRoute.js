const express = require("express");
const { userController } = require("../controller/index");
const router = express.Router();

router.post("/register", userController.registerUser);
router.put("/membership/update", userController.updateMembershipUser);

module.exports = router;
