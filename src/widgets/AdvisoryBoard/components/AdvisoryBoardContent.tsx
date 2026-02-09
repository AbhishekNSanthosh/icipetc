import Titlebar from "@components/Titlebar";
import { advisors } from "@utils/constants";
import React from "react";
import { FaUniversity, FaUserTie } from "react-icons/fa";

export default function AdvisoryBoardContent() {
  return (
    <div className="px-[5vw] lg:pt-[110px] pt-[80px] min-h-[100vh] pb-20 bg-gray-50/50">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-14">
        <Titlebar
          className="text-primary-600 text-sm lg:text-3xl font-bold uppercase tracking-wider"
          title="Advisory Board"
          bgColor="bg-transparent"
        />
        <p className="max-w-3xl text-gray-500 text-lg">
          Our distinguished advisory board comprises renowned academicians and
          industry experts who guide the strategic direction of NCIPETC-26.
        </p>
      </div>

      <div className="flex flex-col space-y-12 w-full">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-primary-600"></div>
          <span className="text-xl font-bold text-gray-800 tracking-wide uppercase">
            Distinguished Members
          </span>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-primary-600"></div>
        </div>

        {/* Grid for Advisors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
                <FaUniversity className="text-9xl text-primary-600" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                    <FaUserTie className="text-xl" />
                  </div>
                  <div className="h-8 w-[2px] bg-gray-100"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {advisor.name}
                </h3>

                <div className="space-y-1 text-sm text-gray-600 flex-grow">
                  <p className="font-semibold text-primary-500">
                    {advisor.desgn}
                  </p>
                  <p className="italic text-gray-500">{advisor.dep}</p>
                  {advisor.clg1 && (
                    <p className="mt-2 pt-2 border-t border-gray-100 text-gray-500 font-medium">
                      {advisor.clg1}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
