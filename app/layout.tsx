"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200">

        {/* HEADER (hidden in dashboard) */}
        {!isDashboard && (
          <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 text-white shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

              {/* Logo */}
              <div className="text-2xl font-bold tracking-wide">
                LogicLeap
              </div>

              {/* Simple Navigation */}
              <nav className="flex items-center gap-6 text-sm font-medium">
                <a href="/" className="hover:text-purple-300 transition">
                  Home
                </a>

                <a href="/#roadmap" className="hover:text-purple-300 transition">
                  Curriculum
                </a>

                <a
                  href="/register"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Register
                </a>

                <a
                  href="/login"
                  className="border border-purple-300 px-4 py-2 rounded-lg hover:bg-purple-800 transition"
                >
                  Login
                </a>
              </nav>
            </div>
          </header>
        )}

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER (hidden in dashboard) */}
        {!isDashboard && (
          <footer className="mt-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} LogicLeap Coding Academy
            </div>
          </footer>
        )}

      </body>
    </html>
  );
}