import Titlebar from "@components/Titlebar";
import Image from "next/image";
import React from "react";
import {
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
} from "react-icons/hi2";

export default function About() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] pb-20 bg-white min-h-screen">
      <div className="flex flex-col space-y-24 w-full">
        {/* Conference Section */}
        <div className="flex flex-col space-y-8">
          <div className="">
            <Titlebar
              title="About the conference"
              className="text-primary-600 text-sm lg:text-2xl font-medium"
              bgColor="bg-transparent"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <div className="flex-1 space-y-6">
              <div className="flex flex-col gap-6">
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  National Conference on Interdisciplinary Perspectives of
                  Emerging Trends in Computing (NCIPETC 2026) aims to provide an
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
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 w-fit px-4 py-2 rounded-lg">
                  <HiOutlineAcademicCap className="text-lg" />
                  Selected papers will be published in Scopus indexed
                  journals/book chapters.
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center relative w-full">
              <Image
                src={"/images/aboutconf.png"}
                width={1000}
                height={1000}
                alt="Conference Discussion"
                className="w-full max-w-[32rem] rounded-2xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* College Section */}
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 w-full">
            {/* Text Content */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-end lg:justify-start w-full lg:w-auto">
                {/* Mobile/Desktop consistent Titlebar placement handling if needed, 
                     but simplifying to standard flow */}
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
            </div>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center relative w-full">
              <Image
                src={"/images/aboutclg.png"}
                width={1000}
                height={1000}
                alt="CCET Campus"
                className="w-full max-w-[32rem] rounded-2xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Department Section */}
        <div className="flex flex-col space-y-8">
          <div className="">
            <Titlebar
              title="About the department"
              className="text-primary-600 text-sm lg:text-2xl font-medium"
              bgColor="bg-transparent"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <div className="flex-1 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                The Department of CSE in Carmel College of Engineering and
                Technology was established in 2017. Currently with an intake of
                120 students per year, the department plays a key role in
                enhancing the technical competence of students in Computer
                Science & Engineering.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shadow-sm text-gray-400 shrink-0">
                    <HiOutlineUserGroup />
                  </div>
                  <p className="text-sm text-gray-600">
                    Regular workshops, hands-on sessions, and invited talks by
                    industry experts.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shadow-sm text-gray-400 shrink-0">
                    <HiOutlineAcademicCap />
                  </div>
                  <p className="text-sm text-gray-600">
                    Research focus on Computer Networking, Cloud Computing,
                    Image Processing, and Computer Vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative w-full">
              <Image
                src={"/images/dep.png"}
                width={1000}
                height={1000}
                alt="CSE Department"
                className="w-full max-w-[32rem] rounded-2xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
