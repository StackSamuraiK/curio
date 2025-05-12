import express from "express";
import { Request , Response } from "express";
import jwt from "jsonwebtoken"

const authRouter = express.Router()

authRouter.post('/signup' , async(req: Request , res: Response)=>{
    
})

export default authRouter