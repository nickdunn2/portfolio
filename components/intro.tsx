'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="https://media.licdn.com/dms/image/D5603AQGLpKxSMHxlTw/profile-displayphoto-shrink_400_400/0/1675551786853?e=1718841600&v=beta&t=lqDfbREsdlAYBpXKeFyQeKTlhHzIYvNfXJzgDLgEWEA"
              alt="Nick Dunn portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-gray-50 shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-3xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Nick,</span> a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites, apps and APIs</span>. My focus is on{" "}
        <span className="underline">JavaScript & TypeScript</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center bg-gray-900 text-gray-50 px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>
        <a
          href="/Resume.pdf"
          download
          className="group flex items-center bg-gray-50 px-7 py-3 gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
        >
          Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
        <a
          href="https://www.linkedin.com/in/nickdunn2/"
          target="_blank"
          className="flex items-center bg-gray-50 text-gray-700 p-4 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin/>
        </a>
        <a
          href="https://github.com/nickdunn2"
          target="_blank"
          className="flex items-center bg-gray-50 text-gray-700 p-4 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
        >
          <BsGithub/>
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
