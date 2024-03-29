import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";
import { getUserByEmail } from '@/data/get-user-by-email';
import { generateVerificationToken } from '@/services/generate-verification-token';
import { db } from '@/lib/db';
import { sendVerificationEmail } from '@/services/send-verification-email';



export async function POST(
    req: Request,
) {
    try {
        const body = await req.json();
        const { name, email, password } = body;
        if (!name) {
            return new NextResponse("Nome é obrigatorio", { status: 400 });
        }
        if (!email) {
            return new NextResponse("Email é obrigatorio", { status: 400 });
        }
        if (!password) {
            return new NextResponse("Senha é obrigatorio", { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return new NextResponse("Email ja esta em uso", { status: 400 });
          }

          await db.user.create({
            data: {
              name,
              email,
              password: hashedPassword,
            },
          });

          const verificationToken = await generateVerificationToken(email);
          
          await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token,
          );
          
        return NextResponse.json("Email de confirmação enviado");
    } catch (error) {
        return new NextResponse("Erro interno", { status: 500 });
    }
};
