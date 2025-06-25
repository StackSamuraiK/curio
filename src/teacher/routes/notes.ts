import express from "express"
import { Request, Response } from "express"
import { uploadPDFOnly } from "../../student/middlewares/upload";
import { TeacherNotesSchema } from "../../types/teacher-types";
import prisma from "../../db";

const notesRouter = express.Router();

//@ts-ignore
notesRouter.post('/create', uploadPDFOnly, async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        console.log('Body before processing:', req.body);
        console.log('Uploaded file:', req.file);
        const result = TeacherNotesSchema.safeParse(req.body)


        if (!result.success) {
            return res.status(400).json({
                msg: "Input validation",
                error: result.error.format()
            });
        }

        const notes = await prisma.teacher_Notes.create({
            data:{
                teacher_id:req.body.teacher_id,
                title:req.body.title,
                description:req.body.description,
                pdf:req.body.pdf,
                file: req.body.file
            }
        })

        res.status(200).json({
            msg: "Notes uploaded successfully",
            notes: notes
        });
    } catch (e: any) {
        console.error("Notes upload error: ", e);
        return res.status(500).json({
            msg: "Internal server error",
            ...(process.env.NODE_ENV === 'development' && { error: e.message })
        })
    }
});



export default notesRouter;