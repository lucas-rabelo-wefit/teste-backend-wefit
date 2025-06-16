/*
  Warnings:

  - You are about to alter the column `type_document` on the `sellers` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - A unique constraint covering the columns `[document]` on the table `sellers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `sellers` MODIFY `type_document` ENUM('PF', 'PJ') NOT NULL DEFAULT 'PF';

-- CreateIndex
CREATE UNIQUE INDEX `sellers_document_key` ON `sellers`(`document`);
