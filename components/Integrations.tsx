"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Slack,
  Mail,
  Linkedin,
  Zap,
  MessageSquare,
  Calendar,
  FileText,
  Database,
} from "lucide-react";

const integrations = [
  { name: "Slack", icon: Slack, color: "text-purple-400" },
  { name: "Gmail", icon: Mail, color: "text-blue-400" },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-400" },
  { name: "Zapier", icon: Zap, color: "text-orange-400" },
  { name: "Notion", icon: FileText, color: "text-gray-400" },
  { name: "Calendly", icon: Calendar, color: "text-blue-500" },
  { name: "CRM Systems", icon: Database, color: "text-green-400" },
  { name: "Chat Platforms", icon: MessageSquare, color: "text-cyan-400" },
];

export function Integrations() {
  return (
    <section id="integrations" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with the tools your team already uses. Our AI agents integrate seamlessly with your existing workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm group-hover:border-white/30 transition-all duration-300 text-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-12 h-12 ${integration.color} mx-auto mb-4`} />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-gray-300">{integration.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

