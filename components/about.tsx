"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 
      sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a Master's degree in both{" "}
        <span className="font-medium">
          Applied Mathematics and Data Science
        </span>
        , I decided to pursue my passion for programming and analytics. I
        enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem and revealing
        hidden information within the data at hand. My core stack is{" "}
        <span className="font-medium">
          python, SQL, PowerBI, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar and worked with cloud computing services such as
        Azure & AWS. I am always eager to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football, tennis, and editing videos. I also enjoy{" "}
        <span className="font-medium">
          creating social media content and analyse trends in the digital world
          and real world
        </span>
        . I am currently learning about{" "}
        <span className="font-medium">
          ancient history and theoratical physics
        </span>
        . I'm also learning how to speak spanish.
      </p>
    </motion.section>
  );
}
