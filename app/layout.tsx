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
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-purple-700">
              LogicLeap
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
              <Link href="/" className="hover:text-purple-600 transition">
                Home
              </Link>

              <Link
                href="/summer-camp"
                className="hover:text-purple-600 transition"
              >
                Summer Camp
              </Link>

              <Link
                href="/programs"
                className="hover:text-purple-600 transition"
              >
                Programs
              </Link>

              <Link href="/about" className="hover:text-purple-600 transition">
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-purple-600 transition"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-6">
              <Link
                href="/student-login"
                className="text-gray-700 font-medium hover:text-purple-600 transition"
              >
                Student Login
              </Link>

              <Link
                href="/summer-camp"
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                Register
              </Link>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        <footer className="mt-20 bg-gray-900 text-white">
          <div className="bg-gradient-to-b from-indigo-50 to-white border-t border-purple-100 mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  LogicLeap
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  A competency-based coding academy helping kids build real
                  technology skills through creativity, logic, and project-based
                  learning.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>

                <ul className="space-y-2 text-gray-600 text-sm">
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

                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>🚀 Weekly Bootcamps</li>
                  <li>📅 Monthly Programs</li>
                  <li>🎯 12-Week Skill Tracks</li>
                  <li>🏆 Year-Long Mastery Program</li>
                </ul>
              </div>

              {/* CTA */}
              <div>
                <h4 className="font-semibold mb-4">Start Learning</h4>

                <p className="text-gray-600 text-sm mb-4">
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
            <div className="border-t border-purple-100 text-center py-6 text-sm text-gray-500">
              © {new Date().getFullYear()} LogicLeap Coding Academy
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
