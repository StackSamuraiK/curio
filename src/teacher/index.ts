import express from "express"
import authRouter from "./routes/auth"
import notesRouter from "./routes/notes"

const teacherRouter = express.Router()

teacherRouter.use('/auth' , authRouter)
teacherRouter.use('/notes', notesRouter)

export default teacherRouter