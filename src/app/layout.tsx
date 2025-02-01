import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/Provider/query-provider";
import { Toaster } from "sonner";

const worksans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quizer - Practice JAMB, WAEC & General Quizzes for Free",
  description:
    "Quizer is the ultimate online platform for students to practice JAMB, WAEC, and general quiz questions. Improve your knowledge, test your skills, and prepare for exams with our free interactive quizzes and study resources.",
  keywords: [
    "JAMB past questions",
    "WAEC practice",
    "free quizzes",
    "online exam prep",
    "WAEC questions and answers",
    "JAMB CBT practice",
    "general knowledge quiz",
    "educational platform",
    "student learning",
    "exam preparation",
  ],
  openGraph: {
    title: "Quizer - Practice JAMB, WAEC & General Quizzes for Free",
    description:
      "Improve your exam performance with Quizer! Access JAMB, WAEC, and general quizzes for free. Learn, practice, and succeed.",
    url: "https://www.quizer.com",
    siteName: "Quizer",
    images: [
      {
        url: "https://www.quizer.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Quizer - Online Quiz Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quizer - Practice JAMB, WAEC & General Quizzes for Free",
    description:
      "Practice JAMB, WAEC, and general quizzes online for free. Get better grades with Quizer!",
    images: ["https://www.quizer.com/images/twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${worksans.variable} antialiased`}>
        <Toaster expand visibleToasts={9} richColors position="top-right" />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
