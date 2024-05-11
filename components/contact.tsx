import SectionHeader from "@/components/section-header"
import { FaPaperPlane } from "react-icons/fa"


const Contact = () => {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
      <SectionHeader>Contact Me</SectionHeader>

      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:nickdunn2@gmail.com">nickdunn2@gmail.com</a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col">
        <input type="email" className="h-14 rounded-lg borderBlack"/>
        <textarea className="h-52 my-3 p-4 rounded-lg borderBlack"/>
        <button type="submit" className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all">
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all"/>{" "}
        </button>
      </form>
    </section>
  )
}

export default Contact
