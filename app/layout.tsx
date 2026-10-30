import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insurix — Enterprise Insurance Core & Automated Claims Platform",
  description:
    "Simplify insurance, strengthen trust. Next-generation policy administration, automated claims orchestration, and broker connectivity for modern carriers and MGAs.",
  keywords: ["insurtech", "policy administration", "claims orchestration", "MGA platform", "insurance software"],
  openGraph: {
    title: "Insurix — Insurance Core System & Claims Orchestration",
    description: "Accelerate underwriting speed and automate First-Notice-of-Loss claims processing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 antialiased font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
