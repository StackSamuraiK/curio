import { z } from "zod"

const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

export const TeacherSignupSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    dob: z.string().regex(dateRegex, "Invalid date format (YYYY-MM-DD)"),
    photo_url: z.string().url(),
});

export const TeacherSigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export const VideoDetailSchema = z.object({
    teacher_id: z.number(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
});

export const TeacherNotesSchema = z.object({
    student_id: z.number(),
    title: z.string(),
    description: z.string(),
    file: z.string(),
});