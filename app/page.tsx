import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { AIAgents } from "@/components/AIAgents";
import { Industries } from "@/components/Industries";
import { Integrations } from "@/components/Integrations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FeatureGrid } from "@/components/FeatureGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <FeatureGrid />
      <About />
      <AIAgents />
      <Industries />
      <Integrations />
      <Contact />
      <Footer />
    </main>
  );
}

