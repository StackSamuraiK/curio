import { z } from "zod"

export const SignupSchema = z.object({
    name: z.string(),
    
})