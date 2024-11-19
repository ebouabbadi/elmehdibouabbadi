import React from "react";
import { CgAwards, CgBriefcase, CgCodeSlash, CgFolder, CgHome, CgMail, CgProfile, CgToolbox, CgWebsite, CgWorkAlt } from "react-icons/cg";
import { FaBrain, FaBriefcase, FaClipboardList, FaCode, FaEnvelope, FaFolderOpen, FaGithub, FaGraduationCap, FaHome, FaInfoCircle, FaKeyboard, FaLaptopCode, FaLightbulb, FaProjectDiagram, FaRProject, FaTasks, FaTools, FaUser, FaUserAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(FaHome, {size: 22}),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(FaUser, {size: 22}),
  },
  {
    name: "Education",
    hash: "#education",
    icon: React.createElement(FaGraduationCap, {size: 22}),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(FaBriefcase, {size: 22}),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaFolderOpen, {size: 22}),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(FaLaptopCode, {size: 22}),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(FaEnvelope, {size: 22}),
  },
] as const;

export const experiencesData = [
  {
    title: "Odoo Developer - Internship",
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
      "Spearheaded mobile app development using React Native and Expo, delivering robust, cross-platform solutions for iOS and Android devices.",
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
    date: "Aug 2024 - Oct 2024",
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
      "The Faculté Polydisciplinaire de Khouribga (FPK), established in 2004, offers multidisciplinary education under Sultan Moulay Slimane University, providing diverse programs in fundamental and professional fields to meet the region's educational needs.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Software Engineer - Member",
    school: "UM6P - Mohammed VI Polytechnic University - 1337",
    location: "Khouribga, Morocco",
    description:
      "1337 is Morocco's first free IT training institution, using peer-based, project-driven learning to prepare future coders for tomorrow’s challenges. It offers full immersion in cutting-edge coding education.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },

] as const;

export const projectsData = [
   {
    title: "Yawmiyat",
    description: `Yawmiyat is a modern and user-friendly app designed to help you organize your day, jot down your activities, and track your daily goals. Whether you want to plan your tasks, write down ideas, or recall important moments, Yawmiyat is your personal companion to structure your life and stay productive.`,
    tags: ["JavaScript", "React.js","node.js","Prisma", "React Native", "Tailwind", "iOS Development", "Android Development", "HTML", "CSS", "Teamwork", "Postman"],
    imageUrl: "/yawmiat.png",
    link: "",
    isPrivate: true,
    time: '202419',
  },
  {
    title: "Startup",
    description: ` Spearheading mobile development projects using React Native, ensuring smooth deployment and performance across iOS and Android platforms.
- Enhancing mobile applications with intuitive user interfaces and responsive designs, contributing to a high-quality user experience.
- Collaborating with cross-functional teams to integrate innovative features and optimize app performance.
- Utilizing a broad skill set, including Tailwind CSS, to deliver cutting-edge, user-centric mobile solutions that meet client requirements.`,
    tags: ["JavaScript", "React.js", "React Native", "AdobeXD", "Tailwind", "iOS Development", "Android Development", "HTML", "CSS", "Teamwork", "Postman"],
    imageUrl: "/buzz.png",
    link: "",
    isPrivate: true,
    time: '202411',
  },
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
    tags: ["TypeScript", "Figma", "NestJS", "Prisma", "Tailwind", "Next.js", "HTML", "CSS", "Teamwork", "Web Development", "PostgreSQL", "Socket.io", "React.js"],
    imageUrl: "/ft_tran.png",
    link: "https://drive.google.com/file/d/1kSyPON4wmgl1-ML2zq2fTcKqW_7gstvY/edit",
    isPrivate: false,
    time: '202401',
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
    link: "https://github.com/ebouabbadi/INCEPTION",
    isPrivate: false,
    time: '202309',


  },
  {
    title: "WEB SERVER",
    description: `Simply it is a software application that runs on a computer and listens for
incoming requests from clients over the internet or a local network When a client
such as a web browser sends a request for a webpage the web server receives
the request processes it and sends back the requested webpage as a response.`,
    tags: ["C/C++", " Nginx", "HTML", "CSS", "Web Development", "HTTP", "Socket.io","Teamwork"],
    imageUrl: '/webserver.jpg',
    link: "https://github.com/ebouabbadi/WEBSERV",
    isPrivate: false,
    time: '202304',
  },
  {
    title: "CUB3D",
    description: `This project is inspired by the world-famous Wolfenstein 3D game, which
was the first FPS ever. It will enable you to explore ray-casting. Your goal will be to
make a dynamic view inside a maze, in which you’ll have to find your way.`,
    tags: [" C/C++", "miniLibX", "Algorithms","Teamwork"],
    imageUrl: '/cub3d.jpg',
    link: "https://github.com/ebouabbadi/CUB3D",
    isPrivate: false,
    time: '202301',
  },
  {
    title: "MiniShell",
    description: `Created a simple shell, deepening understanding of processes and file descriptors. This project provided hands-on experience with command-line interactions and the underlying mechanisms that shaped early computing interfaces.`,
    tags: [" C/C++", "Algorithms", "Bash" ,"Teamwork"],
    imageUrl: '/shell.jpg',
    link: "https://github.com/ebouabbadi/MINISHELL",
    isPrivate: false,
    time: '202210',

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
