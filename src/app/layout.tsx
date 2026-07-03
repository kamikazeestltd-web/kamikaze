import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAMIKAZE — Rebel With Discipline",
  description:
    "Japanese-inspired luxury streetwear from Malaysia. KAMIKAZE is for the disciplined rebel. Shop premium streetwear, drops, and limited editions.",
  keywords: [
    "streetwear Malaysia",
    "luxury streetwear",
    "Japanese streetwear",
    "Malaysian fashion brand",
    "premium clothing",
    "KAMIKAZE",
    "streetwear drops",
  ],
  openGraph: {
    title: "KAMIKAZE — Rebel With Discipline",
    description:
      "Japanese-inspired luxury streetwear from Malaysia. Discipline is the rebellion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
