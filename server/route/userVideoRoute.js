const express = require("express");
const { addWatchVideo } = require("../controller/index");
const router = express.Router();

router.post("/", addWatchVideo.watchVideo);

module.exports = router;
