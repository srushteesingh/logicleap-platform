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
      <body className="relative min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 text-gray-900 antialiased overflow-x-hidden">
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
          <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">LogicLeap</h3>
              <p className="text-gray-400">
                Building future innovators through structured coding education.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Summer Bootcamp</li>
                <li>Year Long Program</li>
                <li>AI & Python Track</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-gray-400">Pune, India</p>
              <p className="text-gray-400">hello@logicleapcoding.com</p>
            </div>
          </div>

          <div className="text-center text-gray-500 py-4 border-t border-gray-800">
            © 2026 LogicLeap Coding Academy
          </div>
        </footer>
      </body>
    </html>
  );
}
