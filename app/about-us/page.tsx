import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const milestones = [
  {
    year: "2022",
    title: "hybridpillars founded",
    description:
      "We began as a team of conversational AI researchers with a mission to make enterprise-grade automation accessible.",
  },
  {
    year: "2023",
    title: "First industry-specific agents",
    description:
      "Launched pre-trained agents for HR and customer experience, cutting deployment timelines from months to days.",
  },
  {
    year: "2024",
    title: "Global expansion",
    description:
      "Scaled to multi-language support and partnered with Fortune 500 teams across banking, retail, and telecom.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#080014] to-black text-white">
      <Navbar variant="static" />

      <section className="mx-auto max-w-5xl px-4 pb-12 pt-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
            Our story
          </span>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Building empathetic automation for the world’s most human teams
          </h1>
          <p className="mt-4 text-lg text-white/60">
            We are engineers, designers, and operators who believe every
            business deserves AI that acts like a trusted teammate. Our
            platform blends safe foundation models, guardrailed automation, and
            human hand-offs to drive measurable impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_25px_90px_rgba(91,33,182,0.2)] backdrop-blur-sm">
          <h2 className="text-2xl font-semibold">Milestones</h2>
          <div className="mt-8 space-y-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-white/40">
                  {milestone.year}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{milestone.title}</h3>
                <p className="mt-2 text-white/70">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Footer />
    </main>
  );
}


