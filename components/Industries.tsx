"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Building2,
  Stethoscope,
  Factory,
  TrendingUp,
  Code,
} from "lucide-react";

const industries = [
  { name: "Sales & Marketing", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
  { name: "Education", icon: GraduationCap, color: "from-purple-500 to-pink-500" },
  { name: "Retail", icon: ShoppingBag, color: "from-green-500 to-emerald-500" },
  { name: "Healthcare", icon: Stethoscope, color: "from-blue-500 to-cyan-500" },
  { name: "Finance", icon: Building2, color: "from-yellow-500 to-orange-500" },
  { name: "Manufacturing", icon: Factory, color: "from-indigo-500 to-purple-500" },
  { name: "Technology", icon: Code, color: "from-cyan-500 to-blue-500" },
  { name: "Professional Services", icon: Briefcase, color: "from-pink-500 to-rose-500" },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming workflows across diverse sectors with intelligent automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300 text-center">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} p-4 mb-4 mx-auto flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-white">{industry.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

