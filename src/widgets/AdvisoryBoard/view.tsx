import React from "react";
import AdvisoryBoardContent from "./components/AdvisoryBoardContent";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

export default function AdvisoryBoard() {
  return (
    <main>
      <Header />
      <AdvisoryBoardContent />
      <Footer />
    </main>
  );
}
