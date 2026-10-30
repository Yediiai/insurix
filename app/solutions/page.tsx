"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, FileText, FileSpreadsheet, Layers, CheckCircle2, 
  ArrowRight, Award, Users, AlertTriangle, Cpu, BarChart3
} from "lucide-react";
import Link from "next/link";

export default function SolutionsPage() {
  const [activeModule, setActiveModule] = useState<string>("policy-admin");

  const modules = [
    {
      id: "policy-admin",
      title: "Policy Administration Core",
      tagline: "Full lifecycle policy issuance, mid-term endorsements, renewals, and cancellations.",
      bullets: [
        "Configurable multi-line underwriting rules and risk appetite limits",
        "Automated mid-term endorsements (MTA) with pro-rata premium adjustments",
        "Configurable direct billing, agency billing, and split-payment schedules",
        "Automated 60-day renewal scoring with loss-run auto-attachment",
      ],
    },
    {
      id: "claims-fnol",
      title: "Claims Orchestration & FNOL",
      tagline: "Automate First Notice of Loss intake, reserve management, and settlement.",
      bullets: [
        "Omnichannel FNOL intake via insured portal, broker portal, or webhook",
        "Real-time fraud anomaly scoring cross-referenced against ISO databases",
        "Automated damage appraisal integration with computer vision estimators",
        "Straight-through-processing (STP) fast-track for low-complexity claims",
      ],
    },
    {
      id: "broker-management",
      title: "Broker & Distribution Portal",
      tagline: "Empower agency networks with instant quoting, bind authority, and commissions.",
      bullets: [
        "Self-service quote, bind, and issue workflows completed in under 90 seconds",
        "Sub-producer hierarchy and licensed state appointment verification",
        "Automated commission accounting with monthly direct deposit statements",
        "Instant certificate of insurance (COI) generation with custom endorsements",
      ],
    },
    {
      id: "document-ai",
      title: "Intelligent Document Processing (IDP)",
      tagline: "Convert unstructured PDFs, police reports, and ACORD forms into structured data.",
      bullets: [
        "Pre-trained ACORD form extractor (ACORD 125, 126, 130, 140, etc.)",
        "Police and loss report OCR with incident timestamp extraction",
        "Instant policy contract comparison for reinsurance coverage gaps",
        "Audit-ready digital document repository with SOC 2 compliance",
      ],
    },
  ];

  const currentModule = modules.find((m) => m.id === activeModule) || modules[0];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
          <span>Modular Enterprise Insurance Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Insurance Core Solutions
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Built for property & casualty, commercial lines, specialty MGAs, and life insurance carriers seeking speed, operational agility, and regulatory compliance.
        </p>
      </div>

      {/* Interactive Module Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {modules.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition ${
                  activeModule === item.id
                    ? "bg-white border-blue-600 shadow-md ring-1 ring-blue-500/20"
                    : "bg-white/70 border-slate-200 hover:border-slate-300"
                }`}
              >
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">{item.tagline}</p>
              </div>
            ))}
          </div>

          {/* Module Detail Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-mono font-semibold">
              <span>Enterprise Module</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {currentModule.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentModule.tagline}
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              {currentModule.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-slate-700">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-bold text-sm transition shadow-md"
              >
                <span>Request Technical Architecture Deck</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Workflow & Bordereau Automation */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Regulatory Governance
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              Automated Bordereau & State Compliance Reporting
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Satisfy strict reinsurance treaty and state department of insurance requirements with one-click export pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
              <div className="text-amber-400 font-mono text-sm font-bold">Premium Bordereau</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated monthly reporting of written premiums, commission withholdings, and unearned premium reserves (UPR).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
              <div className="text-amber-400 font-mono text-sm font-bold">Claims Paid & Incurred</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Granular loss bordereaux documenting paid indemnity, allocated loss adjustment expense (ALAE), and outstanding reserves.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 space-y-2">
              <div className="text-amber-400 font-mono text-sm font-bold">State Surplus Lines Filings</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automated tax reconciliation and electronic stamping export for non-admitted surplus lines jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
