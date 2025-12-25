"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#techStack", text: "Tech Stack" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
   <header
  className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
    isScrolled
      ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg"
      : "bg-white/90 dark:bg-gray-900/80 backdrop-blur-md"
  } border-b border-gray-200 dark:border-gray-800`}
>
  <div className="max-w-7xl mx-auto ">
    <div className="flex h-20 items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
          <span className="text-white dark:text-gray-900 font-bold text-xl">I</span>
        </div>
        <span className="font-bold text-2xl text-gray-900 dark:text-gray-100">
          Imran Khan
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium relative group"
          >
            {link.text}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <Link
          href="/resume"
          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Resume
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {/* Mobile Dropdown */}
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="py-4 border-t border-gray-200 dark:border-gray-800 flex flex-col space-y-1">
        {navLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="px-3 py-2.5 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {link.text}
          </a>
        ))}
        <Link
          href="/resume"
          className="px-3 py-2.5 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Resume
        </Link>
      </div>
    </div>
  </div>
</header>

  );
};

export default Navbar;
