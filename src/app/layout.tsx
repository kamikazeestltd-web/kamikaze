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
  title: "KHONS — Rise. Rule. Return.",
  description:
    "KHONS is streetwear from the land of the two Niles. Named after Khonsu, the moon god who dies and returns every cycle. For those who refuse to stay buried.",
  keywords: [
    "KHONS streetwear",
    "Egyptian streetwear",
    "Nubian fashion",
    "moon god",
    "luxury streetwear",
    "premium clothing",
    "African streetwear",
  ],
  openGraph: {
    title: "KHONS — Rise. Rule. Return.",
    description:
      "Streetwear from the land of the two Niles. The moon always returns.",
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
