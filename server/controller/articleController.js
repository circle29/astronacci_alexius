const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllArticle = async (req, res) => {
  try {
    const getArticle = await prisma.article.findMany();

    res.status(200).json({ message: "Success get article", getArticle });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllArticle,
};
