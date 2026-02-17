import About from "@widgets/About";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";

export const metadata = {
  title: "About Us | ICIPETC-26 Conference | Carmel College of Engineering",
  description:
    "Learn about ICIPETC-26, the premier International Conference on Interdisciplinary Perspectives of Emerging Trends in Computing hosted by Carmel College (CCET), Alappuzha. Discover our vision, mission, and the Department of Computer Science & Engineering.",
  keywords: [
    "About ICIPETC-26",
    "CCET details",
    "conference vision",
    "CSE department Carmel College",
    "engineering conference Kerala",
  ],
};

export default function page() {
  return (
    <main>
      <Header />
      <About />
      <Footer />
    </main>
  );
}
