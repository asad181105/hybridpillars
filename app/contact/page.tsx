import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#020212] to-black text-white">
      <Navbar variant="static" />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}


