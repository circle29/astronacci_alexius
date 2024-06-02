const express = require("express");
const { videoController } = require("../controller/index");
const router = express.Router();

router.get("/", videoController.getAllVideo);

module.exports = router;
