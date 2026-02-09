import Titlebar from "@components/Titlebar";
import { committe, orgCommitte } from "@utils/constants";
import React from "react";
import { FaUserTie } from "react-icons/fa";

export default function OrganizersContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] min-h-[100vh] pb-20 bg-gray-50/30">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-12">
        <Titlebar
          className="text-primary-600 text-sm lg:text-3xl font-bold uppercase tracking-wider"
          title="Organizing Committee"
          bgColor="bg-transparent"
        />
        <p className="max-w-2xl text-gray-500">
          Meet the dedicated team behind ICIPETC-26, working together to bring
          you an inspiring conference experience.
        </p>
      </div>

      <div className="flex flex-col space-y-16 w-full">
        {/* COMMITTEE SECTION */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary-600"></div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
              Chief Patrons & Patrons
            </h2>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committe.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                      <FaUserTie className="text-6xl" />
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                  {/* Role Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2 shadow-lg">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">
                    {member.desgn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COORDINATORS SECTION */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary-600"></div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
              Coordinators
            </h2>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orgCommitte.coordinators.map((advisor, index) => (
              <div
                key={index}
                className="flex items-start p-5 bg-white rounded-xl border border-dashed border-gray-300 hover:border-solid hover:border-primary-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <FaUserTie />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-700 transition-colors">
                    {advisor.name}
                  </h3>
                  <p className="text-sm font-medium text-primary-600 mb-0.5">
                    {advisor.desgn}
                  </p>
                  <p className="text-xs text-gray-500">{advisor.dep}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MEMBERS SECTION */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary-600"></div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
              Committee Members
            </h2>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {orgCommitte.members.map((advisor, index) => (
              <div
                key={index}
                className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {advisor.name}
                </h3>
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-1">
                  {advisor.desgn}
                </p>
                <p className="text-xs text-gray-500">{advisor.dep}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
