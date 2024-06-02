const userController = require("./userController");
const videoController = require("./videoController");
const articleController = require("./articleController");
const addWatchVideo = require("./userVideoController");
const addReadArticle = require("./userArticleController");
const updateMembershipUser = require("./userController");

module.exports = {
  userController,
  videoController,
  articleController,
  addWatchVideo,
  addReadArticle,
  updateMembershipUser,
};
