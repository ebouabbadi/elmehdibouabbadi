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
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
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
    description:
      "Developed and maintained ERP software using Odoo and Python, tailoring solutions to meet business needs.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Apr 2024",
  },
  {
    title: "Mobile Developer - Internship",
    campagne: "L’Atelier Digital - Digital Agency & AI",
    location: "Casablanca, Morocco · Remote",
    description:
      "Spearheaded mobile app development using React Native and Expo, delivering robust, cross-platform solutions for iOS and Android devices.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 - Aug 2024",
  },
  {
    title: "Mobile Developer - Freelance",
    campagne: "L’Atelier Digital - Digital Agency & AI",
    location: "Casablanca, Morocco · Remote",
    description:
      "Spearheading mobile development projects using React Native, ensuring smooth deployment and performance across iOS and Android platforms",
    icon: React.createElement(CgWorkAlt),
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
  "HTML",
  "CSS",
  "TypeScript",
  "JavaScript",
  "C/C++",
  "React",
  "React Native",
  "Next.js",
  "Nest.js",
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
  "Python",
  "Framer Motion",
  "Figma",
  "AdobeXD",
  "Canva",
  "Bash",
] as const;
