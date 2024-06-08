'use client'

import SectionHeader from "@/components/section-header"
import { motion } from 'framer-motion'
import { useSectionInView } from "@/lib/hooks"

const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">journalism</span> and having a wide variety
        of jobs early in my career, I found myself wanting to know more and more
        about websites, and how to use coding skills to automate many of the day-to-day
        tasks I was doing. I enrolled in a night class for coding beginners, and within a
        couple weeks, <span className="font-medium">I knew I had found my passion</span>.
        I graduated from a coding bootcamp several months later.
      </p>
      <p className="mb-3">
        I <span className="underline">love</span> getting to solve challenging problems
        every day. My favorite part of programming is <span className="font-medium">working
        together with smart, creative, talented people</span> to deliver cool products and
        experiences to customers.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy traveling, being outdoors (especially hiking or running),
        and <span className="font-medium">learning new things</span> (like a foreign language!).
      </p>
    </motion.section>
  )
}

export default About
