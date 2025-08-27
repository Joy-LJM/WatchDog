import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import TimeLockLogo from "../components/TimeLockLogo";
import "./globals.css";
import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimeLock",
  description: "Manage your time with TimeLock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex gap-20 justify-center items-center border-b border-blue-100">
          <a href={`/`}>
            <TimeLockLogo />
          </a>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          @copyright Jiamin Luo 2025
        </footer>
      </body>
    </html>
  );
}
