import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import pislfreightImg from "@/public/pislfreight.png"
import zenillaImg from "@/public/zenilla.png"
import huntvilleImg from "@/public/huntville.png"

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
    title: "Zenilla Media",
    description:"Web for unparalleled integrated marketing communications solutions tailored for the diverse and dynamic landscape of Sub-Saharan Africa.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: zenillaImg,
    link: "https://www.zenillamedia.com", 
  },
  {
    title: "PISL Freight",
    description:
      "A web facing application for approximately tell the client cost of buying a car from directly from the  United State and shipping it to Nigeria. ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node", "Express" ],
    imageUrl: pislfreightImg,
    link: "https://www/pislfreight.com",
  },
  {
    title: "Huntville",
    description:
      "Huntville it an online exam registration center,technological solution for clients and trainings ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: huntvilleImg,
    link: "https://www.huntvilletech.com.ng",
  },
  
] as const

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Reactjs",
  "Nextjs",
  "Angular",
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
