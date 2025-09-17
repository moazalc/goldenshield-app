"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["about", "services", "projects", "contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-800/50 backdrop-blur-sm" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={120} height={120} />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((section) => (
            <li key={section}>
              <button
                onClick={() => {
                  const element = document.getElementById(section);
                  if (element) {
                    const headerOffset = 120; // height of sticky navbar
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="relative text-white hover:text-yellow-500 transition 
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all 
                 after:duration-300 hover:after:w-full"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800/90 backdrop-blur-sm w-full px-6 overflow-hidden flex flex-col space-y-4 text-white"
          >
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById(section);
                    if (element) {
                      const headerOffset = 120;
                      const elementPosition =
                        element.getBoundingClientRect().top + window.scrollY;
                      const offsetPosition = elementPosition - headerOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }
                  }, 100); 
                }}
                className="hover:text-yellow-500 text-lg font-medium py-2 text-left"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
