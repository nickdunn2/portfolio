import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuFileSpreadsheet } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
] as const;

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
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

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
] as const;
