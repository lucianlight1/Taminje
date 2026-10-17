"use client";

import Sidebar from './sidebar';
import Link from "next/link";

function Header() {
    return (
        <div className="bg-white text-black md:py-3 py-2 fixed top-0 left-0 w-full z-50 shadow-sm"> 
            <section className="flex items-center justify-between gap-2 md:w-[90%] w-[98%] mx-auto px-4">
                
                {/* 1. Left Side: Brand Logo */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="border-2 border-[#33A259] rounded-full p-2 flex items-center justify-center"
                    >
                        <img src="/logo.png" alt="Taminje Logo" className="w-8 h-8 object-cover" />
                    </Link>
                </div>

                {/* ========================================================= */}
                {/* 🔍 HIGHLIGHTED CHANGE: COMPANY NAME IN THE NAVIGATION BAR */}
                {/* ========================================================= */}
                <div className="flex flex-1 items-center justify-center text-center px-2">
                    <Link 
                        href="/" 
                        className="text-[#33A259] font-extrabold text-base md:text-xl tracking-wider hover:opacity-90 transition"
                    >
                        TAMINJE INTERNATIONAL LIMITED
                    </Link>
                </div>
                {/* ========================================================= */}

                {/* 3. Right Side: Open Menu Button (Sidebar Component) */}
                <div className="flex items-center justify-end">
                    <Sidebar />
                </div>

            </section>
        </div>
    );
}

export default Header;