import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marungga Foundation",
  description: "Yayasan Masyarakat Tangguh Sejahtera - Membangun Masyarakat Indonesia Timur yang Tangguh dan Sejahtera",
};

import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, jakarta.variable, "font-sans", geist.variable)}>
      <body suppressHydrationWarning style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NextTopLoader color="#0f4761" showSpinner={false} />
        <Navbar />
        <main style={{ flex: 1, position: 'relative' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
