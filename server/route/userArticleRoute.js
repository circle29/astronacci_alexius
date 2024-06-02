const express = require("express");
const { addReadArticle } = require("../controller/index");
const router = express.Router();

router.post("/", addReadArticle.readArticle);

module.exports = router;
