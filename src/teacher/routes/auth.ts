import express from "express";
import prisma from "../../db";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TeacherSigninSchema, TeacherSignupSchema } from "../../types/teacher-types";
import { uploadImageOnly } from "../../middlewares/upload";

const authRouter = express.Router()

//@ts-ignore
authRouter.post('/signup', uploadImageOnly ,async (req: Request, res: Response) => {
    try {
        const result = TeacherSignupSchema.safeParse(req.body)

        if (!result.success) {
            return res.status(400).json({
                msg: "invalid Input",
                error: result.error.format()
            });
        }

        const validate = result.data

        const existingTeacher = await prisma.teacher.findFirst({
            where: {
                email: req.body.email
            }
        });

        if (existingTeacher) {
            return res.status(400).json({
                msg: "The email is already registered"
            });
        }

        const hashedPassword = await bcrypt.hash(validate.password, 10)

        const newTeacher = await prisma.teacher.create({
            data: {
                first_name: validate.first_name,
                last_name: validate.last_name,
                email: validate.email,
                photo_url: validate.photo_url,
                dob: new Date(validate.dob),
                password: hashedPassword,
            }
        });

        const teacher_id = newTeacher.teacher_id

        const token = jwt.sign({ teacher_id }, process.env.JWT_SECRET || "");

        res.status(201).json({
            msg: "Teacher created successfully",
            body: newTeacher,
            token: token
        });
    } catch (error: any) {
        console.error("Signup error:", error);

        return res.status(500).json({
            msg: "Internal server error",
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
});

//@ts-ignore
authRouter.post('/signin', async (req: Request, res: Response) => {
    try {

        const result = TeacherSigninSchema.safeParse(req.body)

        if (!result.success) {
            return res.status(400).json({
                msg: "Invalid Input",
                error: result.error.format()
            });
        }

        const teacher = await prisma.teacher.findFirst({
            where: {
                email: req.body.email
            }
        });

        const validatePassword = bcrypt.compare(req.body.password, teacher?.password || "")

        if (!teacher) {
            return res.status(400).json({
                msg: "The email is not registered"
            });
        }

        if (!validatePassword) {
            return res.status(400).json({
                msg: "Incorrect Password"
            });
        }

        const teacher_id = teacher.teacher_id

        const token = jwt.sign({ teacher_id }, process.env.JWT_SECRET || "")
        res.status(200).json({
            msg: "Teacher Logged in successfully",
            body: teacher,
            token: token
        });
    } catch (error: any) {
        console.error("Signup error:", error);

        return res.status(500).json({
            msg: "Internal server error",
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
});

export default authRouter;