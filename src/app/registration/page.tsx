import Registration from "@widgets/Registration";
import React from "react";

export const metadata = {
  title: "Registration | ICIPETC-26 Conference Fees",
  description:
    "Register now for ICIPETC-26! Registration fees: UG/PG Students ₹1500, Research Scholars ₹2000, Professionals ₹2500, Attendees ₹500. Join us on March 19, 2026 at CCET Alappuzha.",
  keywords: [
    "ICIPETC registration",
    "conference fees",
    "attend academic conference",
    "register for research conference",
  ],
};

export default function page() {
  return <Registration />;
}
