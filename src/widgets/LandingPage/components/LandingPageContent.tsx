"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";

export default function LandingPageContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom ease for smoothness
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="min-h-[100vh] pt-[80px] lg:pt-[100px] back px-[5vw] flex items-center justify-center overflow-hidden">
      <div className="flex w-full flex-col-reverse gap-[5vw] lg:flex-row items-center justify-center">
        {/* Text Content */}
        <motion.div
          className="flex-1 flex items-start justify-center flex-col space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="lg:text-[2.7vw] text-[8vw] font-bold text-gray-800 text-left leading-tight"
            variants={itemVariants}
          >
            <span className="text-conference-accent">I</span>nternational{" "}
            <span className="text-conference-accent">C</span>onference on{" "}
            <span className="text-conference-accent">I</span>nterdisciplinary{" "}
            <span className="text-conference-accent">P</span>erspectives of{" "}
            <span className="text-conference-accent">E</span>merging
            <span className="text-conference-accent ml-1">T</span>rends in{" "}
            <span className="text-conference-accent">Computing</span>
          </motion.h1>

          <motion.div variants={itemVariants}>
            <p className="text-base text-left text-gray-600 max-w-xl leading-relaxed">
              Empowering Minds, Bridging Horizons: Unveiling the Future at the
              International Conference on Interdisciplinary Perspectives of
              Emerging Trends in Computing (ICIPETC-26)
            </p>
            <span className="font-bold text-conference-primary block mt-4 text-xl tracking-wide">
              March 19, 2026
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-start space-x-6 flex-col lg:flex-row pt-4"
            variants={itemVariants}
          >
            <Link href={"https://forms.gle/MPumP2bZST17MJmq5"} target="_blank">
              <button className="bg-conference-primary hover:bg-conference-secondary transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl rounded-[8px] outline-none border-none px-6 py-3 text-white font-medium">
                Submit your paper now
              </button>
            </Link>

            <div className="w-[1px] h-[3rem] bg-gray-300 hidden lg:block mx-4"></div>

            <Link href={"/about"} className="hidden lg:flex group">
              <button className="flex flex-row items-center justify-center gap-2 text-conference-primary font-medium group-hover:text-conference-secondary transition-colors">
                Learn more
                <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="flex-1 flex items-center justify-center lg:justify-end relative"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Background decorative blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-conference-primary/5 to-transparent blur-3xl -z-10 rounded-full animate-pulse-slow"></div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <Image
              src={"/brand.png"}
              alt="ICIPETC Conference Hero"
              width={800}
              height={800}
              className="w-full max-w-[35rem] lg:max-w-[40rem] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
