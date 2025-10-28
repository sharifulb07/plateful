import type { Metadata } from "next";
import { Merienda, Unbounded } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});
const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plateful",
  description: "Plateful is grocery store ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${unbounded.variable} ${merienda.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
