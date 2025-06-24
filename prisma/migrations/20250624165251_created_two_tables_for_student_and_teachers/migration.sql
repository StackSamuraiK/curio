/*
  Warnings:

  - You are about to drop the `StudentNotes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeacherNotes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentNotes" DROP CONSTRAINT "StudentNotes_student_id_fkey";

-- DropForeignKey
ALTER TABLE "TeacherNotes" DROP CONSTRAINT "TeacherNotes_teacher_id_fkey";

-- DropTable
DROP TABLE "StudentNotes";

-- DropTable
DROP TABLE "TeacherNotes";

-- CreateTable
CREATE TABLE "Student_Notes" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pdf" TEXT,
    "file" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Student_Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher_Notes" (
    "id" SERIAL NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pdf" TEXT,
    "file" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Teacher_Notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student_Notes" ADD CONSTRAINT "Student_Notes_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher_Notes" ADD CONSTRAINT "Teacher_Notes_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "Teacher"("teacher_id") ON DELETE CASCADE ON UPDATE CASCADE;
