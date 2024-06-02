const express = require("express");
const { articleController } = require("../controller/index");
const router = express.Router();

router.get("/", articleController.getAllArticle);

module.exports = router;
