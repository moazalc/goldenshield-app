import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: pick weights you need
  variable: "--font-inter", // optional CSS variable
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: pick weights you need
  variable: "--font-inter", // optional CSS variable
});

export const metadata: Metadata = {
  title: "Golden Shield",
  description: "A Contracting & Real Estate Management Company",
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
