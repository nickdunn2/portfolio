'use server'
import { Resend } from "resend"
import { validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email',
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.blow>",
      to: 'nickdunn2@gmail.com',
      subject: 'New message from your portfolio',
      reply_to: senderEmail,
      text: message,
    })
  } catch (error: unknown) {
    // TODO: add more robust error handling.
    console.log(error)
  }
}
