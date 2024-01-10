import { getPasswordResetTokenByEmail } from "@/data/password-reset-by-email";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token-by-email";
import { db } from "@/lib/db";
import crypto from "crypto";

export const generateTwoFactorToken = async (email: string) => {
    const token = crypto.randomInt(100_000, 1_000_000).toString();
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000);
  
    const existingToken = await getTwoFactorTokenByEmail(email);
  
    if (existingToken) {
      await db.twoFactorToken.delete({
        where: {
          id: existingToken.id,
        }
      });
    }
  
    const twoFactorToken = await db.twoFactorToken.create({
      data: {
        email,
        token,
        expires,
      }
    });
  
    return twoFactorToken;
  }
  