import express from "express"
import { Request , Response } from "express"
import authRouter from "./routes/auth"
import agentRouter from "./routes/agent"

const studentRouter = express.Router()

studentRouter.use('/auth' , authRouter)
studentRouter.use('/agent' , agentRouter)

export default studentRouter