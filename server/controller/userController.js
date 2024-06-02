const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  try {
    const data = req.body;

    const defaultMembership = await prisma.membership.findUnique({
      where: { id: 1 },
    });

    if (!defaultMembership) {
      throw new Error("Default membership not found");
    }

    const userData = await prisma.user.create({
      data: {
        clerkId: data.id,
        membershipId: defaultMembership.id,
      },
    });

    res.status(200).json({ message: "Register Success", userData });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateMembershipUser = async (req, res) => {
  try {
    const data = req.body;

    parseData = Number(data.membershipId);

    const findMembershipId = await prisma.user.findUnique({
      where: {
        clerkId: data.userId,
      },
    });

    if (findMembershipId.membershipId == parseData) {
      return res
        .status(400)
        .json({ message: "Please change to other membership" });
    }

    const updateMembership = await prisma.user.update({
      where: {
        clerkId: data.userId,
      },
      data: {
        membershipId: parseData,
      },
    });

    res
      .status(200)
      .json({ message: "Success change membership", updateMembership });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
  updateMembershipUser,
};
