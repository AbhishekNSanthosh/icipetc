import AdvisoryBoard from "@widgets/AdvisoryBoard";
import React from "react";

export const metadata = {
  title: "Advisory Board | ICIPETC-26 Conference",
  description:
    "Meet our distinguished Advisory Board members for ICIPETC-26. Renowned experts and professors from top universities guiding the International Conference on Emerging Trends in Computing at CCET.",
  keywords: [
    "ICIPETC advisory board",
    "conference committee",
    "academic experts",
    "research guides",
    "international conference board",
  ],
};

export default function page() {
  return <AdvisoryBoard />;
}
