import ImportantDates from "@widgets/ImportantDates";
import React from "react";

export const metadata = {
  title: "Important Dates | ICIPETC-26 Schedule",
  description:
    "Mark your calendar! Important dates for ICIPETC-26: Paper Submission Deadline: 25 Feb 2026, Acceptance Notification: 28 Feb 2026, Conference Date: 19 March 2026. Don't miss out!",
  keywords: [
    "ICIPETC dates",
    "conference schedule",
    "paper submission deadline",
    "research conference timeline 2026",
  ],
};

export default function page() {
  return <ImportantDates />;
}
