"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, Layers, GitBranch, Database, CheckCircle2, 
  ArrowRight, Key, Lock, Cpu, Server, Network
} from "lucide-react";
import Link from "next/link";
import { InsurixDashboardMockup } from "@/components/InsurixDashboardMockup";

export default function PlatformPage() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(1);

  const workflowSteps = [
    {
      step: 1,
      title: "1. FNOL Intake & OCR Extraction",
      desc: "Claimant or broker initiates First Notice of Loss via self-service web portal, mobile app, or webhook. Document AI extracts policy numbers, incident dates, and scene photos automatically.",
      tech: "ACORD 125/140 OCR • Computer Vision • Geo-fencing",
    },
    {
      step: 2,
      title: "2. Coverage & Limit Verification",
      desc: "Engine verifies policy in-force status at the exact moment of loss, deductibles, aggregate limits, and endorsement exclusions without human intervention.",
      tech: "Sub-second Policy Query • Automatic Reserve Calculation",
    },
    {
      step: 3,
      title: "3. Fraud Scoring & Triage Routing",
      desc: "Loss parameters are cross-checked against national fraud databases, prior claim records, and weather telemetry. High-risk claims flag for Special Investigation Unit (SIU).",
      tech: "ISO ClaimSearch Integration • ML Anomaly Detector",
    },
    {
      step: 4,
      title: "4. Automated Appraisal & Adjudication",
      desc: "Routine claims under custom financial thresholds (e.g. $5,000) are fast-tracked for straight-through automated approval; complex claims route to senior adjusters.",
      tech: "Straight-Through Processing (STP) • Adjuster Portal",
    },
    {
      step: 5,
      title: "5. Real-Time Indemnity Settlement",
      desc: "Approved payments disburse directly to claimant bank accounts, repair facilities, or lienholders via RTP (Real-Time Payments) and FedNow rails.",
      tech: "RTP Instant Rails • Automated Subrogation Tracking",
    },
  ];

  const integrations = [
    { name: "Verisk / ISO", type: "Rating & Fraud Analytics", desc: "Automated territory rating tables and ClaimSearch verification." },
    { name: "LexisNexis C.L.U.E.", type: "Underwriting History", desc: "Instant prior loss history check during quoting phase." },
    { name: "Guidewire / Duck Creek", type: "Core Bridge", desc: "Bi-directional sync with legacy enterprise back-office systems." },
    { name: "DocuSign / HelloSign", type: "Digital E-Signatures", desc: "Compliant policy contract signing and signature verification." },
    { name: "Stripe & RTP Network", type: "Premium & Payouts", desc: "Real-time payment rails for premiums and instant claim settlements." },
    { name: "Salesforce Financial Cloud", type: "CRM Synchronization", desc: "Full commercial account relationship and policy synchronization." },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold mb-4">
          <Network className="w-3.5 h-3.5 text-amber-500" />
          <span>Open API Insurance Core Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Enterprise Platform & Connected Ecosystem
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Built as an open, cloud-native API platform that connects legacy systems, third-party underwriting data sources, and modern automated payment rails.
        </p>
      </div>

      {/* Interactive 5-Step Claims Workflow Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Interactive Workflow Architecture
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              Automated 5-Step Claims Orchestration Pipeline
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Click any step below to inspect how Insurix processes claims with sub-second decisioning.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {workflowSteps.map((ws) => (
              <button
                key={ws.step}
                onClick={() => setActiveWorkflowStep(ws.step)}
                className={`p-4 rounded-xl text-left border transition ${
                  activeWorkflowStep === ws.step
                    ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30 font-bold"
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="text-xs font-mono opacity-80">STEP 0{ws.step}</div>
                <div className="text-sm font-semibold mt-1 truncate">
                  {ws.title.split(". ")[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          {(() => {
            const stepData = workflowSteps.find((s) => s.step === activeWorkflowStep)!;
            return (
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <h3 className="font-bold text-lg text-white">{stepData.title}</h3>
                  <span className="text-xs font-mono px-3 py-1 rounded bg-slate-800 text-amber-400 border border-slate-700">
                    {stepData.tech}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  {stepData.desc}
                </p>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Embedded Live Dashboard Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Real-Time Actuarial Exposure & Combined Ratios
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Single pane of glass across policy issuance, reserve allocations, and loss ratios.
          </p>
        </div>

        <InsurixDashboardMockup />
      </section>

      {/* Pre-Built Carrier Ecosystem Integrations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
            Certified Connectors
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
            Connects With Leading Industry Data Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-base">{item.name}</h4>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                  {item.type}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
