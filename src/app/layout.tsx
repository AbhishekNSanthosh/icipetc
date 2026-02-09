import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icipetc-26.vercel.app"), // Replace with actual domain if known
  title: {
    default: "ICIPETC-26 | International Conference",
    template: "%s | ICIPETC-26",
  },
  description:
    "International Conference on Interdisciplinary Perspectives of Emerging Trends in Computing (ICIPETC-26). Hosted by Carmel College of Engineering & Technology, Alappuzha.",
  keywords: [
    "ICIPETC-26",
    "Conference",
    "Computing",
    "Engineering",
    "Carmel College",
    "CCET",
    "Research",
    "Interdisciplinary",
    "Technology",
    "Alappuzha",
    "Kerala",
    "International",
  ],
  authors: [{ name: "CCET Dept of CSE" }],
  creator: "Carmel College of Engineering & Technology",
  publisher: "Carmel College of Engineering & Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ICIPETC-26 | International Conference on Computing",
    description:
      "Join us for ICIPETC-26, bridging horizons in computing. March 06-07, 2026 at Carmel College of Engineering & Technology.",
    url: "https://icipetc-26.carmelcet.in",
    siteName: "ICIPETC-26",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png", // Ensure this exists or use a generic one
        width: 1200,
        height: 630,
        alt: "ICIPETC-26 Conference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICIPETC-26 | International Conference",
    description:
      "International Conference on Interdisciplinary Perspectives of Emerging Trends in Computing 2026.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1, // Optional: prevent creating issues with some accessible tools, but often requested for mobile apps feel
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-poppins antialiased text-gray-800 bg-white">
        {children}
      </body>
    </html>
  );
}
