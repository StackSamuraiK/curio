/*
  Warnings:

  - You are about to drop the column `url` on the `Notes` table. All the data in the column will be lost.
  - Added the required column `file` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "url",
ADD COLUMN     "file" TEXT NOT NULL;
