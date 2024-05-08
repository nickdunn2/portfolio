'use client'

import React from "react"
import SectionHeader from "@/components/section-header"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data"


const Experience = () => {
  return (
    <section id="experience">
      <SectionHeader>My Experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {
          experiencesData.map((expItem, index) => {
            return (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  // Library has "is-hidden" bug with animation + intersection observer.
                  // See https://stackoverflow.com/questions/77465666/react-vertical-timeline-is-not-showing-the-output-html-keeps-the-elements-hidde.
                  // Have to manually add visible prop (or animate={false}) for now.
                  visible={true}
                  contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af",
                  }}
                  date={expItem.date}
                  icon={expItem.icon}
                  iconStyle={{
                    background: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <h3 className="font-semibold capitalize">{expItem.title}</h3>
                  <p className="font-normal !mt-0">{expItem.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700">{expItem.description}</p>
                </VerticalTimelineElement>
              </React.Fragment>
            )
          })
        }
      </VerticalTimeline>
    </section>
  )
}

export default Experience
