import { getAppDomain, getResendInstance } from "@/lib/utils";

const resend = getResendInstance();
export const sendTwoFactorTokenEmail = async (
    email: string,
    token: string
  ) => {
    await resend.emails.send({
      from: "mail@auth-masterclass-tutorial.com",
      to: email,
      subject: "2FA Code",
      html: `<p>Your 2FA code: ${token}</p>`
    });
  };