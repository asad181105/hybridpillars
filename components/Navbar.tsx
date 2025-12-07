"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavbarVariant = "floating" | "static";

const navItems = [
  { name: "Agents", href: "/agents" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" },
  { name: "Get in touch", href: "/get-in-touch" },
];

export function Navbar({ variant = "static" }: { variant?: NavbarVariant }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const wrapperClasses =
    variant === "floating"
      ? "absolute top-6 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4"
      : "relative z-40 w-full px-4 pt-6 sm:px-6 lg:px-8";

  const navClasses =
    "flex items-center justify-between gap-6 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-white backdrop-blur-2xl shadow-lg shadow-black/20";

  return (
    <div className={wrapperClasses}>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={navClasses}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <Image
              src="/hp_logo.png"
              alt="hybridpillars logo"
              width={86}
              height={86}
              className="object-contain"
            />
          </div>
          {/* <span className="text-lg font-semibold tracking-tight">
            hybridpillars
          </span> */}
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-white/80",
                  isActive ? "text-white" : "text-white/70"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-blue-400 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
          >
            Try for free
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            Book a demo
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-full border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl text-white md:hidden"
          >
            <div className="flex flex-col divide-y divide-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-4 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between gap-2 px-6 py-4">
                <Link
                  href="/contact"
                  className="flex-1 rounded-full border border-blue-400 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Try for free
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

