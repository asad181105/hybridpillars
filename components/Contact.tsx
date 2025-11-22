"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { storage } from "@/lib/storage";
import { sendEmail } from "@/lib/emailjs";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to storage
      storage.save({
        type: 'contact',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      // Send email via EmailJS
      await sendEmail({
        type: 'contact',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      alert("Thank you for your interest! We'll be in touch soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/20 to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your workflow? Let's discuss how our AI agents can help your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-red-100 mb-8">
                Schedule a demo or reach out to learn more about how hybridpillars can automate your business workflows.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:contact@hybridpillars.com"
                className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/30 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-3 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-red-100">Email</p>
                  <p className="text-white group-hover:text-red-400 transition-colors">contact@hybridpillars.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918247579990"
                className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/30 transition-all group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-700 p-3 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white group-hover:text-purple-400 transition-colors">+91 8247579990</p>
                </div>
              </motion.a>

              <div className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-700 p-3 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Edventure Park MasabTank Hyderabad</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-red-500/60 text-white placeholder-red-200/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-red-500/60 text-white placeholder-red-200/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-red-500/60 text-white placeholder-red-200/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-red-500/60 text-white placeholder-red-200/70 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-red-700 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-red-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

