const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllVideo = async (req, res) => {
  try {
    const getVideo = await prisma.video.findMany();

    res.status(200).json({ message: "Success get video", getVideo });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllVideo,
};
