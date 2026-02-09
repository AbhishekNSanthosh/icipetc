import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LandingPageContent() {
  return (
    <div className="min-h-[100vh] pt-[80px] lg:pt-[100px] back px-[5vw] flex items-center justify-center">
      <div className="flex w-full flex-col-reverse gap-[5vw] lg:flex-row items-center justify-center">
        <div className="flex-1 flex items-start justify-center flex-col space-y-3">
          <span className="lg:text-[2.7vw] text-[8vw] font-bold text-gray-800 text-left">
            <span className="text-conference-accent">I</span>nternational{" "}
            <span className="text-conference-accent">C</span>onference on{" "}
            <span className="text-conference-accent">I</span>nterdisciplinary{" "}
            <span className="text-conference-accent">P</span>erspectives of{" "}
            <span className="text-conference-accent">E</span>merging
            <span className="text-conference-accent ml-1">T</span>rends in{" "}
            <span className="text-conference-accent">Computing</span>
          </span>
          <p className="text-base text-left">
            Empowering Minds, Bridging Horizons: Unveiling the Future at the
            International Conference on Interdisciplinary Perspectives of
            Emerging Trends in Computing
          </p>
          <div className="flex items-center justify-start space-x-6 flex-col lg:flex-row">
            <Link href={"https://forms.gle/VWgA4t2jr1esEkLcA"} target="_blank">
              <button className="bg-conference-primary rounded-[8px] outline-none border-none px-4 py-2 text-white">
                Submit your paper now
              </button>
            </Link>
            <div className="w-[2px] h-[3rem] bg-gray-300 hidden lg:flex md:flex"></div>
            <Link href={"/about"} className="hidden lg:flex">
              <button className="flex flex-row items-center justify-center gap-2 text-conference-primary">
                Learn more <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <Image
            src={"/images/carmelInd.webp"}
            alt=""
            width={2000}
            height={2000}
            className="w-[32rem] h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
