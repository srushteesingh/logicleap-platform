import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LogicLeap Coding Academy",
    template: "%s | LogicLeap Coding Academy",
  },
  description:
    "LogicLeap Coding Academy offers structured coding programs for kids aged 6–16.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}