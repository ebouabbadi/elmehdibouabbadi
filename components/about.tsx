"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import moment from "moment";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
  >
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
      Hello, I'm <span className="font-medium">El Mehdi Bouabbadi</span>, a dedicated{" "}
      <span className="font-medium">Software Engineer</span> specializing in{" "}
      <span className="font-medium">Full Stack Development</span> for both{" "}
      <span className="font-medium">web and mobile applications</span>. With over {" "}
      {moment(202310, "YYYYMM").fromNow()} of experience, I've honed my skills in key technologies such as{" "}
      <span className="font-medium">
        React.js, React Native, Next.js, Node.js, Nest.js, and Docker
      </span>
      . My work spans a wide range of projects, from mobile apps to scalable web
      solutions, all aimed at enhancing user experiences and meeting business
      needs.
    </p>
  
    <p className="mb-3">
      As a problem solver and tech enthusiast, I enjoy diving deep into complex
      challenges, whether it's refining front-end interfaces for seamless
      interaction or building secure, efficient back-end systems. I'm passionate
      about staying ahead of the curve with the latest industry trends and
      delivering innovative solutions that make a real impact.
    </p>
  
    <p>
      I'm always excited to take on new challenges and collaborate on projects
      that push the boundaries of what's possible in software development. Let’s
      work together to create something exceptional!
    </p>
  </motion.section>
  );
}
