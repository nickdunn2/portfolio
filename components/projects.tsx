import React from "react"
import SectionHeader from "@/components/section-header"
import { projectsData } from "@/lib/data"
import Project from "@/components/project"


const Projects = () => {
  return (
    <section>
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
