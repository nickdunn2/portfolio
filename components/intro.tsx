'use client'

import Image from "next/image"
import { motion } from 'framer-motion'
import Link from "next/link"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"

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
        <span className="underline">server-driven UI</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="flex items-center bg-gray-900 text-gray-50 px-7 py-3 gap-2 rounded-full"
        >
          Contact me here <BsArrowRight/>
        </Link>
        <a
          className="flex items-center bg-gray-50 px-7 py-3 gap-2 rounded-full"
        >
          Download Resume <HiDownload/>
        </a>
        <a
          className="flex items-center bg-gray-50 text-gray-700 p-4 gap-2 rounded-full"
        >
          <BsLinkedin/>
        </a>
        <a
          className="flex items-center bg-gray-50 text-gray-700 p-4 gap-2 rounded-full"
        >
          <BsGithub/>
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
