import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Try a longer name!"}),
    username: z.string().min(5, {message: "Try a longer username!",}),
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters."})

  })
export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "Password must be at least 8 characters."})

  })