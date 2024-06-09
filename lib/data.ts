import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { LuGraduationCap, LuFileSpreadsheet } from "react-icons/lu"
import tvRedesignImg from "@/public/tvRedesign.png"
import varsityStandingsImg from "@/public/varsityStandings.png"
import journalAppImg from "@/public/journalApp.png"
import paymentFunnelImg from "@/public/paymentFunnel.png"
import { RiJavascriptLine, RiReactjsFill } from "react-icons/ri"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Kansas State University",
    location: "Manhattan, KS",
    description:
      "Graduated with a print journalism degree. I love both verbal and written communication 📝️, and " +
      "I've been presently surprised at how much those skills have helped me in my coding career.",
    icon: React.createElement(LuGraduationCap),
    date: "2008",
  },
  {
    title: "Right Angle Sports",
    location: "Los Angeles, CA",
    description:
      "Research analyst for a sports gambling syndicate. Created and maintained various " +
      "Excel spreadsheets with data from many websites, which made me curious on " +
      "how to scrape the web... 🧐",
    icon: React.createElement(LuFileSpreadsheet),
    date: "2011-2015",
  },
  {
    title: "Austin Coding Academy",
    location: "Austin, TX",
    description:
      'Took 14 months of night classes at a "bootcamp" to learn software engineering fundamentals. 💻',
    icon: React.createElement(LuGraduationCap),
    date: "2015-2016",
  },
  {
    title: "My First Coding Job",
    location: "Austin, TX",
    description:
      "Quick internship to get real-world coding experience. Built a user profile section (using React and Django) " +
      "for a fitness app ⌚ called Meretz.",
    icon: React.createElement(RiReactjsFill),
    date: "2016",
  },
  {
    title: "Software Engineer",
    location: "Austin, TX",
    description:
      "Started as a junior developer on the payments team at FloSports, and within a little over a year " +
      "I was promoted and became the team lead. Upskilled in all things front-end.",
    icon: React.createElement(CgWorkAlt),
    date: "2016-2020",
  },
  {
    title: "Senior Full-Stack Engineer",
    location: "Austin, TX",
    description:
      "I'm now a senior full-stack developer and team lead delivering server-driven UI endpoints for fully " +
      "redesigned TV apps at FloSports. Using NestJS, Typescript & Redis.",
    icon: React.createElement(RiJavascriptLine),
    date: "2020-present",
  },
] as const

export const projectsData = [
  {
    title: "TV App Redesign",
    description:
      "Lead API and BFF (back-end-for-front-end) developer for brand new TV apps (Roku, Android TV, AppleTV) at FloSports.",
    tags: ["NestJS", "Redis", "Server-Driven UI", "TypeScript", "Jest"],
    imageUrl: tvRedesignImg,
  },
  {
    title: "Varsity.TV Standings",
    description:
      "Delivered a first-of-its-kind standings experience for the elite cheerleading community. The work included data syncing, filtering and searching.",
    tags: ["Full-Stack", "TypeScript", "Node.js", "A/B Test", "Angular"],
    imageUrl: varsityStandingsImg,
  },
  {
    title: "AI-Powered Journal App",
    description:
      "A fun side project to better learn React and Next.js. Uses the OpenAI API and Langchain to assess the mood of journal entries.",
    tags: ["React", "Next.js", "Prisma", "OpenAI", "Clerk", "MySQL"],
    imageUrl: journalAppImg,
  },
  {
    title: "Web Payment Funnel",
    description:
      "Built a new, simplified funnel for FloSports, featuring signup, plan selection and payment. Used A/B testing and Segment to reveal a multi-million dollar improvement.",
    tags: ["Stripe", "A/B Test", "Angular", "RxJS", "Segment"],
    imageUrl: paymentFunnelImg,
  },
] as const

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Angular",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind",
  "RxJS",
  "Git",
  "A/B Testing",
  "Server-Driven UI",
  "CI/CD",
  "Segment",
  "Jest",
  "Cypress",
  "Prisma",
  "Framer Motion",
] as const
