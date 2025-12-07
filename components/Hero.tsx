"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import Link from "next/link";

const MotionLink = motion(Link);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navbar variant="floating" />
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-black">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(30, 64, 175, 0.25) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920;
          const randomY = typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: randomX,
                y: randomY,
                opacity: 0,
              }}
              animate={{
                y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080],
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

      <div className="relative w-full pt-40 md:pt-44">
        <ContainerScroll
          titleComponent={
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center"
              >
                <motion.div
                  className="mb-6"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <Sparkles className="w-16 h-16 text-blue-500" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 bg-clip-text text-transparent">
                    Reimagine Work with
                  </span>
                  <br />
                  <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Autonomous AI Agents
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 text-center max-w-3xl mb-10">
                  hybridpillars builds domain-specific AI agents that transform how teams sell, support, and scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MotionLink
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Solutions
                    <ArrowRight className="w-5 h-5" />
                  </MotionLink>
                  <MotionLink
                    href="/contact"
                    className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold text-lg backdrop-blur-sm bg-black/40 hover:bg-blue-600/80 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Instant Support
                  </MotionLink>
                </div>
              </motion.div>
            </>
          }
        >
          <Image
            src="/image.png"
            alt="AI Technology"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

