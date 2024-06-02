const { PrismaClient } = require("@prisma/client");
const { toISOStringWithTimezone } = require("../utils/convertDate");
const prisma = new PrismaClient();

const watchVideo = async (req, res) => {
  try {
    const data = req.body;

    const findUser = await prisma.user.findUnique({
      where: { clerkId: data.userId },
    });

    if (!findUser) {
      res.status(404).json({ message: "User not found" });
    }

    const alreadyWatch = await prisma.userVideo.findFirst({
      where: {
        userId: findUser.id,
        videoId: data.videoId,
      },
    });

    const findVideoById = await prisma.video.findUnique({
      where: {
        id: data.videoId,
      },
    });

    if (alreadyWatch && findVideoById) {
      return res
        .status(200)
        .json({ message: "The user already watch video", findVideoById });
    }

    const membership = await prisma.membership.findFirst({
      where: { id: findUser.membershipId },
    });

    const maxVideoWatch = membership.videoCount;

    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0);

    const countWatchVideo = await prisma.userVideo.count({
      where: {
        userId: findUser.id,
        watchedAt: { gte: toISOStringWithTimezone(currentDay) },
      },
    });

    if (countWatchVideo >= maxVideoWatch && maxVideoWatch != -1) {
      return res.status(400).json({
        message: `You can only watch ${maxVideoWatch} watch, you can watch more article by changing your membership status`,
      });
    }

    await prisma.userVideo.create({
      data: {
        userId: findUser.id,
        videoId: data.videoId,
      },
    });

    res.status(200).json({ message: "Success watch video", findVideoById });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  watchVideo,
};
