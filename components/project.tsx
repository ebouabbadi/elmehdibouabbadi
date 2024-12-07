"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { HiLockClosed } from "react-icons/hi";
import { FaDraftingCompass, FaGithub, FaPaperPlane, FaStreetView } from "react-icons/fa";
import moment from 'moment'


type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  isPrivate,
  time
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-auto hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[52%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex justify-fcenter items-center space-x-[2%]">
          <Link  href={link} target="_blank" className={`text-2xl underline ${!isPrivate ? 'hover:underline-offset-4': null}  font-semibold`}>{title}</Link>
         {isPrivate && <HiLockClosed className="opacity-60 " />}
         <a
          className=" hover:text-green-500 "
          href={link}
          target="_blank"
        >
          {!isPrivate && <FaPaperPlane className="h-[1.2rem] w-[1.2rem]" />}
        </a>
        <div className="text-xs md:text-sm text-gray-600">{moment(time, "YYYYMMDD").add(1, 'days').fromNow()}</div>
          </div>

          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          width="202"
          height="292"
          alt="Project I worked on"
          quality={100}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
