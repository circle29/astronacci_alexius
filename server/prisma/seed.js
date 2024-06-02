const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const article2 = await prisma.article.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article3 = await prisma.article.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article4 = await prisma.article.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article5 = await prisma.article.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article6 = await prisma.article.upsert({
    where: { id: 6 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article7 = await prisma.article.upsert({
    where: { id: 7 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article8 = await prisma.article.upsert({
    where: { id: 8 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article9 = await prisma.article.upsert({
    where: { id: 9 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article10 = await prisma.article.upsert({
    where: { id: 10 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article11 = await prisma.article.upsert({
    where: { id: 11 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const article12 = await prisma.article.upsert({
    where: { id: 12 },
    update: {},
    create: {
      title: "lorem ipsum",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  });
  const video1 = await prisma.video.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video1.mp4",
    },
  });
  const video2 = await prisma.video.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video2.mp4",
    },
  });
  const video3 = await prisma.video.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video3.mp4",
    },
  });
  const video4 = await prisma.video.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video4.mp4",
    },
  });
  const video5 = await prisma.video.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video5.mp4",
    },
  });
  const video6 = await prisma.video.upsert({
    where: { id: 6 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video6.mp4",
    },
  });
  const video7 = await prisma.video.upsert({
    where: { id: 7 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video7.mp4",
    },
  });
  const video8 = await prisma.video.upsert({
    where: { id: 8 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video8.mp4",
    },
  });
  const video9 = await prisma.video.upsert({
    where: { id: 9 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video9.mp4",
    },
  });
  const video10 = await prisma.video.upsert({
    where: { id: 10 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video10.mp4",
    },
  });
  const video11 = await prisma.video.upsert({
    where: { id: 11 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video11.mp4",
    },
  });
  const video12 = await prisma.video.upsert({
    where: { id: 12 },
    update: {},
    create: {
      title: "lorem ipsum",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      path: "/video/video12.mp4",
    },
  });
  const membership1 = await prisma.membership.upsert({
    where: { id: 1 },
    update: {},
    create: {
      membership: "free",
      videoCount: 0,
      articleCount: 0,
    },
  });
  const membership2 = await prisma.membership.upsert({
    where: { id: 2 },
    update: {},
    create: {
      membership: "silver",
      videoCount: 3,
      articleCount: 3,
    },
  });
  const membership3 = await prisma.membership.upsert({
    where: { id: 3 },
    update: {},
    create: {
      membership: "gold",
      videoCount: 10,
      articleCount: 10,
    },
  });
  const membership4 = await prisma.membership.upsert({
    where: { id: 4 },
    update: {},
    create: {
      membership: "platinum",
      videoCount: -1,
      articleCount: -1,
    },
  });

  console.log("success seed article data");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
