import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    price: "$1,999",
    cadence: "per month",
    description:
      "Perfect for early-stage automation with one channel and lightweight workflows.",
    features: [
      "1 voice or chat agent",
      "Up to 5K monthly conversations",
      "Email + Slack support",
      "Knowledge base ingestion",
    ],
    cta: "Start trial",
  },
  {
    name: "Growth",
    price: "$4,999",
    cadence: "per month",
    description:
      "Scale automation across teams with omnichannel experiences and deep integrations.",
    features: [
      "Up to 5 agents across voice & chat",
      "Unlimited workflows & journeys",
      "CRM, ITSM, & data warehouse integrations",
      "Dedicated customer success partner",
    ],
    highlight: true,
    cta: "Book a consult",
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "engagement",
    description:
      "Tailored programs for regulated industries, global operations, and bespoke AI models.",
    features: [
      "Unlimited agents and channels",
      "On-prem or VPC deployment options",
      "Regulatory & security compliance support",
      "24/7 premium success with AI ops team",
    ],
    cta: "Design your plan",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#02020a] to-black text-white">
      <Navbar variant="static" />

      <section className="mx-auto max-w-6xl px-4 pb-24 pt-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-red-600/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-200">
            Pricing
          </span>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Pick your launch velocity
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/60">
            Every plan includes white-glove onboarding, continuous optimisation,
            and access to our library of prebuilt automation templates. Only pay
            for the channels and agent capacity you need.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-[0_30px_90px_rgba(127,29,29,0.45)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 ${
                plan.highlight ? "ring-2 ring-blue-400/60" : ""
              }`}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-500 hover:opacity-70" />
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-3 text-white/60">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm uppercase tracking-wide text-white/50">
                  {plan.cadence}
                </span>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-white/80">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-red-600 text-white hover:bg-red-500"
                    : "border border-red-400 text-white hover:bg-red-600/80"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}


