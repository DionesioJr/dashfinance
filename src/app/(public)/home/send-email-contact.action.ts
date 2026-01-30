"use server";

import nodemailer from "nodemailer";

// Definição do tipo da resposta
type ResponseAction = {
  status: boolean;
  message?: string;
};

export async function sendEmail(prevState: ResponseAction, formData: FormData) {
  const name = formData.get("name");
  const fromEmail = formData.get("email");
  const message = formData.get("message");

  if (prevState) {
  }

  if (fromEmail) {
    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use seu provedor de e-mail
      auth: {
        user: "dionesiojr@gmail.com", // E-mail do remetente
        pass: process.env.EMAIL_PASS, // Senha do remetente
      },
    });

    const mailOptions = {
      from: fromEmail.toString(),
      to: "dionesiojr@gmail.com", // E-mail do destinatário
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nE-mail: ${fromEmail}\nMensagem: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { status: true, message: "E-mail enviado com sucesso!" };
    } catch (error) {
      console.error(error);
      return { status: false, message: "Erro ao enviar o e-mail." };
    }
  } else {
    return { status: false, message: "E-mail não fornecido." }; // Updated error message
  }
}
