import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const solutions = [
  {
    title: "Customer Experience Studio",
    description:
      "Automate voice and chat conversations across channels with empathetic, multilingual support that escalates to humans when it matters.",
    highlights: [
      "Voice, chat, social, and email coverage",
      "Sentiment-aware scripts and tone shifting",
      "CRM, ITSM, and contact-center integrations",
    ],
  },
  {
    title: "Revenue Acceleration Suite",
    description:
      "Unlock net-new revenue with AI-led prospecting, deal desk insights, and renewal workflows that keep pipelines healthy automatically.",
    highlights: [
      "Predictive lead scoring & outreach cadences",
      "Proposal and quote generation copilots",
      "Renewal risk alerts with playbook suggestions",
    ],
  },
  {
    title: "People Operations Automation",
    description:
      "Deliver consumer-grade experiences to candidates and employees with AI that supports hiring, onboarding, and ongoing engagement.",
    highlights: [
      "Always-on candidate screening & interviews",
      "Personalized onboarding journeys",
      "Employee pulse & satisfaction surveys",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#210000] to-black text-white">
      <Navbar variant="static" />

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full bg-red-600/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-200">
            Solutions
          </p>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Launch an AI center of excellence without starting from scratch
          </h1>
          <p className="mt-4 text-lg text-white/60">
            Assemble modular voice, chat, and workflow agents tailored to your
            customer journeys, employee experiences, and revenue lifecycles.
            Each solution is pre-integrated, compliance-ready, and configurable
            to your brand in weeks.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(248,113,113,0.35)] backdrop-blur-sm"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-500 hover:opacity-70" />
              <h2 className="text-2xl font-semibold">{solution.title}</h2>
              <p className="mt-4 text-white/70">{solution.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {solution.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-red-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}


