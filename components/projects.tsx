'use client'

import React, { useEffect } from "react"
import SectionHeader from "@/components/section-header"
import { projectsData } from "@/lib/data"
import Project from "@/components/project"
import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"


const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && (Date.now() - timeOfLastClick > 1000)) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeader>My Projects</SectionHeader>
      <div>
        {
          projectsData.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <Project {...project}/>
              </React.Fragment>
            )
          })
        }
      </div>
    </section>

  )
}

export default Projects
