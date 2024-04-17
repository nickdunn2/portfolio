'use client'

import Image from "next/image"
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section>
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
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
    </section>
  )
}

export default Intro
