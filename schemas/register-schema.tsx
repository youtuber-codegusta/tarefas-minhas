import { z } from "zod";

export const RegisterSchema = z.object({
    email: z.string().email({
      message: "Email é obrigatorio",
    }),
    password: z.string().min(6, {
      message: "No minimo 6 caracteres necessarios",
    }),
    name: z.string().min(1, {
      message: "Name é obrigatorio",
    }),
  });