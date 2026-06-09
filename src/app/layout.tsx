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
  title: "KAMIKAZE — Built To Leave A Mark.",
  description:
    "KAMIKAZE is premium streetwear from Malaysia. Built for those who attack life without hesitation. Shop the collection.",
  keywords: [
    "streetwear Malaysia",
    "premium streetwear",
    "luxury streetwear",
    "Malaysian clothing brand",
    "oversized t-shirts Malaysia",
    "KAMIKAZE clothing",
  ],
  openGraph: {
    title: "KAMIKAZE — Built To Leave A Mark.",
    description:
      "Premium streetwear from Malaysia. For those who refuse to live unnoticed.",
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
