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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer - Internship",
    location: "Tangier, Morocco · On-site",
    description:
      "Developed and maintained ERP software using Odoo and Python, tailoring solutions to meet business needs.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Apr 2024",
  },
  {
    title: "Mobile Developer - Internship",
    location: "Casablanca, Morocco · Remote",
    description:
      "Spearheaded mobile app development using React Native and Expo, delivering robust, cross-platform solutions for iOS and Android devices.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2024 - Aug 2024",
  },
  {
    title: "Mobile Developer - Freelance",
    location: "Casablanca, Morocco · Remote",
    description:
      "Spearheading mobile development projects using React Native, ensuring smooth deployment and performance across iOS and Android platforms",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Present",
  },
] as const;

export const educationData = [
  {
    title: "PHYSICAL MATTER SCIENCES",
    school: "Sultan Moulay Slimane University",
    description:
    "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "SOFTWARE ENGINEER - Member",
    school: "UM6P - Mohammed VI Polytechnic University - 1337",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
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
  "Express",
  "Git",
  "Trello",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
