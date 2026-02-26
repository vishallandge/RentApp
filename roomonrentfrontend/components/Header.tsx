// components/Header.js
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <span className="text-white text-xl">🏠</span>
          </div>
          <span className="text-2xl font-extrabold text-indigo-900 tracking-tight">
            ROOM<span className="text-indigo-500">.RENT</span>
          </span>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-indigo-600 transition">
            List Property
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Find Roommates
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Shortlists
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/signup">
            <button className="hidden sm:block text-slate-600 font-semibold hover:text-indigo-600 px-4 py-2">
              Sign In
            </button>
          </Link>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-bold transition shadow-md shadow-indigo-100">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
