/*
  Warnings:

  - Added the required column `teacher_id` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "teacher_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("teacher_id") ON DELETE CASCADE ON UPDATE CASCADE;
