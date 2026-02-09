import React from "react";
import type { Metadata, Viewport } from "next";
import "@styles/scss/main.scss";
import { Poppins } from "next/font/google";
import Chatbot from "@components/Chatbot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://icipetc-26.carmelcet.in"),
  title: {
    default:
      "ICIPETC-26 2026 | International Conference on Computing & Technology | March 13, 2026",
    template: "%s | ICIPETC-26 International Conference",
  },
  description:
    "ICIPETC-26: International Conference on Interdisciplinary Perspectives of Emerging Trends in Computing, March 13, 2026 at Carmel College of Engineering & Technology, Alappuzha, Kerala. Submit research papers on AI, Machine Learning, IoT, Cybersecurity, Cloud Computing, Data Science, Blockchain & more. IEEE format, peer-reviewed, academic conference for researchers, scholars, and industry professionals.",
  keywords: [
    // Conference Name & Variations
    "ICIPETC-26",
    "ICIPETC 2026",
    "ICIPETC conference",
    "International Conference on Computing",
    "Interdisciplinary Computing Conference",
    "Emerging Trends in Computing",

    // Computing & Technology Topics
    "Artificial Intelligence conference",
    "Machine Learning conference",
    "Deep Learning",
    "Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
    "NLP conference",
    "Data Science conference",
    "Big Data Analytics",
    "Cloud Computing",
    "Edge Computing",
    "Quantum Computing",
    "Internet of Things",
    "IoT conference",
    "Blockchain technology",
    "Cryptocurrency",
    "Distributed Systems",
    "Cybersecurity conference",
    "Information Security",
    "Network Security",
    "Ethical Hacking",

    // Software & Development
    "Software Engineering",
    "Web Development",
    "Mobile App Development",
    "DevOps",
    "Microservices",
    "API Development",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",

    // Emerging Technologies
    "5G Technology",
    "Augmented Reality",
    "Virtual Reality",
    "AR VR conference",
    "Metaverse",
    "Smart Cities",
    "Autonomous Vehicles",
    "Robotics",
    "Automation",
    "Industry 4.0",

    // Research & Academic
    "Research paper submission",
    "Call for papers",
    "Academic conference",
    "Research conference 2026",
    "Peer review conference",
    "IEEE format conference",
    "Computer Science research",
    "Engineering conference",
    "Technology symposium",
    "International symposium",
    "Research publication",
    "Scopus indexed",
    "Conference proceedings",

    // Target Audience
    "PhD scholars",
    "Research scholars",
    "Computer Science students",
    "Engineering students",
    "Faculty members",
    "Industry professionals",
    "Academicians",
    "Technology researchers",
    "Scientists",
    "Innovators",

    // Location-Based
    "Carmel College of Engineering",
    "CCET Alappuzha",
    "Alappuzha conference",
    "Kerala conference",
    "South India conference",
    "India technology conference",
    "Punnapra",
    "Conference in Kerala",
    "Engineering college Kerala",

    // Date & Time
    "March 2026 conference",
    "2026 computing conference",
    "Spring 2026 conference",
    "Conference March 13",

    // Conference Features
    "Paper presentation",
    "Oral presentation",
    "Poster presentation",
    "Workshop",
    "Keynote speakers",
    "Technical sessions",
    "Panel discussion",
    "Networking event",
    "Certificate of participation",

    // Related Fields
    "Information Technology",
    "Computer Applications",
    "Electronics and Communication",
    "Electrical Engineering",
    "Computational Intelligence",
    "Pattern Recognition",
    "Image Processing",
    "Signal Processing",
    "Embedded Systems",
    "VLSI Design",

    // Additional Tech Keywords
    "Green Computing",
    "Sustainable Technology",
    "Smart Grid",
    "Renewable Energy Computing",
    "Healthcare IT",
    "Medical Informatics",
    "Bioinformatics",
    "Computational Biology",
    "E-Learning",
    "Educational Technology",
    "Digital Transformation",
    "Innovation",
    "Startup ecosystem",
  ],
  authors: [
    { name: "CCET Department of Computer Science and Engineering" },
    { name: "Carmel College of Engineering & Technology" },
  ],
  creator: "Carmel College of Engineering & Technology, Alappuzha",
  publisher: "ICIPETC-26 Organizing Committee",
  category: "Technology Conference",
  classification: "Academic Conference, Research Symposium, Technology Event",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "ICIPETC-26 2026 | International Conference on Computing & Emerging Technologies",
    description:
      "Join ICIPETC-26 on March 13, 2026 at Carmel College, Alappuzha, Kerala. Submit research papers on AI, ML, IoT, Cybersecurity, Cloud Computing & more. IEEE format, peer-reviewed international conference for researchers and industry professionals.",
    url: "https://icipetc-26.carmelcet.in",
    siteName: "ICIPETC-26 International Conference",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ICIPETC-26 International Conference on Computing - March 13, 2026",
        type: "image/png",
      },
    ],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICIPETC-26 | International Computing Conference 2026",
    description:
      "International Conference on Interdisciplinary Perspectives of Emerging Trends in Computing. March 13, 2026 | Carmel College, Alappuzha, Kerala | Submit Research Papers on AI, ML, IoT, Cybersecurity & more.",
    images: ["/images/og-image.png"],
    creator: "@CCET_Official",
    site: "@ICIPETC26",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://icipetc-26.carmelcet.in",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Alappuzha, Kerala",
    "geo.position": "9.4380491;76.3430202",
    ICBM: "9.4380491, 76.3430202",
    "event-date": "2026-03-13",
    "event-location":
      "Carmel College of Engineering & Technology, Punnapra, Alappuzha - 688004, Kerala, India",
    "conference-type": "International Academic Conference",
    "submission-deadline": "2026-02-15",
    "acceptance-notification": "2026-02-23",
    "camera-ready-deadline": "2026-02-28",
  },
  applicationName: "ICIPETC-26 Conference",
  appleWebApp: {
    capable: true,
    title: "ICIPETC-26",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05b570",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="msapplication-TileColor" content="#05b570" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Structured Data - JSON-LD for Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "ICIPETC-26 - International Conference on Interdisciplinary Perspectives of Emerging Trends in Computing",
              description:
                "International academic conference on computing, AI, machine learning, IoT, cybersecurity, and emerging technologies",
              startDate: "2026-03-13T09:00:00+05:30",
              endDate: "2026-03-13T17:00:00+05:30",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Carmel College of Engineering & Technology",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Punnapra",
                  addressLocality: "Alappuzha",
                  addressRegion: "Kerala",
                  postalCode: "688004",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "9.4380491",
                  longitude: "76.3430202",
                },
              },
              image: "https://icipetc-26.carmelcet.in/images/og-image.png",
              organizer: {
                "@type": "Organization",
                name: "Carmel College of Engineering & Technology",
                url: "https://carmelcet.in",
                email: "conferencecse@carmelcet.in",
                telephone: "+91-8129549100",
              },
              offers: {
                "@type": "Offer",
                url: "https://icipetc-26.carmelcet.in/registration",
                price: "1500",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                validFrom: "2026-01-01",
              },
              performer: {
                "@type": "Organization",
                name: "CCET Department of Computer Science and Engineering",
              },
            }),
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Carmel College of Engineering & Technology",
              alternateName: "CCET",
              url: "https://icipetc-26.carmelcet.in",
              logo: "https://icipetc-26.carmelcet.in/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8129549100",
                contactType: "Conference Coordinator",
                email: "conferencecse@carmelcet.in",
                areaServed: "IN",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.facebook.com/carmelcet",
                "https://twitter.com/CCET_Official",
                "https://www.linkedin.com/school/carmel-college-of-engineering-technology",
              ],
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://icipetc-26.carmelcet.in",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Call for Papers",
                  item: "https://icipetc-26.carmelcet.in/call-for-papers",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Registration",
                  item: "https://icipetc-26.carmelcet.in/registration",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-poppins antialiased text-gray-800 bg-white">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
