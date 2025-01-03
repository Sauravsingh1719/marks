import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Negative Marks Calculator - Calculate Your Exam Scores Easily",
  description: "Calculate your exam marks, including negative marking, empty questions, and more. Get instant results and analyze your performance.",
  keywords: [
    "exam calculator",
    "negative marking calculator",
    "online exam calculator",
    "test score calculator",
    "marks calculator",
    "grade calculator",
    "empty question penalty",
  ],
  openGraph: {
    title: "Negative Marks Calculator - Calculate Your Exam Scores Easily",
    description: "Calculate your exam marks, including negative marking, empty questions, and more. Get instant results and analyze your performance.",
    url: "https://markscal.vercel.app/", // Replace with your actual domain
    siteName: "Negative Marks Calculator", // Updated with your site name
  },
  twitter: {
    card: "summary_large_image",
    title: "Negative Marks Calculator - Calculate Your Exam Scores Easily",
    description: "Calculate your exam marks, including negative marking, empty questions, and more. Get instant results and analyze your performance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Calculate your exam marks, including negative marking, empty questions, and more. Get instant results and analyze your performance." />
        <meta name="keywords" content="exam calculator, negative marking calculator, online exam calculator, test score calculator, marks calculator, grade calculator, empty question penalty" />
        <meta property="og:title" content="Negative Marks Calculator - Calculate Your Exam Scores Easily" />
        <meta property="og:description" content="Calculate your exam marks, including negative marking, empty questions, and more. Get instant results and analyze your performance." />
        <meta property="og:url" content="https://markscal.vercel.app/" />  {/* Replace with your actual domain */}
        <meta property="og:site_name" content="Negative Marks Calculator" />  {/* Updated with your site name */}
        <meta property="twitter:title" content="Negative Marks Calculator - Calculate Your Exam Scores Easily" />
        <meta property="twitter:description" content="Calculate your exam marks, including negative marking, empty questions, and more. Get instant results and analyze your performance." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
