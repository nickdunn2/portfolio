'use server'

import React from "react"
import { Resend } from "resend"
import * as UtilFunctions from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!UtilFunctions.validateString(senderEmail, 500)) {
    return {
      error: 'Invalid email',
    }
  }

  if (!UtilFunctions.validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: 'nickdunn2@gmail.com',
      subject: 'New message from your portfolio',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, { message, senderEmail })
    })
  } catch (error: unknown) {
    return {
      error: UtilFunctions.getErrorMessage(error),
    }
  }
}
