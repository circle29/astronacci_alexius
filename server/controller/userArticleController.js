const { PrismaClient } = require("@prisma/client");
const { toISOStringWithTimezone } = require("../utils/convertDate");
const prisma = new PrismaClient();

const readArticle = async (req, res) => {
  try {
    const data = req.body;

    const findUser = await prisma.user.findUnique({
      where: { clerkId: data.userId },
    });

    if (!findUser) {
      res.status(404).json({ message: "User not found" });
    }

    const alreadyRead = await prisma.userArticle.findFirst({
      where: {
        userId: findUser.id,
        articleId: data.articleId,
      },
    });

    const findArticleById = await prisma.article.findUnique({
      where: {
        id: data.articleId,
      },
    });

    if (alreadyRead && findArticleById) {
      return res
        .status(200)
        .json({ message: "Success already read", findArticleById });
    }

    // Check article count / video count based on this data
    const membership = await prisma.membership.findFirst({
      where: { id: findUser.membershipId },
    });

    const maxArticleRead = membership.articleCount;

    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0);

    const countReadArticle = await prisma.userArticle.count({
      where: {
        userId: findUser.id,
        readAt: { gte: toISOStringWithTimezone(currentDay) },
      },
    });

    if (countReadArticle >= maxArticleRead && maxArticleRead != -1) {
      return res.status(400).json({
        message: `You can only read ${maxArticleRead} articles, you can read more article by changing your membership status`,
      });
    }

    await prisma.userArticle.create({
      data: {
        userId: findUser.id,
        articleId: data.articleId,
      },
    });
    res.status(200).json({ message: "Success read article", findArticleById });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  readArticle,
};
