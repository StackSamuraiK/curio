import express from "express"
import { Request , Response } from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors())

app.listen(port , ()=>{
    console.log(`Your app is listening on port ${process.env.PORT}`)
})