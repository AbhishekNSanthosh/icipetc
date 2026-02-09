import Titlebar from "@components/Titlebar";
import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const feeDetails = [
  {
    category: "UG/PG students",
    amount: "₹ 1500/-",
    icon: <FaUserGraduate className="text-xl" />,
    color: "text-gray-700",
  },
  {
    category: "Research Scholars",
    amount: "₹ 2000/-",
    icon: <FaChalkboardTeacher className="text-xl" />,
    color: "text-gray-700",
  },
  {
    category: "Academicians/Professionals",
    amount: "₹ 2500/-",
    icon: <FaUserTie className="text-xl" />,
    color: "text-gray-700",
  },
  {
    category: "Attendees",
    amount: "₹ 500/-",
    icon: <FaUsers className="text-xl" />,
    color: "text-gray-700",
  },
];

export default function RegistrationContent() {
  return (
    <div className="lg:pt-[110px] pt-[80px] px-[5vw] text-gray-700 pb-20 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-14">
        <Titlebar
          className="text-primary-600 text-sm lg:text-3xl font-bold uppercase tracking-wider"
          title="Registration Details"
          bgColor="bg-transparent"
        />
        <p className="max-w-2xl text-gray-500 text-lg">
          Join us at ICIPETC-26. Find your category below and register to be a
          part of this premier conference.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full">
        {/* Left Col: Info & Fee Structure */}
        <div className="flex-1 space-y-8">
          {/* Eligibility Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary-600 rounded-full"></span>
              Who can apply?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This conference is open to{" "}
              <span className="font-semibold text-primary-600">
                UG/PG students
              </span>{" "}
              of Engineering colleges,{" "}
              <span className="font-semibold text-primary-600">
                Academicians
              </span>
              ,{" "}
              <span className="font-semibold text-primary-600">
                Research Scholars
              </span>
              , and{" "}
              <span className="font-semibold text-primary-600">
                Professionals
              </span>{" "}
              from research organizations and industries.
            </p>
          </div>

          {/* Fee Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {feeDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gray-300 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                    {item.category}
                  </h4>
                  <div
                    className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${item.color} group-hover:bg-gray-100 transition-colors`}
                  >
                    {item.icon}
                  </div>
                </div>

                <p className="text-3xl font-bold text-gray-800 tracking-tight">
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Payment / Bank Details Placeholder */}
        <div className="flex-1">
          <div className="h-full bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
              <MdPayment className="text-4xl" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Payment Details
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                The bank account details for fee payment will be updated here
                shortly.
              </p>
            </div>

            <div className="py-2 px-6 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
