import { RegisterSchema } from "@/schemas/register-schema";
import axios from "axios";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Campos invalido!" };
  };
  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', validatedFields.data);
    return { success: response.data };
  } catch (er: any) {
    return { error: er.response.data };
  }

};