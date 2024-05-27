import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import corpcommentImg from "@/public/corpcomment.png"
import rmtdevImg from "@/public/rmtdev.png"
import wordanalyticsImg from "@/public/wordanalytics.png"

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
    title: "Software Developer",
    location: "Polaris Digitech, Lagos",
    description:
      "Working as sofware developer majorly frontend role, also cloud architect",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
  {
    title: "Software Developer",
    location: "TechSpice, Lagos",
    description: "I worked as a part-time developer role, with role lead role overseeing the complete developement process",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Jnr. Software Developer",
    location: "GIIT, Lagos",
    description:
      "It was an intership experience that became a remote job.",
    icon: React.createElement(FaReact),
    date: "2018 - 2020",
  },
] as const

export const projectsData = [
  {
    title: "",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Reactjs",
  "Nextjs",
  "Augular",
  "Nodejs",
  "Expressjs",
  "Python",
  "PHP",
  "C++",
  "SQL",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Machine Learning",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Linux",
  "Ngnix",
  " Vulnerability Assessment",
  "Penetration Testing",
  "IT Support",
] as const
