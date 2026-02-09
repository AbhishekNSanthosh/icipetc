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
        <div className="bg-[#020617] text-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-16 shadow-2xl overflow-hidden relative border border-gray-800">
          {/* Decorative BG elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-conference-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-conference-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative z-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Column 1: Brand & Contact Info */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              {/* Brand */}
              <div className="text-center lg:text-left">
                <Link href="/" className="inline-block group">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-conference-primary transition-colors">
                    ICIPETC<span className="text-conference-primary">-26</span>
                  </span>
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-sm mx-auto lg:mx-0">
                  International Conference on Interdisciplinary Perspectives of
                  Emerging Trends in Computing.
                </p>
              </div>

              {/* Contact Info - Simplified for Mobile */}
              <div className="space-y-3">
                {/* Email */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-conference-primary/50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-conference-primary/10 flex items-center justify-center shrink-0 text-conference-primary">
                      <MdOutlineMail className="text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">
                        Email
                      </p>
                      <Link
                        href="mailto:conferencecse@carmelcet.in"
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors block truncate"
                        title="conferencecse@carmelcet.in"
                      >
                        conferencecse@carmelcet.in
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-conference-primary/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-conference-primary/10 flex items-center justify-center shrink-0 text-conference-primary">
                      <FaPhone className="text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                        Contact
                      </p>
                      <div className="space-y-1.5">
                        <Link
                          href="tel:+918129549100"
                          className="text-sm font-medium text-gray-300 hover:text-white transition-colors block"
                        >
                          <span className="text-conference-primary">
                            +91 8129549100
                          </span>
                          <span className="block text-xs text-gray-500 mt-0.5">
                            Ms. Vani V. Prakash
                          </span>
                        </Link>
                        <Link
                          href="tel:+919995152970"
                          className="text-sm font-medium text-gray-300 hover:text-white transition-colors block"
                        >
                          <span className="text-conference-primary">
                            +91 9995152970
                          </span>
                          <span className="block text-xs text-gray-500 mt-0.5">
                            Ms. Nithyamol Antony
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links - Simplified */}
            <div className="lg:col-span-3">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-6 h-0.5 bg-conference-primary rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {navItem?.map((item, index) => (
                  <li key={index} className="block">
                    {!item.dropdown && (
                      <Link
                        href={item.link}
                        className="text-gray-400 hover:text-conference-primary text-sm flex items-center gap-2 transition-all group w-fit mx-auto lg:mx-0 py-1"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-conference-primary transition-colors"></span>
                        <span className="capitalize">{item.title}</span>
                      </Link>
                    )}

                    {item.dropdown && (
                      <div className="space-y-2">
                        {item.link !== "/" && item.link !== "#" ? (
                          <Link
                            href={item.link}
                            className="text-gray-300 hover:text-conference-primary text-sm font-medium flex items-center gap-2 transition-all group w-fit mx-auto lg:mx-0 py-1"
                          >
                            <span className="w-1 h-1 rounded-full bg-conference-primary"></span>
                            <span className="capitalize">{item.title}</span>
                          </Link>
                        ) : (
                          <span className="text-gray-300 text-sm font-medium flex items-center gap-2 w-fit mx-auto lg:mx-0 py-1">
                            <span className="w-1 h-1 rounded-full bg-conference-primary"></span>
                            <span className="capitalize">{item.title}</span>
                          </span>
                        )}

                        <div className="pl-4 lg:pl-5 space-y-1.5">
                          {item.dropdown.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.url}
                              className="text-gray-500 hover:text-conference-primary text-xs sm:text-sm transition-colors block py-0.5 w-fit mx-auto lg:mx-0"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Location - Simplified */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-white mb-4 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-lg bg-conference-primary/10 flex items-center justify-center text-conference-primary">
                  <FaMapMarkerAlt className="text-sm" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold">Venue</h3>
              </div>

              <div className="w-full h-48 sm:h-56 lg:h-64 rounded-xl lg:rounded-2xl overflow-hidden border border-gray-800 shadow-xl relative group mb-4">
                <div className="absolute inset-0 bg-conference-primary/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15743.240295000398!2d76.3430202!3d9.4380491!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf49b9fc5a41d110a!2sCarmel%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1624884010736!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="filter grayscale-[100%] contrast-[1.1] opacity-70 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 transition-all duration-700"
                  style={{ border: 0 }}
                ></iframe>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center lg:text-left">
                  <span className="font-medium text-gray-300">
                    Carmel College of Engineering & Technology
                  </span>
                  <br />
                  Punnapra, Alappuzha - 688004, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom - Simplified */}
          <div className="mt-10 lg:mt-16 pt-5 lg:pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-500 relative z-10">
            <p className="text-center sm:text-left">
              © 2026 ICIPETC-26. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-5">
              <Link
                href="#"
                className="hover:text-conference-primary transition-colors"
              >
                Privacy
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="#"
                className="hover:text-conference-primary transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
