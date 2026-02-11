"use client";
import React from "react";
import Image from "next/image";
import Titlebar from "@components/Titlebar";
import { HiOutlineAcademicCap, HiOutlineUserGroup } from "react-icons/hi2";
import { motion, Variants } from "framer-motion";

export default function About() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] pb-20 bg-white min-h-screen overflow-hidden">
      <div className="flex flex-col space-y-24 w-full">
        {/* Conference Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <Titlebar
              title="About the conference"
              className="text-primary-600 text-sm lg:text-2xl font-medium"
              bgColor="bg-transparent"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <motion.div variants={fadeInUp} className="flex-1 space-y-6">
              <div className="flex flex-col gap-6">
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  International Conference on Interdisciplinary Perspectives of
                  Emerging Trends in Computing (ICIPETC-26) aims to provide an
                  excellent forum for uniting academicians and experts from
                  industries to share knowledge and research in the field of
                  computing. The conference also serves as a dynamic platform
                  for researchers, scientists, academicians, and students to
                  exchange their ideas in all aspects of computing.
                </p>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Concepts and products that develop new ideas or theories
                  addressing societal challenges, promoting sustainability, and
                  contributing to the advancement of science, engineering,
                  healthcare, business, and other domains are encouraged.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 w-fit px-4 py-2 rounded-lg shadow-sm">
                  <HiOutlineAcademicCap className="text-lg text-conference-primary" />
                  Selected papers will be published in book chapters of Scopus indexed journals.
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex-1 flex items-center justify-center relative w-full"
            >
              <Image
                src={"/images/aboutconf.png"}
                width={1000}
                height={1000}
                alt="Conference Discussion"
                className="w-full max-w-[32rem] rounded-2xl shadow-lg filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* College Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8"
        >
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 w-full">
            {/* Text Content */}
            <motion.div variants={fadeInUp} className="flex-1 space-y-6">
              <div className="flex items-center justify-end lg:justify-start w-full lg:w-auto">
                <div className="w-full flex justify-end">
                  <Titlebar
                    title="About CCET"
                    className="text-primary-600 text-sm lg:text-2xl font-medium"
                    bgColor="bg-transparent"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed text-justify lg:text-right">
                Carmel College of Engineering & Technology (CCET) is owned and
                managed by St. Joseph's Carmel Educational & Charitable Trust of
                CMI. CCET is a self-financing college approved by AICTE and
                affiliated to APJ Abdul Kalam Technological University, Kerala.
              </p>
              <p className="text-gray-600 text-justify lg:text-right">
                We offer 4-year B.Tech degree courses in Civil Engineering,
                Mechanical Engineering, Electrical and Electronics Engineering,
                and Computer Science and Engineering.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeInUp}
              className="flex-1 flex items-center justify-center relative w-full"
            >
              <Image
                src={"/images/aboutclg.png"}
                width={1000}
                height={1000}
                alt="CCET Campus"
                className="w-full max-w-[32rem] rounded-2xl shadow-lg filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Department Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <Titlebar
              title="About the department"
              className="text-primary-600 text-sm lg:text-2xl font-medium"
              bgColor="bg-transparent"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <motion.div variants={fadeInUp} className="flex-1 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                The Department of CSE in Carmel College of Engineering and
                Technology was established in 2017. Currently with an intake of
                120 students per year, the department plays a key role in
                enhancing the technical competence of students in Computer
                Science & Engineering.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-conference-highlight/10 flex items-center justify-center shadow-sm text-conference-primary shrink-0">
                    <HiOutlineUserGroup className="text-xl" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Regular workshops, hands-on sessions, and invited talks by
                    industry experts.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-conference-highlight/10 flex items-center justify-center shadow-sm text-conference-primary shrink-0">
                    <HiOutlineAcademicCap className="text-xl" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Research focus on Computer Networking, Cloud Computing,
                    Image Processing, and Computer Vision.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex-1 flex items-center justify-center relative w-full"
            >
              <Image
                src={"/images/dep.png"}
                width={1000}
                height={1000}
                alt="CSE Department"
                className="w-full max-w-[32rem] rounded-2xl shadow-lg filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
