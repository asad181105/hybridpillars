"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, Clock, Send } from "lucide-react";
import { storage } from "@/lib/storage";
import { sendEmail } from "@/lib/emailjs";

export default function GetInTouchPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    urgency: "Within 1 hour",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to storage
      storage.save({
        type: 'get-in-touch',
        name: formData.name,
        email: formData.email,
        topic: formData.topic,
        urgency: formData.urgency,
      });

      // Send email via EmailJS
      await sendEmail({
        type: 'get-in-touch',
        name: formData.name,
        email: formData.email,
        topic: formData.topic,
        urgency: formData.urgency,
      });

      alert("Thanks! Our rapid response team will reach out right away.");
      setFormData({
        name: "",
        email: "",
        topic: "",
        urgency: "Within 1 hour",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#220000] to-black text-white">
      <Navbar variant="static" />

      <section className="mx-auto max-w-5xl px-4 pb-24 pt-20">
        <div className="rounded-3xl border border-red-500/60 bg-black/40 p-10 shadow-[0_25px_100px_rgba(248,113,113,0.45)] backdrop-blur-md">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1">
              <span className="inline-flex items-center rounded-full bg-red-600/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-200">
                Immediate response
              </span>
              <h1 className="mt-6 text-4xl font-bold md:text-5xl">
                Need answers now? Our rapid response desk is on it.
              </h1>
              <p className="mt-4 text-lg text-white/70">
                Share a few details and our specialists will reply within the
                next hour—via your preferred channel. For mission-critical
                issues, call or start a live chat instantly.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-red-500/60 bg-black/40 p-4">
                  <MessageCircle className="h-10 w-10 text-red-300" />
                  <div>
                    <p className="text-sm text-white/50">Live chat</p>
                    <p className="text-base font-semibold text-white">
                      Available 24/7
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-red-500/60 bg-black/40 p-4">
                  <PhoneCall className="h-10 w-10 text-red-300" />
                  <div>
                    <p className="text-sm text-white/50">Priority hotline</p>
                    <p className="text-base font-semibold text-white">
                      +91 8247579990
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-red-500/60 bg-black/40 p-4">
                  <Clock className="h-10 w-10 text-red-300" />
                  <div>
                    <p className="text-sm text-white/50">Average response</p>
                    <p className="text-base font-semibold text-white">
                      Under 27 minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-red-500/60 bg-black/40 p-4">
                  <Send className="h-10 w-10 text-red-300" />
                  <div>
                    <p className="text-sm text-white/50">Need NDA first?</p>
                    <p className="text-base font-semibold text-white">
                      We&apos;ll send one immediately
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 space-y-5 rounded-3xl border border-white/10 bg-black/50 p-6 backdrop-blur-lg"
            >
              <div>
                <label className="block text-sm font-medium text-white/60">
                  Your name
                </label>
                <input
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-red-500/60 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60">
                  Work email
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-red-500/60 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60">
                  What do you need help with?
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.topic}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, topic: event.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-red-500/60 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                  placeholder="Share context, links, or questions..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60">
                  Preferred response time
                </label>
                <select
                  value={formData.urgency}
                  onChange={(event) =>
                    setFormData((prev) => ({
                      ...prev,
                      urgency: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-xl border border-red-500/60 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/30"
                >
                  <option value="Within 1 hour">Within 1 hour</option>
                  <option value="ASAP (call me)">ASAP (call me)</option>
                  <option value="Later today">Later today</option>
                  <option value="Schedule a time">Schedule a time</option>
                </select>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full rounded-full bg-red-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(248,113,113,0.45)] transition hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Notify the rapid response team"}
              </motion.button>

              <p className="text-xs text-white/50">
                We keep your information secure and never share it without
                permission. Already a customer? Use the in-product command{" "}
                <code className="rounded bg-black/40 px-1 py-0.5 text-white/80">
                  /help
                </code>{" "}
                for priority routing.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


