"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, px } from "framer-motion";

const navLinks = [
  { label: "Enter", href: "/" },
  { label: "The Artifacts", href: "/artifact" },
  { label: "The Mythos", href: "/mythos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${scrolled
          ? "bg-void/90 backdrop-blur-md border-b border-ash/30"
          : "bg-transparent"
          }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/logo.png"
              alt="GHUBOR"
              width={220}
              height={70}
              className="h-12 md:h-[68px] w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-500"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-ui text-[11px] text-stone hover:text-cream transition-colors duration-500 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-oxblood group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-cream origin-center"
              transition={{ duration: 0.4 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-4 h-px bg-cream"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={
                menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
              }
              className="block w-6 h-px bg-cream origin-center"
              transition={{ duration: 0.4 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-void flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-blackletter text-4xl text-cream hover:text-oxblood transition-colors duration-500"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
