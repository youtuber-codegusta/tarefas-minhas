import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
      message: "Email é obrigatorio",
    }),
    password: z.string().min(1, {
      message: "Password é obrigatorio",
    }),
    code: z.optional(z.string()),
  });