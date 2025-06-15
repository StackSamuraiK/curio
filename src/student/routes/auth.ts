import express from "express";
import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import { StudentSigninSchema, StudentSignupSchema } from "../../types/student-types";
import prisma from "../../db";
import bcrypt from "bcrypt"

const authRouter = express.Router()

//@ts-ignore
authRouter.post('/signup', async (req: Request, res: Response) => {
    try {
        const result = StudentSignupSchema.safeParse(req.body)

        if (!result.success) {
            return res.status(400).json({
                msg: "Wrong Input credentials",
                error: result.error.format()
            });
        }


        const existingStudent = await prisma.student.findFirst({
            where: {
                email: req.body.email
            }
        });

        if (existingStudent) {
            return res.status(411).json({
                msg: "The student with this email already exist."
            });
        }

        const validate = result.data

        const hashedPassword = await bcrypt.hash(validate.password, 10)

        const newStudent = await prisma.student.create({
            data: {
                first_name: validate.first_name,
                last_name: validate.last_name,
                email: validate.email,
                password: hashedPassword,
                dob: new Date(validate.dob),
                photo_url: validate.photo_url
            }
        });

        const student_id = newStudent.student_id

        const token = jwt.sign({ student_id }, process.env.JWT_SECRET || "")

        res.status(201).json({
            msg: "Student created successfully",
            body: newStudent,
            token: token
        })
    } catch (error: any) {
        return error
    }
});

//@ts-ignore
authRouter.post('/signin', async (req: Request, res: Response) => {
    try {

        const result = StudentSigninSchema.safeParse(req.body)

        if (!result.success) {
            return res.status(400).json({
                msg: "Invalid inputs",
                error: result.error.format()
            });
        }

        const student = await prisma.student.findFirst({
            where: {
                email: req.body.email
            }
        });

        const validatePassword = await bcrypt.compare(req.body.password, student?.password || "")

        if (!student) {
            return res.status(411).json({
                msg: "Email is incorrect"
            });
        }

        if (!validatePassword) {
            return res.status(411).json({
                msg: "Incorrect password"
            });
        }

        const student_id = student.student_id

        const token = jwt.sign({ student_id }, process.env.JWT_SECRET || "")

        res.status(200).json({
            msg: "User Logged in successfully",
            body: student,
            token: token
        });
    } catch (error: any) {
        return error
    }
});

export default authRouter;