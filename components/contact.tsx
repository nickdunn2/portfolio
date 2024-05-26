'use client'

import SectionHeader from "@/components/section-header"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { sendEmail } from "@/actions/sendEmail"
import SubmitButton from "@/components/submit-button"
import toast from "react-hot-toast"

const Contact = () => {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeader>Contact Me</SectionHeader>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:nickdunn2@gmail.com">nickdunn2@gmail.com</a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)

          // Resend can return an error without throwing, so need to check for data.error.
          if (error || data?.error) {
            toast.error(error ?? data.error?.message ?? 'Whoops! An error occurred. Please try again.')
            return
          }

          toast.success('Email sent successfully!')
          return
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 p-4 rounded-lg borderBlack"
          placeholder="Your message"
        />
        <SubmitButton/>
      </form>
    </motion.section>
  )
}

export default Contact
