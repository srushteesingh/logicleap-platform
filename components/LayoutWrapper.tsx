"use client";

import { usePathname } from "next/navigation";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isDashboard = pathname.startsWith("/dashboard");

    return (
        <>
            {/* HEADER */}
            {!isDashboard && (
                <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-950 text-white shadow-lg">
                    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                        <div className="text-2xl font-bold tracking-wide">
                            LogicLeap
                        </div>

                        <nav className="flex items-center gap-6 text-sm font-medium">
                            <a href="/">Home</a>
                            <a href="/#roadmap">Curriculum</a>

                            <a
                                href="/register"
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-lg"
                            >
                                Register
                            </a>

                            <a
                                href="/login"
                                className="border border-purple-300 px-4 py-2 rounded-lg"
                            >
                                Login
                            </a>
                        </nav>
                    </div>
                </header>
            )}

            {/* PAGE */}
            <main>{children}</main>

            {/* FOOTER */}
            {!isDashboard && (
                <footer className="mt-20 bg-gray-900 text-white text-center py-6 text-sm">
                    © {new Date().getFullYear()} LogicLeap Coding Academy
                </footer>
            )}
        </>
    );
}