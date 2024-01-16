import { getAppDomain, getResendInstance } from "@/lib/utils";

const resend = getResendInstance();
const domain = getAppDomain();
export const sendVerificationEmail = async (
    email: string, 
    token: string
  ) => {
    const confirmLink = `${domain}auth/new-verification?token=${token}`;
  
    await resend.emails.send({
      from: "tarefas@codegusta.com",
      to: email,
      subject: "Link de confirmação",
      html: `<p>Clique <a href="${confirmLink}">aqui</a> para confirmar o e-mail.</p>`
    });
  };