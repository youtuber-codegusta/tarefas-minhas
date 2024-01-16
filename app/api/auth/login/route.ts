import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";
import { getUserByEmail } from '@/data/get-user-by-email';
import { generateVerificationToken } from '@/services/generate-verification-token';
import { db } from '@/lib/db';
import { sendVerificationEmail } from '@/services/send-verification-email';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';



export async function POST(
    req: Request,
) {
   
        const body = await req.json();

        const { email, password, code } = body;

        if (!email) {
            return new NextResponse("Email é obrigatorio", { status: 400 });
        }

        if (!password) {
            return new NextResponse("Senha é obrigatorio", { status: 400 });
        }

        const existingUser = await getUserByEmail(email);
        
        if (!existingUser || !existingUser.email || !existingUser.password) {
            return new NextResponse("Email não existe", { status: 400 });
        }
        
        
        
        try {
            await signIn("credentials", {
              email,
              password,
              
            })
          } catch (error) {
            if (error instanceof AuthError) {
              switch (error.type) {
                case "CredentialsSignin":
                  return { error: "Invalid credentials!" }
                default:
                  return { error: "Something went wrong!" }
              }
            }
        
            throw error;
          }
};
