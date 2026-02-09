import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";
import SubmissionGuidelinesContent from "./components/SubmissionGuidelines";

export default function SubmissionGuidelines() {
  return (
    <main>
      <Header />
      <SubmissionGuidelinesContent />
      <Footer />
    </main>
  );
}
