import express from "express"
import { Request, Response } from "express"
import { uploadPDFOnly } from "../../middlewares/upload";
import { TeacherNotesSchema } from "../../types/teacher-types";
import prisma from "../../db";

const notesRouter = express.Router();

//@ts-ignore
notesRouter.post('/create', uploadPDFOnly, async (req: Request, res: Response) => {
    try {
        const result = TeacherNotesSchema.safeParse(req.body)

        if (!result.success) {
            return res.status(400).json({
                msg: "Input validation",
                error: result.error.format()
            });
        }

        const notes = await prisma.notes.create({
            data: {
                teacher_id: req.body.teacher_id,
                title: req.body.title,
                description: req.body.description,
                url: req.body.url, //To be fixed
            }
        });

        res.status(200).json({
            msg: "Notes uploaded successfully",
            notes: notes
        });
    } catch (e: any) {
        console.error("Notes upload error: ", e);
        return res.status(500).json({
            msg: "Internal server error",
            ...(process.env.NODE_ENV === 'development' && { error: e.message })
        });
    }
});

export default notesRouter;