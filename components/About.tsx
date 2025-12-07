"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Vision",
    description: "Democratizing AI automation for every business, making advanced AI agents accessible to teams of all sizes.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge AI technology that adapts to your business needs and scales with your growth.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with our clients to understand their unique challenges and deliver tailored solutions.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Transforming workflows across industries, reducing costs, and increasing productivity worldwide.",
    gradient: "from-blue-500 to-blue-700",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About hybridpillars
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We build domain-specific AI agents that automate business workflows — from sales to education. 
            Our modular AI agent systems plug into existing businesses, reducing costs and increasing productivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.gradient} p-3 mb-4 flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

