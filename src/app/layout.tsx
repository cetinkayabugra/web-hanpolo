import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hanpolo — Digital Solutions For Modern Businesses",
  description:
    "Hanpolo helps businesses improve their online presence, streamline operations, and leverage modern technology through websites, automation, and custom digital solutions.",
  keywords: ["web development", "automation", "digital solutions", "business"],
  openGraph: {
    title: "Hanpolo — Digital Solutions For Modern Businesses",
    description:
      "Hanpolo helps businesses improve their online presence, streamline operations, and leverage modern technology.",
    url: "https://hanpolo.com",
    siteName: "Hanpolo",
    type: "website",
  },
  metadataBase: new URL("https://hanpolo.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
