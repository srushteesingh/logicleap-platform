import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200">
        {/* HEADER */}
        <header className="relative sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 text-white shadow-lg overflow-hidden">
          <div className="absolute -top-16 left-1/4 w-72 h-72 bg-purple-500 opacity-25 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-16 right-1/4 w-72 h-72 bg-indigo-500 opacity-25 blur-3xl rounded-full"></div>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="text-xl font-bold tracking-wide">LogicLeap</div>

            {/* Navigation */}
            <nav className="flex gap-8 text-sm font-medium">
              <a
                href="#learning-paths"
                className="hover:text-purple-300 transition"
              >
                Programs
              </a>

              <a href="#roadmap" className="hover:text-purple-300 transition">
                Curriculum
              </a>

              <a
                href="/summer-camp"
                className="hover:text-purple-300 transition"
              >
                Summer Camp
              </a>

              <a href="#" className="hover:text-purple-300 transition">
                Student Login
              </a>
            </nav>

            {/* CTA */}
            <a
              href="/summer-camp"
              className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-sm font-semibold transition"
            >
              Book Trial
            </a>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        <footer className="mt-20 bg-gray-900 text-white">
          <div className="relative bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-950 text-white mt-24">
            <div className="absolute top-10 left-1/3 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300 opacity-20 blur-3xl rounded-full"></div>
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  LogicLeap
                </h3>

                <p className="text-indigo-200 text-sm leading-relaxed">
                  A competency-based coding academy helping kids build real
                  technology skills through creativity, logic, and project-based
                  learning.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>

                <ul className="space-y-2 text-indigo-200 text-sm">
                  <li>
                    <a href="#roadmap" className="hover:text-purple-600">
                      Curriculum
                    </a>
                  </li>
                  <li>
                    <a href="/summer-camp" className="hover:text-purple-600">
                      Summer Camp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600">
                      Student Login
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-purple-600">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h4 className="font-semibold mb-4">Programs</h4>

                <ul className="space-y-2 text-indigo-200 text-sm">
                  <li>🚀 Weekly Bootcamps</li>
                  <li>📅 Monthly Programs</li>
                  <li>🎯 12-Week Skill Tracks</li>
                  <li>🏆 Year-Long Mastery Program</li>
                </ul>
              </div>

              {/* CTA */}
              <div>
                <h4 className="font-semibold mb-4">Start Learning</h4>

                <p className="text-indigo-200 text-sm mb-4">
                  Book a free assessment to find the perfect starting point for
                  your child.
                </p>

                <a
                  href="/summer-camp"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg text-sm font-semibold transition"
                >
                  Book Free Trial
                </a>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-purple-100 text-center py-6 text-sm text-indigo-300">
              © {new Date().getFullYear()} LogicLeap Coding Academy
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
