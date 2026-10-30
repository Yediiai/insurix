"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, FileSpreadsheet, ArrowRight, CheckCircle2, 
  Layers, Users, Building2, BarChart3, Check, Award, ArrowUpRight
} from "lucide-react";
import { InsurixDashboardMockup } from "@/components/InsurixDashboardMockup";

export default function HomePage() {
  const [stakeholderView, setStakeholderView] = useState<"carriers" | "brokers">("carriers");

  const carrierBenefits = [
    {
      title: "Launch New Lines in Under 30 Days",
      desc: "No-code rating rule configuration and modular product definitions allow underwriters to deploy P&C, Commercial, or Specialty products without legacy core migrations.",
    },
    {
      title: "68% Straight-Through Claims Processing",
      desc: "Intelligent triage algorithms appraise claims documentation, cross-reference ISO fraud databases, and issue automated payouts for routine losses.",
    },
    {
      title: "Real-Time Combined Ratio Analytics",
      desc: "Monitor exposure heatmaps, catastrophic event reserves, and line-of-business underwriting profitability through interactive actuarial dashboards.",
    },
    {
      title: "Bordereau & Reinsurance Reporting",
      desc: "Automated monthly treaty bordereau generation with zero reconciliation lag for syndicate partners and treaty reinsurers.",
    },
  ];

  const brokerBenefits = [
    {
      title: "Sub-Minute Quote Binding",
      desc: "Brokers and independent producers bind coverage instantly through white-labeled web portals or embedded APIs without emailing paper ACORD forms.",
    },
    {
      title: "Automated Commission Accounting",
      desc: "Real-time commission tracking, split-producer management, and instant direct ACH disbursements at month-end.",
    },
    {
      title: "Real-Time Policy Status & Endorsements",
      desc: "Issue certificates of insurance (COI), process mid-term endorsements, and track claim payouts in real-time from any device.",
    },
    {
      title: "Proactive Renewal Alerts",
      desc: "Automated 60-day renewal notifications with pre-filled renewal applications to maintain retention rates above 92%.",
    },
  ];

  const testimonials = [
    {
      quote: "Insurix enabled us to spin up our Commercial Cyber MGA program from inception to our first bound policy in just 26 days. The claims automation cut loss adjustment expenses by 34%.",
      author: "Julian Reynolds",
      role: "Chief Underwriting Officer, Apex Specialty Syndicate",
      stats: "$180M GWP processed",
    },
    {
      quote: "The broker portal is unmatched. Our independent agency network increased their quote submissions by 3x because binding coverage takes less than 90 seconds.",
      author: "Victoria Sterling",
      role: "EVP of Distribution, Crestview Mutual Group",
      stats: "300% quote volume surge",
    },
    {
      quote: "Replacing our 20-year-old legacy AS400 core system with Insurix was the smoothest technology transition in our company's 45-year history.",
      author: "Robert Callahan",
      role: "VP of Claims, Liberty Coast Insurance",
      stats: "99.98% platform reliability",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-12 overflow-hidden enterprise-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Next-Generation Policy Core & Claims Platform</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Simplify Insurance. <span className="text-blue-700">Strengthen Trust.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Modern policy administration, automated claims orchestration, and seamless broker connectivity for forward-thinking carriers and MGAs.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 bg-slate-900 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition flex items-center gap-2"
            >
              <span>Schedule Enterprise Demo</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold rounded-xl shadow-sm transition"
            >
              Explore Solutions
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-700" /> Supports P&C, Commercial, Specialty & Life
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-700" /> ACORD Compliant Form Pipelines
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-700" /> Verisk & ISO Rating Connectors
            </span>
          </div>

          {/* Core Insurance Dashboard Mockup */}
          <div className="mt-14 max-w-6xl mx-auto">
            <InsurixDashboardMockup />
          </div>
        </div>
      </section>

      {/* Interactive Dual Stakeholder View (Insurers vs Brokers) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
            Unified Ecosystem Architecture
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built For Both Underwriters and Brokers
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Select your organization type below to see how Insurix streamlines your day-to-day operations.
          </p>

          {/* Interactive Toggle */}
          <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300">
            <button
              onClick={() => setStakeholderView("carriers")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                stakeholderView === "carriers"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              For Insurance Carriers & MGAs
            </button>
            <button
              onClick={() => setStakeholderView("brokers")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
                stakeholderView === "brokers"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              For Independent Brokers & Agencies
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(stakeholderView === "carriers" ? carrierBenefits : brokerBenefits).map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold font-mono">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Claims Workflow Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
            Claims Lifecycle Orchestration
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            From First Notice of Loss to Automated Settlement
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Replace slow paper claims handling with a transparent 5-step automated orchestration pipeline.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
            {[
              { step: "01", title: "FNOL Intake", desc: "Omnichannel digital intake via web, mobile, or webhook with photo OCR." },
              { step: "02", title: "AI Triage", desc: "Automated coverage verification, policy limit checks, and fraud scoring." },
              { step: "03", title: "Damage Appraisal", desc: "Computer vision estimation for vehicle, property, and equipment losses." },
              { step: "04", title: "Adjudication", desc: "Straight-through payout for clear liability or adjuster routing." },
              { step: "05", title: "Settlement", desc: "Instant digital payout via Real-Time Payments (RTP) or automated ACH." },
            ].map((st, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold block mb-2">{st.step}</span>
                  <h4 className="font-bold text-sm text-white">{st.title}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
            Industry Validation
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Trusted by Forward-Thinking Insurance Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 font-bold">
                  {t.stats}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Ready to modernize your core insurance platform?
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Speak with an Insurix solutions architect to evaluate program fit, rating engine migration, and implementation timelines.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-md"
            >
              Request Enterprise RFP / Demo
            </Link>
            <Link
              href="/platform"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition border border-slate-700"
            >
              Explore Architecture & Integrations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
