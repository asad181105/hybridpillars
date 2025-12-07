"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

type AgentCategory = {
  name: string;
  accent: string;
  agents: string[];
};

const categories: AgentCategory[] = [
  {
    name: "HR",
    accent: "from-blue-500 to-blue-700",
    agents: [
      "AI Hiring Assistant",
      "Exit Interview Agent",
      "Job Description Generator",
      "HR Helpdesk Agent",
      "AI L&D Agent",
      "Employee Satisfaction Survey Agent",
      "AI Performance Review Agent",
      "Resume Screening Agent",
      "Onboarding Assistant Agent",
    ],
  },
  {
    name: "Marketing",
    accent: "from-blue-500 to-blue-700",
    agents: [
      "Campaign Copy Generator",
      "Ad Performance Analyst",
      "Community Engagement Agent",
      "Launch Playbook Designer",
      "Brand Voice Coach",
    ],
  },
  {
    name: "Sales",
    accent: "from-blue-500 to-blue-700",
    agents: [
      "Pipeline Prioritization Agent",
      "Proposal Drafting Copilot",
      "Deal Health Monitor",
      "Renewals Success Agent",
    ],
  },
  {
    name: "Customer Service",
    accent: "from-blue-500 to-blue-700",
    agents: [
      "VoiceCare Agent",
      "Knowledge Base Curator",
      "Outage Communication Agent",
      "Customer Retention Specialist",
    ],
  },
  {
    name: "Banking",
    accent: "from-blue-500 to-blue-700",
    agents: [
      "Fraud Alert Concierge",
      "Account Opening Guide",
      "Loan Application Navigator",
      "Compliance Insight Agent",
    ],
  },
  {
    name: "Insurance",
    accent: "from-blue-500 to-blue-700",
    agents: [
      "Claims Intake Agent",
      "Policy Recommendation Specialist",
      "Renewal Reminder Agent",
      "Agent Assist Copilot",
    ],
  },
];

const readyToUseAgents = [
  "LeadGen Agent",
  "VoiceCare Agent",
  "Insight Agent",
  "OpsFlow Agent",
  "Talent Agent",
  "Eduyar / Sahayak Agent",
  "ReviewSense Agent",
];

export default function AgentsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#090018] to-black text-white">
      <Navbar variant="static" />

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Prebuilt agents
          </span>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Launch-ready AI specialists for every team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Mix and match industry-trained agents to automate hiring,
            engagement, support, compliance, and more—without reinventing your
            workflows.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory.name === category.name
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/40"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {activeCategory.agents.map((agent) => (
            <motion.a
              key={agent}
              href="/contact"
              whileHover={{ y: -4 }}
              className="flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-black/40 px-4 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.35)] transition-colors hover:border-blue-500 hover:bg-blue-600/80"
            >
              {agent}
            </motion.a>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-blue-600/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Ready to use agents
          </span>
          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Deploy proven agents in days, not months
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
            These agents are fully templated and battle-tested. Pick one to see
            how it could plug into your stack and we&apos;ll help you tailor it
            on a quick call.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {readyToUseAgents.map((agent) => (
            <motion.a
              key={agent}
              href="/contact"
              whileHover={{ y: -4 }}
              className="flex h-24 items-center justify-center rounded-3xl border border-blue-500/70 bg-black/50 px-4 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(59,130,246,0.45)] transition-colors hover:bg-blue-600"
            >
              {agent}
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}


