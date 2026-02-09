"use client";
import { navItem } from "@utils/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import {
  MdInsertLink,
  MdChevronRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGrid3X3Gap } from "react-icons/bs";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent scrolling when the drawer is open & Handle scroll for navbar styling
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen]);

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null); // Separate state for mobile

  const toggleMobileDropdown = (index: number) => {
    setMobileDropdown(mobileDropdown === index ? null : index);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm h-[8vh]" : "bg-transparent h-[10vh] lg:h-[13vh] md:h-[12vh]"}`}
      >
        <div className="px-[5vw] h-full flex items-center justify-between w-full max-w-[1920px] mx-auto">
          {/* Logo */}
          <div className="flex-[1] flex">
            <Link
              href={"/"}
              className="font-bold text-2xl flex items-center gap-2 group"
            >
              <span
                className={`text-conference-primary transition-colors ${isScrolled ? "" : ""}`}
              >
                ICIPETC
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="flex-2 hidden lg:flex md:flex items-center justify-end gap-8">
            {navItem?.map((item, index) => (
              <div
                key={index}
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item?.link || "#"}
                  className={`font-medium capitalize flex flex-row items-center justify-center relative transition-colors duration-300 ${activeDropdown === index ? "text-conference-accent" : "text-gray-700 hover:text-conference-accent"}`}
                >
                  {item?.title}
                  {item?.dropdown && (
                    <RiArrowDropDownLine
                      className={`text-2xl transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {item?.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-60">
                    {/* Triangle pointer */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-transparent border-b-white drop-shadow-sm"></div>

                    <div className="bg-white shadow-xl rounded-xl p-2 border border-gray-100 overflow-hidden ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item?.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem?.url}
                          className="block px-4 py-3 rounded-lg hover:bg-conference-primary/5 hover:text-conference-primary text-gray-600 text-sm font-medium transition-all duration-200 flex items-center justify-between group/link"
                        >
                          {subItem?.title}
                          <MdChevronRight className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-conference-accent" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex-1 hidden md:flex lg:flex items-center justify-end pl-8">
            <Link href={"https://forms.gle/VWgA4t2jr1esEkLcA"} target="_blank">
              <button className="px-5 py-2.5 rounded-full bg-conference-primary text-white font-semibold text-sm hover:bg-conference-secondary shadow-lg shadow-conference-primary/20 hover:shadow-conference-primary/40 transition-all transform hover:-translate-y-0.5">
                Submit Paper
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex-1 flex md:flex lg:hidden items-center justify-end">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <BsGrid3X3Gap className="text-2xl text-conference-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Content */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-[85%] sm:w-[60%] bg-white shadow-2xl p-6 flex flex-col transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
          <span className="text-xl font-bold text-conference-primary">
            ICIPETC-26
          </span>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto pr-2 space-y-2">
          {navItem?.map((item, index) => (
            <div key={index} className="flex flex-col">
              {!item?.dropdown ? (
                <Link
                  href={item?.link}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <MdInsertLink className="text-gray-400 text-xl" />
                  {item?.title}
                </Link>
              ) : (
                <div className="flex flex-col rounded-xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className={`flex items-center justify-between w-full p-3 font-medium transition-colors ${mobileDropdown === index ? "bg-conference-primary/5 text-conference-primary" : "hover:bg-gray-50 text-gray-700"}`}
                  >
                    <div className="flex items-center gap-3">
                      <MdInsertLink
                        className={`text-xl ${mobileDropdown === index ? "text-conference-accent" : "text-gray-400"}`}
                      />
                      <span className="capitalize">{item?.title}</span>
                    </div>
                    <MdKeyboardArrowDown
                      className={`text-2xl transition-transform duration-300 ${mobileDropdown === index ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mobile Dropdown Content */}
                  <div
                    className={`flex flex-col bg-gray-50 space-y-1 overflow-hidden transition-all duration-300 ${mobileDropdown === index ? "max-h-96 py-2" : "max-h-0"}`}
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.url}
                        className="pl-12 pr-4 py-2.5 text-sm text-gray-600 hover:text-conference-primary flex items-center justify-between"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <Link
            href={"https://forms.gle/VWgA4t2jr1esEkLcA"}
            target="_blank"
            onClick={() => setIsDrawerOpen(false)}
          >
            <button className="w-full py-3.5 rounded-xl bg-conference-primary text-white font-semibold hover:bg-conference-secondary active:scale-[0.98] transition-all shadow-lg shadow-conference-primary/20">
              Submit Your Paper Now
            </button>
          </Link>

          <div className="mt-6 flex flex-col items-center gap-1 text-xs font-medium text-gray-400">
            <span>2026 © ICIPETC-26</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}
