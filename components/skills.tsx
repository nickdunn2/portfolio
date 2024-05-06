'use client'

import SectionHeader from "@/components/section-header"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { motion } from 'framer-motion'

const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

const Skills = () => {
  const { ref } = useSectionInView('Skills')

  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeader>My Skills</SectionHeader>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-700">
        {
          skillsData.map((skill, index) => {
            return (
              <motion.li
                key={index}
                className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
                variants={FadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                {skill}
              </motion.li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default Skills
