import Titlebar from "@components/Titlebar";
import { topics } from "@utils/constants";
import Image from "next/image";
import React from "react";
import {
  FaNetworkWired,
  FaBrain,
  FaUserSecret,
  FaRobot,
  FaImage,
  FaDatabase,
  FaWifi,
  FaLock,
  FaLink,
  FaLaptopCode,
} from "react-icons/fa";

// Helper to get icon based on topic title
const getTopicIcon = (title: string) => {
  const t = title.toLowerCase();

  if (t.includes("neural") || t.includes("intelligence") || t.includes("brain"))
    return <FaBrain className="text-3xl" />;
  if (t.includes("network") || t.includes("distributed"))
    return <FaNetworkWired className="text-3xl" />;
  if (t.includes("security") || t.includes("hacking") || t.includes("cyber"))
    return <FaUserSecret className="text-3xl" />;
  if (t.includes("learning")) return <FaRobot className="text-3xl" />;
  if (t.includes("image")) return <FaImage className="text-3xl" />;
  if (t.includes("data")) return <FaDatabase className="text-3xl" />;
  if (t.includes("internet") || t.includes("ubiquitous") || t.includes("cloud"))
    return <FaWifi className="text-3xl" />;
  if (t.includes("chain")) return <FaLink className="text-3xl" />;

  return <FaLaptopCode className="text-3xl" />; // Default
};

export default function CallForPapersContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] pb-16">
      {/* Intro Section */}
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <Titlebar
              className="text-primary-600 text-sm lg:text-3xl font-bold uppercase tracking-wider"
              title="Call for Papers"
              bgColor="bg-transparent"
            />
            <p className="text-justify text-gray-600 text-lg leading-relaxed">
              The aim of this conference is to bring together academicians,
              researchers, and professionals from diverse fields of engineering
              and technology to a common platform in order to facilitate
              exchange of knowledge and experience.
            </p>
            <p className="text-justify text-gray-600 text-lg leading-relaxed">
              The conference will provide an arena for showcasing novel research
              findings and practical experiences in various engineering domains.
              We invite you to submit your original research contributions to{" "}
              <span className="font-bold text-primary-600">ICIPETC-26</span>.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            {/* Decorative blob or circle could go here */}
            <div className="absolute inset-0 bg-primary-50 rounded-full blur-3xl opacity-30 transform scale-75"></div>
            <Image
              src="/callforpaper.svg"
              height={500}
              width={500}
              alt="Call for papers illustration"
              className="w-[20rem] lg:w-[28rem] relative z-10 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100"></div>

        {/* Who can apply Section */}
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-12 items-center">
          <div className="flex-1">
            <Titlebar
              className="text-primary-600 text-sm lg:text-3xl font-bold uppercase tracking-wider"
              title="Who can apply?"
              bgColor="bg-transparent"
            />
            <p className="text-justify text-gray-600 text-lg leading-relaxed mt-4">
              This Conference is open to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 text-lg">
              <li>
                <span className="font-semibold">UG/PG Students</span> of
                engineering colleges
              </li>
              <li>
                <span className="font-semibold">Academicians</span>
              </li>
              <li>
                <span className="font-semibold">Research Scholars</span>
              </li>
              <li>
                <span className="font-semibold">Professionals</span> from
                research organizations and industries
              </li>
            </ul>
          </div>
          {/* Optional: Add an illustration or icon here if desired, or keep it text focused */}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100"></div>

        {/* Topics Grid Section */}
        <div className="flex flex-col space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Topics of Interest
            </h2>
            <p className="text-gray-500">
              Submissions include, but are not limited to the following topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group flex flex-col items-start p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {getTopicIcon(topic.title)}
                </div>

                <h3 className="text-lg font-bold text-gray-800 capitalize group-hover:text-primary-600 transition-colors">
                  {topic.title}
                </h3>
                <div className="h-1 w-12 bg-gray-200 mt-3 rounded-full group-hover:bg-primary-300 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
