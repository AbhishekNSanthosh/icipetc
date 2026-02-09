import About from "@widgets/About";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";

export const metadata = {
  title: "About Us | NCIPETC-26",
  description:
    "Learn more about NCIPETC-26, the National Conference on Interdisciplinary Perspectives of Emerging Trends in Computing hosted by Carmel College of Engineering and Technology.",
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
