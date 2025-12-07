"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 px-4 overflow-hidden border-t border-white/10">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-950/20 to-transparent">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => {
            const randomX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920;
            return (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
                initial={{
                  x: randomX,
                  y: Math.random() * 200,
                  opacity: 0,
                }}
                animate={{
                  y: [null, (Math.random() - 0.5) * 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.a
              href="/"
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/hp_logo.png"
                alt="hybridpillars logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                hybridpillars
              </span>
            </motion.a>
            <p className="text-blue-200 text-sm">
              Building the future of autonomous AI agents for businesses.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="/agents" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} hybridpillars. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

