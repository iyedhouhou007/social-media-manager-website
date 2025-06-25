"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-bold text-pink-600 dark:text-pink-400"
        >
          Suzi Social
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <a href="#services" className="hover:text-pink-500 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-pink-500 transition">
            Portfolio
          </a>
          <a href="#about" className="hover:text-pink-500 transition">
            About
          </a>
          <a href="#contact" className="hover:text-pink-500 transition">
            Contact
          </a>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="text-xl text-yellow-500 dark:text-gray-300 ml-4"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile menu (optional) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-4 space-y-2">
          <a
            href="#services"
            className="block text-gray-800 dark:text-gray-200 hover:text-pink-500"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="block text-gray-800 dark:text-gray-200 hover:text-pink-500"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="block text-gray-800 dark:text-gray-200 hover:text-pink-500"
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-gray-800 dark:text-gray-200 hover:text-pink-500"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
