import { z } from "zod"

export const TeacherSignupSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    dob: z.date(),
    photo_url: z.string().url(),
})

export const TeacherSigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const VideoDetailSchema = z.object({
    teacher_id: z.number(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
})