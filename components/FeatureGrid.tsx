import {
  Mic,
  Languages,
  Smile,
  PhoneCall,
  RefreshCw,
  FileAudio,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Hyper Realistic Voices",
    description:
      "Rootle sounds like a real person—clear, warm, and natural. It keeps users engaged with lifelike rhythm, tone, and pauses.",
    icon: Mic,
    accent: "from-[#7C3AED] to-[#4C1D95]",
  },
  {
    title: "Multilingual Support",
    description:
      "Automatically detects and speaks in the language your users prefer, keeping conversations effortless and inclusive.",
    icon: Languages,
    accent: "from-[#0EA5E9] to-[#0369A1]",
  },
  {
    title: "Emotionally Aware, Logically Sharp",
    description:
      "Understands emotional cues like frustration or urgency and responds with empathy while staying on-point.",
    icon: Smile,
    accent: "from-[#F97316] to-[#C2410C]",
  },
  {
    title: "Seamless Human Transfer",
    description:
      "Knows when to hand off to a human and routes conversations instantly—no repeat explanations for the user.",
    icon: PhoneCall,
    accent: "from-[#A855F7] to-[#6B21A8]",
  },
  {
    title: "Inbound & Outbound Support",
    description:
      "Handles every direction of voice and messaging workflows—from real-time resolutions to proactive check-ins.",
    icon: RefreshCw,
    accent: "from-[#22C55E] to-[#15803D]",
  },
  {
    title: "Call Transcription",
    description:
      "Transcribes calls in real time, turning conversations into searchable, insightful records for smarter decisions.",
    icon: FileAudio,
    accent: "from-[#F9A8D4] to-[#DB2777]",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative z-10 bg-gradient-to-b from-black via-[#0E0A1F] to-black py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
            Voice Intelligence Suite
          </p>
          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            All the empathy and efficiency, none of the wait
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Build meaningful conversations that stay human at every touchpoint
            with instant understanding, seamless routing, and action-ready
            insights.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 text-white shadow-[0_20px_60px_rgba(76,29,149,0.2)] transition-transform duration-500 hover:-translate-y-2"
              >
                <div
                  className={cn(
                    "absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70",
                    `bg-gradient-to-br ${feature.accent}`
                  )}
                />
                <div
                  className={cn(
                    "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
                    `bg-gradient-to-br ${feature.accent}`
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-base text-white/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


