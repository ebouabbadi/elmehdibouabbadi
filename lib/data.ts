import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer - Internship",
    campagne: "Sahih Business",
    location: "Tangier, Morocco · On-site",
    smallDescription:
      "Developed and maintained ERP.",
      bigDescription:
      "Developed and maintained ERP software using Odoo and Python, tailoring solutions to meet business needs.",
    icon: React.createElement(CgWorkAlt),
    tags: ["Odoo", "Python", "CSS", "PostgreSQL"],
    date: "Mar 2024 - Apr 2024",
  },
  {
    title: "Mobile Developer - Internship",
    campagne: "L’Atelier Digital - Digital Agency & AI",
    location: "Casablanca, Morocco · Remote",
    smallDescription:
      "Spearheaded mobile app development using React Native and Expo, delivering robust, cross-platform solutions for iOS and Android devices.",
       bigDescription:
      "Spearheaded mobile app development",
    icon: React.createElement(CgWorkAlt),
    tags: ["React", "react native", "android", "ios", "adobexd", "postman"],
    date: "Apr 2024 - Aug 2024",
  },
  {
    title: "Mobile Developer - Freelance",
    campagne: "L’Atelier Digital - Digital Agency & AI",
    location: "Casablanca, Morocco · Remote",
    smallDescription:
      "Spearheading mobile development projects",
      bigDescription:
      "Spearheading mobile development projects using React Native, ensuring smooth deployment and performance across iOS and Android platforms",
    icon: React.createElement(CgWorkAlt),
    tags: ["React", "react native", "android", "ios", "adobexd", "postman", "teamwork"],
    date: "Aug 2024 - Present",
  },
] as const;

export const educationsData = [
  {
    title: "Baccalaureate of physics sciences",
    school: "Lycee Ibn Tofail Oued Zem",
    location: "Oued Zem, Morocco",
    description:
      "The program of the physical sciences branch includes the following main subjects: Physics and Chemistry, Mathematics, Life and Earth Sciences, and others.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2018",
  },
  {
    title: "Physical Matter Sciences",
    school: "Sultan Moulay Slimane University",
    location: "Khouribga, Morocco",

    description:
    "The Faculté Polydisciplinaire de Khouribga (FPK), established in 2004 as part of Morocco's decentralization and regionalization policies, is a multidisciplinary university under Sultan Moulay Slimane University. FPK offers a variety of initial and continuing education programs across fundamental and professional disciplines to meet the needs of the region it serves.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Software Engineer - Member",
    school: "UM6P - Mohammed VI Polytechnic University - 1337",
    location: "Khouribga, Morocco",
    description:
      "1337 is the first institution to provide free IT training in Morocco. Its educational approach is based on peer learning, a participatory method that allows students to unleash their creativity through project-based learning, preparing the future coders of tomorrow. 1337 is the coding school par excellence, offering a full immersion in a universe where the future is already present.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  
] as const;

export const projectsData = [
  {
    title: "TRANSCENDENCE",
    description:
      `In front-end development, I prioritized seamless user experiences and intuitive
        navigation. Crafting visually captivating interfaces with React and Next.js, I optimized
        performance and responsiveness through server-side rendering, ensuring smooth
        transitions and swift loading times.
        With Nest.js, I built a secure, scalable backend, ensuring efficient communication and
        data management. Leveraging PostgreSQL and Prisma, I maintained robust data
        integrity. Meticulously planned modular architecture ensured a resilient foundation,
        resulting in a successful full-stack project.`,
    tags: ["TypeScript","Figma","NestJS","Prisma","Tailwind", "Next.js", "HTML","CSS", "Teamwork", "Web Development", "PostgreSQL", "Socket.io", "React.js"],
    imageUrl: "/ft_tran.png",
  },
  {
    title: "INCEPTION",
    description: `Inception is a project aimed at setting up a WordPress website within a Docker container.
The setup includes integrating a MariaDB database for efficient data storage and retrieval. By
utilizing Docker, the project aims to streamline deployment and management processes,
making it easier to maintain a consistent and isolated development environment.
`,
    tags: ["Docker", "MariaDB", "Nginx", "Web Development"],
    imageUrl: "/docker.png",
  },
  {
    title: "WEB SERVER USING C/C++",
    description: `Simply it is a software application that runs on a computer and listens for
incoming requests from clients over the internet or a local network When a client
such as a web browser sends a request for a webpage the web server receives
the request processes it and sends back the requested webpage as a response.`,
    tags: ["C/C++", " Nginx", "HTML", "CSS", "Web Development" ,"HTTP", "Socket.io"],
    imageUrl: '/webserver.jpg',
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C/C++",
  "React Native",
  "Next.js",
  "Nest.js",
  "React",
  "Django",
  "HTML",
  "CSS",
  "GraphQL",
  "Node.js",
  "TailwindCSS",
  "Odoo",
  "Docker",
  "Prisma",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "MariaDB",
  "Express",
  "Git",
  "Trello",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "AdobeXD",
  "Canva",
  "Bash",
] as const;
