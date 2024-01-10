import { getAppDomain, getResendInstance } from "@/lib/utils";

const resend = getResendInstance();
const domain = getAppDomain();
export const sendPasswordResetEmail = async (
    email: string,
    token: string,
  ) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`
  
    await resend.emails.send({
      from: "mail@auth-masterclass-tutorial.com",
      to: email,
      subject: "Reset your password",
      html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
    });
  };