"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Headphones,
  BarChart3,
  Workflow,
  Users,
  GraduationCap,
  Star,
  Sparkles,
} from "lucide-react";

const agents = [
  {
    name: "LeadGen Agent",
    category: "Sales & Marketing",
    icon: TrendingUp,
    description: "Automates LinkedIn & email outreach with smart personalization.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "VoiceCare Agent",
    category: "Customer Support",
    icon: Headphones,
    description: "AI voice & chat caller for handling customer queries 24/7.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Insight Agent",
    category: "Business Intelligence",
    icon: BarChart3,
    description: "Analyzes company data & dashboards; generates daily insights.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "OpsFlow Agent",
    category: "Operations",
    icon: Workflow,
    description: "Automates internal task coordination & workflow optimization.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Talent Agent",
    category: "HR & Recruitment",
    icon: Users,
    description: "Screens candidates, schedules interviews, and analyzes resumes.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Eduyar / Sahayak Agent",
    category: "Education",
    icon: GraduationCap,
    description: "Automates attendance, report generation, and parent communication.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "ReviewSense Agent",
    category: "Product Analytics",
    icon: Star,
    description: "Extracts insights from product reviews across platforms.",
    gradient: "from-blue-500 to-blue-700",
  },
];

export function AIAgents() {
  return (
    <section id="solutions" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <Sparkles className="w-12 h-12 text-blue-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            AI Agents Marketplace
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Modular AI agent systems that plug into existing businesses, reducing costs and increasing productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl" style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  background: `linear-gradient(to right, ${agent.gradient.split(' ')[0]}, ${agent.gradient.split(' ')[1]})`,
                }} />
                <div className="relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${agent.gradient} p-3 mb-4 flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-blue-100 mb-2 block">{agent.category}</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">{agent.name}</h3>
                  <p className="text-gray-300 mb-4">{agent.description}</p>
                  <motion.a
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More →
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

