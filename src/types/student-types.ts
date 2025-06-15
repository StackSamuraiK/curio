import { z } from "zod"

export const StudentSignupSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    dob: z.date(),
    photo_url: z.string().url(),
})

export const StudentSigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export const NotesSchema = z.object({
    student_id: z.number(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
})