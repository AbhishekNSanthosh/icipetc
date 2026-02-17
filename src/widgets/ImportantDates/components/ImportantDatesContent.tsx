import Titlebar from "@components/Titlebar";
import React from "react";
import { MdDateRange } from "react-icons/md";

const timelineData = [
  {
    date: "25 Feb 2026",
    title: "Last date to submit paper",
  },
  {
    date: "28 Feb 2026",
    title: "Acceptance notification",
  },
  {
    date: "07 March 2026",
    title: "Camera ready paper",
  },
  {
    date: "19 March 2026",
    title: "Conference date",
  },
];

export default function ImportantDatesContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] pb-10 flex flex-col items-center">
      <div className="w-full mb-10 lg:mb-16">
        <Titlebar
          title="Important Dates"
          className="text-primary-600 text-sm lg:text-2xl font-medium"
          bgColor="bg-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-primary-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              <MdDateRange className="text-2xl" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 text-center mb-2 group-hover:text-primary-600 transition-colors duration-300">
              {item.date}
            </h3>

            <div className="h-1 w-12 bg-gray-200 rounded-full mb-3 group-hover:bg-primary-200 transition-colors duration-300"></div>

            <p className="text-gray-500 font-medium text-center text-sm uppercase tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
