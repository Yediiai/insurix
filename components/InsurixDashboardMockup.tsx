"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, AlertTriangle, FileText, TrendingUp, CheckCircle2, 
  Clock, ArrowUpRight, Filter, ChevronRight, Layers, BarChart2
} from "lucide-react";

export function InsurixDashboardMockup() {
  const [activeTab, setActiveTab] = useState<"claims" | "policies" | "loss-ratio">("claims");

  const claimsQueue = [
    {
      id: "CLM-98210",
      line: "Commercial Auto",
      claimant: "Apex Logistics LLC",
      lossType: "Multi-Vehicle Collision",
      incurred: "$48,500",
      reserve: "$55,000",
      status: "AI Damage Triage",
      priority: "High",
      time: "18m ago",
    },
    {
      id: "CLM-98209",
      line: "Commercial Property",
      claimant: "Harborview Bistro",
      lossType: "Interior Water Discharge",
      incurred: "$12,400",
      reserve: "$15,000",
      status: "Auto-Appraised",
      priority: "Normal",
      time: "42m ago",
    },
    {
      id: "CLM-98208",
      line: "Cyber Liability",
      claimant: "FinTech Cloud Solutions",
      lossType: "Business Email Compromise",
      incurred: "$85,000",
      reserve: "$100,000",
      status: "Forensic Review",
      priority: "Critical",
      time: "2h ago",
    },
    {
      id: "CLM-98207",
      line: "General Liability",
      claimant: "Summit Construction Corp",
      lossType: "Third-Party Slip & Fall",
      incurred: "$6,200",
      reserve: "$8,000",
      status: "Settled (STP)",
      priority: "Low",
      time: "3h ago",
    },
  ];

  const activePolicies = [
    { id: "POL-77412", insured: "Vanguard Distribution", line: "Inland Marine", premium: "$34,200/yr", status: "Active (Bound)", effective: "Nov 01, 2026" },
    { id: "POL-77411", insured: "Beacon Medical Systems", line: "D&O / E&O", premium: "$28,500/yr", status: "Active (Bound)", effective: "Oct 15, 2026" },
    { id: "POL-77410", insured: "Skyline Realty Group", line: "Commercial Property", premium: "$94,000/yr", status: "Under Endorsement", effective: "Sep 01, 2026" },
  ];

  return (
    <div className="w-full bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans text-white">
      {/* Top Header */}
      <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="font-bold text-sm tracking-wide text-slate-100">
            Atlas Specialty Underwriters — Core Policy & Claims Console
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
            Carrier Core v4.2
          </span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { id: "claims", label: "FNOL Claims Queue (4)" },
            { id: "policies", label: "In-Force Policies" },
            { id: "loss-ratio", label: "Loss Ratio & Exposure" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="p-6 bg-slate-900/60 border-b border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Total Active GWP</span>
          <div className="text-2xl font-bold font-mono text-white">$48,250,000</div>
          <span className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> +14.2% YoY Carrier Growth
          </span>
        </div>

        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Combined Loss Ratio</span>
          <div className="text-2xl font-bold font-mono text-amber-400">61.4%</div>
          <span className="text-xs text-slate-400 mt-1 block">Target threshold: &lt; 68.0%</span>
        </div>

        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Straight-Through Processing (STP)</span>
          <div className="text-2xl font-bold font-mono text-blue-400">68.2%</div>
          <span className="text-xs text-slate-400 mt-1 block">Zero manual touchpoint claims</span>
        </div>

        <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Avg FNOL to Settlement</span>
          <div className="text-2xl font-bold font-mono text-emerald-400">2.6 Days</div>
          <span className="text-xs text-slate-400 mt-1 block">Industry average: 21 days</span>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-6 sm:p-8">
        {activeTab === "claims" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h4 className="font-bold text-sm text-slate-200">
                Live First-Notice-of-Loss (FNOL) Ingestion Feed
              </h4>
              <span className="text-xs text-slate-400 font-mono">
                Auto-triage with anomaly & fraud scoring
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Claim ID</th>
                    <th className="py-3 px-4 font-semibold">Line & Insured</th>
                    <th className="py-3 px-4 font-semibold">Peril / Incident</th>
                    <th className="py-3 px-4 font-semibold">Incurred</th>
                    <th className="py-3 px-4 font-semibold">Workflow State</th>
                    <th className="py-3 px-4 font-semibold text-right">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {claimsQueue.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-900/60 transition">
                      <td className="py-3 px-4 font-bold text-amber-400">{c.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white font-sans">{c.claimant}</div>
                        <div className="text-[11px] text-slate-400">{c.line}</div>
                      </td>
                      <td className="py-3 px-4 text-slate-300 font-sans">{c.lossType}</td>
                      <td className="py-3 px-4 font-bold text-white">{c.incurred}</td>
                      <td className="py-3 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-blue-500/10 text-blue-400 border border-blue-500/20 font-sans font-medium">
                          {c.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            c.priority === "Critical"
                              ? "bg-rose-500/20 text-rose-400 border border-rose-500/30"
                              : c.priority === "High"
                              ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {c.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "policies" && (
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-slate-200">
              Active Bound Commercial Policies
            </h4>
            <div className="space-y-2">
              {activePolicies.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs font-mono"
                >
                  <div>
                    <span className="font-bold text-amber-400">{p.id}</span>
                    <span className="mx-2 text-slate-600">|</span>
                    <span className="text-white font-sans font-semibold">{p.insured}</span>
                    <span className="mx-2 text-slate-600">|</span>
                    <span className="text-slate-400">{p.line}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-emerald-400 font-bold">{p.premium}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "loss-ratio" && (
          <div className="space-y-4">
            <h4 className="font-bold text-sm text-slate-200">
              Actuarial Combined Loss Ratio Exposure (Current Underwriting Year)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400">Commercial Auto Loss Ratio</span>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">54.2%</div>
                <p className="text-[11px] text-slate-500 mt-1">Excellent underwriting margin</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400">Commercial Property Loss Ratio</span>
                <div className="text-xl font-bold font-mono text-amber-400 mt-1">68.8%</div>
                <p className="text-[11px] text-slate-500 mt-1">Elevated due to regional weather</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs text-slate-400">Cyber & Executive Risk</span>
                <div className="text-xl font-bold font-mono text-blue-400 mt-1">48.9%</div>
                <p className="text-[11px] text-slate-500 mt-1">Low claim frequency</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
