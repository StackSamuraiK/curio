import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import teacherRouter from "./teacher"
import studentRouter from "./student"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors())
app.use('/api/v1/student' , studentRouter)
app.use('/api/v1/teacher' , teacherRouter)

app.listen(port , ()=>{
    console.log(`Your app is listening on port ${process.env.PORT}`)
})