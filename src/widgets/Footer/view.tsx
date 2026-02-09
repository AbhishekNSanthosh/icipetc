"use client";
import { navItem } from "@utils/constants";
import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt, FaLink } from "react-icons/fa";
import { MdInsertLink } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index: any) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <footer className="w-full bg-white pt-10 pb-5">
      <div className="px-[5vw]">
        <div className="bg-[#0f172a] text-white rounded-[2rem] p-8 lg:p-12 shadow-2xl overflow-hidden relative">
          {/* Decorative BG element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-conference-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
            {/* Column 1: Brand & Info */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <Link href="/" className="inline-block">
                <span className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  ICIPETC-26
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                International Conference on Interdisciplinary Perspectives of
                Emerging Trends in Computing. Join us for a convergence of minds
                and ideas.
              </p>

              <div className="flex flex-col space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-gray-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-conference-primary transition-colors">
                    <MdOutlineMail className="text-xl" />
                  </div>
                  <Link
                    href="mailto:conferencecse@carmelcet.in"
                    className="text-sm hover:text-white transition-colors"
                  >
                    conferencecse@carmelcet.in
                  </Link>
                </div>
                <div className="flex items-start space-x-3 text-gray-300 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-conference-primary transition-colors">
                    <FaPhone className="text-lg" />
                  </div>
                  <div className="text-sm flex flex-col">
                    <Link
                      href="tel:+919995267896"
                      className="hover:text-white transition-colors"
                    >
                      +91 9995267896
                    </Link>
                    <Link
                      href="tel:+918589059517"
                      className="hover:text-white transition-colors"
                    >
                      +91 8589059517
                    </Link>
                    <Link
                      href="tel:+919995152970"
                      className="hover:text-white transition-colors"
                    >
                      +91 9995152970
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3 flex flex-col space-y-6">
              <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 inline-block w-max">
                Quick Links
              </h3>
              <ul className="flex flex-col space-y-3">
                {navItem?.map((item, index) => (
                  <li key={index} className="flex flex-col">
                    {/* Main Link items without dropdown */}
                    {!item.dropdown && (
                      <Link
                        href={item.link}
                        className="text-gray-400 hover:text-primary-400 text-sm flex items-center gap-2 transition-colors w-fit"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                        <span className="capitalize">{item.title}</span>
                      </Link>
                    )}

                    {/* Items with dropdown - Render Main Title if it has a link, else just title */}
                    {item.dropdown && (
                      <div className="flex flex-col space-y-2">
                        {item.link !== "/" && item.link !== "#" ? (
                          <Link
                            href={item.link}
                            className="text-gray-400 hover:text-primary-400 text-sm flex items-center gap-2 transition-colors w-fit"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                            <span className="capitalize">{item.title}</span>
                          </Link>
                        ) : (
                          <span className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-2 mb-1">
                            {item.title}
                          </span>
                        )}

                        {/* Sub-links */}
                        {item.dropdown.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.url}
                            className="text-gray-400 hover:text-primary-400 text-sm flex items-center gap-2 pl-4 transition-colors w-fit"
                          >
                            <FaLink className="text-[10px] text-gray-600" />
                            <span className="capitalize">{sub.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Location / Map */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div className="flex items-center space-x-2 text-white border-b border-gray-700 pb-2 w-full">
                <FaMapMarkerAlt className="text-conference-highlight" />
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <div className="w-full h-48 lg:h-full rounded-xl overflow-hidden border border-gray-700 shadow-inner bg-gray-800 relative group">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Carmel College of Engineering & Technology, Punnapra, Alappuzha
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-10">
            <p>© 2026 ICIPETC-26. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
