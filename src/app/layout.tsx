import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: pick weights you need
  variable: "--font-inter", // optional CSS variable
});

export const metadata: Metadata = {
  title: "Golden Shield",
  description:
    "Professional contracting and real estate services in Abu Dhabi. Build stronger and safer with confidence. Residential and commercial projects.",
  keywords: "contracting, real estate, leasing, Abu Dhabi, Dubai, renovation",
  authors: [{ name: "Rayn Group" }],
  openGraph: {
    title: "GoldenShield - Trusted Properties & Quality Contracting",
    description:
      "Professional contracting and real estate services. Residential and commercial projects delivered with excellence.",
    url: "https://goldenshield.com",
    siteName: "GoldenShield",
    images: [
      {
        url: "/logo2.svg",
        width: 800,
        height: 600,
        alt: "GoldenShield Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
