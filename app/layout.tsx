import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hybridpillars - Reimagine Work with Autonomous AI Agents",
  description:
    "hybridpillars builds domain-specific AI agents that transform how teams sell, support, and scale.",
  icons: {
    icon: "/hp_logo.png",
    shortcut: "/hp_logo.png",
    apple: "/hp_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}

