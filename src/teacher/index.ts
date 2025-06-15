import express from "express"
import { Request , Response } from "express"
import authRouter from "./routes/auth"

const teacherRouter = express.Router()

teacherRouter.use('/auth' , authRouter)

export default teacherRouter