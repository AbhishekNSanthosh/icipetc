import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Titlebar from "@components/Titlebar";
import React from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] pb-20 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-14">
        <Titlebar
          className="text-primary-600 text-sm lg:text-3xl font-bold uppercase tracking-wider"
          title="Get in Touch"
          bgColor="bg-transparent"
        />
        <p className="max-w-2xl text-gray-500 text-lg">
          We are here to help. Reach out to us for any queries related to the
          conference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Office Address */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
            <FaLocationDot className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Office Address
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Carmel College of Engineering <br /> & Technology <br />
            <span className="text-sm text-gray-400 mt-2 block">
              Punnapra | Alappuzha-688004, Kerala
            </span>
          </p>
        </div>

        {/* Mail */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
            <FaEnvelope className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Email Us</h3>
          <p className="text-gray-600 mb-4">
            For general inquiries and submissions
          </p>
          <Link
            href="mailto:conferencecse@carmelcet.in"
            className="text-primary-600 font-semibold hover:text-primary-700 bg-primary-50 px-4 py-2 rounded-lg transition-colors"
          >
            conferencecse@carmelcet.in
          </Link>
        </div>

        {/* Phone Numbers */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
            <FaPhoneAlt className="text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-medium">
                Ms Vani V Prakash
              </span>
              <Link
                href="tel:+918129549100"
                className="text-gray-800 hover:text-primary-600 font-bold transition-colors"
              >
                +91 8129549100
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-sm font-medium">
                Ms Nithyamol Antony
              </span>
              <Link
                href="tel:+919995152970"
                className="text-gray-800 hover:text-primary-600 font-bold transition-colors"
              >
                +91 9995152970
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
