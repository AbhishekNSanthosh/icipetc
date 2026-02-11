"use client";
import React from "react";
import {
  HiOutlineRocketLaunch,
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { motion, Variants } from "framer-motion";

export default function VisionMission() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const leftColumnVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightColumnVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="px-[5vw] py-20 bg-white overflow-hidden">
      <motion.div
        className="flex flex-col lg:flex-row gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Institute Section */}
        <motion.div
          variants={leftColumnVariants}
          className="flex-1 flex flex-col space-y-8"
        >
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Institute Vision
            </h2>
            <div className="h-1 w-20 bg-conference-accent rounded-full"></div>
          </div>

          <motion.div
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(5, 181, 112, 0.08)",
            }}
            className="bg-conference-primary/5 p-6 rounded-2xl border border-conference-primary/10 transition-colors duration-300"
          >
            <p className="text-lg text-gray-700 font-medium leading-relaxed italic">
              "To mould distinctive engineers with integrity and social
              commitment."
            </p>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <HiOutlineLightBulb className="text-2xl text-conference-accent animate-pulse" />
              Institute Mission
            </h3>
            <motion.div variants={containerVariants} className="space-y-4">
              {[
                "Extend harmonious curricular and co-curricular exposure to the students.",
                "Equip the students to accomplish career goals upholding moral values.",
                "Encourage the students to contribute for the sustainable development of the society.",
              ].map((item, idx) => (
                <motion.div
                  variants={itemVariants}
                  key={idx}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-conference-primary/10 flex items-center justify-center mt-1 group-hover:bg-conference-primary transition-colors duration-300">
                    <HiOutlineRocketLaunch className="text-conference-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>

        {/* Department Section */}
        <motion.div
          variants={rightColumnVariants}
          className="flex-1 flex flex-col space-y-8"
        >
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Department Vision
            </h2>
            <div className="h-1 w-20 bg-conference-highlight rounded-full"></div>
          </div>

          <motion.div
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(5, 181, 112, 0.08)",
            }}
            className="bg-conference-primary/5 p-6 rounded-2xl border border-conference-primary/10 transition-colors duration-300"
          >
            <p className="text-lg text-gray-700 font-medium leading-relaxed italic">
              "To nurture professionally competent and socially committed IT
              professionals."
            </p>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <HiOutlineAcademicCap
                className="text-2xl text-conference-highlight animate-bounce"
                style={{ animationDuration: "3s" }}
              />
              Department Mission
            </h3>
            <motion.div variants={containerVariants} className="space-y-4">
              {[
                "Provide quality education in both theoretical and applied fields of computer science.",
                "Equip the students with industry-oriented skills in computer science to take up real-world challenges.",
                "Inculcate ethical values and leadership qualities.",
              ].map((item, idx) => (
                <motion.div
                  variants={itemVariants}
                  key={idx}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-conference-primary/10 flex items-center justify-center mt-1 group-hover:bg-conference-primary transition-colors duration-300">
                    <HiOutlineRocketLaunch className="text-conference-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
