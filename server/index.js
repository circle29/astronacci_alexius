const express = require("express");
const bodyParser = require("body-parser");
const {
  userRoute,
  videoRoute,
  articleRoute,
  addWatchVideo,
  addReadArticle,
} = require("./route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/video", videoRoute);
app.use("/article", articleRoute);
app.use("/watchVideo", addWatchVideo);
app.use("/readArticle", addReadArticle);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
