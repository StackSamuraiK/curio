import { GenerateContentResponse, GoogleGenAI } from "@google/genai";
import expresd from "express"
import { Request, Response } from "express";

const agentRouter = expresd.Router()

agentRouter.get('/test', async (req: Request, res: Response) => {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

    async function main() {
        const response = await ai.models.generateContentStream({
            model: "gemini-2.0-flash",
            contents: "Explain how AI works in a 100 words in English",
            config: {
                systemInstruction: "You are an AI expert and you are giving a lecture in one of the most prestigious college of the Universe IIT Bombaby.",
                maxOutputTokens: 1000,
                temperature: 0.8
            },

        });

        res.setHeader("Transfer-Encoding", "chunked")

        for await (const chunk of response) {
            console.log(chunk.text)
            res.write(chunk.text)
        }
    }
    await main();
})


export default agentRouter