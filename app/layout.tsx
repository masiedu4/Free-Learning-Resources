import "./globals.css";
import type { Metadata } from "next";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Free Resources for Learning Tech",
  description:
    "Discover a wealth of free educational materials, tutorials, and resources tailored for the tech community.",
  keywords: [
    "Learn HTML",
    "Free Learning Resources",
    "CSS",
    "Learn JavaScript for free",
    "TypeScript",
    "Free React.js resources",
    "Introduction to AI",
    "Machine Learning",
    "QA",
    "Testing",
    "Databases",
    "SQL",
    "How to become a backend developer",
    "Frontend development resources",
    "UI/UX Design for free",
    "Technical Writer",
  ],
  authors: [
    {
      name: "Github",
      url: "https://github.com/masiedu4/Free-Learning-Resources",
    },
    { name: "Michael Asiedu", url: "https://twitter.com/MichaelAsiedu_" },
  ],
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </html>
  );
}
