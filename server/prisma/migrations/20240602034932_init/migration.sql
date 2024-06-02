/*
  Warnings:

  - A unique constraint covering the columns `[userId,articleId]` on the table `UserArticle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,videoId]` on the table `UserVideo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `UserArticle_userId_articleId_key` ON `UserArticle`(`userId`, `articleId`);

-- CreateIndex
CREATE UNIQUE INDEX `UserVideo_userId_videoId_key` ON `UserVideo`(`userId`, `videoId`);
