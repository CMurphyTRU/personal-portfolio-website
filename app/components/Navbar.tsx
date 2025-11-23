"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-4 px-6 flex justify-between items-center border-b overflow-hidden">
            <div className="font-bold text-xl">
                <Link href="/">Christian Murphy</Link>
            </div>

            <div className="flex gap-6 text-sm">
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                
            </div>
        </nav>
    );
}