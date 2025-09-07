import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Loading } from "@/animate-ui";

import Providers from "./providers";

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
  title: "Infinite One",
  description:
    "Infinite One - A comprehensive platform offering multiple tools and solutions for modern productivity and business management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
