import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Award, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Insur<span className="text-blue-400">ix</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Enterprise core system and automated claims orchestration platform. Enabling modern insurance carriers and MGAs to launch lines of business in weeks instead of quarters.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <Award className="w-4 h-4 text-amber-400" />
              <span>ACORD Standards Participant • SOC 2 Type II Certified</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-normal">
              *Notice: Insurix is a software technology provider. Insurix is not an insurance carrier, managing general underwriter, or licensed broker. Insurix does not bind coverage, underwrite risks, or adjudicate insurance claims directly.
            </p>
          </div>

          {/* Column 1: Core Solutions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-amber-400 transition">
                  Policy Administration Core
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-amber-400 transition">
                  FNOL Claims Orchestration
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-amber-400 transition">
                  Broker & Agent Portal
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-amber-400 transition">
                  Intelligent Document Intake
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-amber-400 transition">
                  Automated Rating Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Platform & APIs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/platform" className="hover:text-amber-400 transition">
                  Unified Core Architecture
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-amber-400 transition">
                  Claims Workflow Engine
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-amber-400 transition">
                  Actuarial Loss Reporting
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-amber-400 transition">
                  Verisk & ISO Integrations
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-amber-400 transition">
                  REST & Webhook Connectors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Commercial */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Commercial & RFQ
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-amber-400 transition">
                  Carrier & MGA Pricing
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-amber-400 transition">
                  Gross Written Premium Tiers
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-amber-400 transition">
                  Request RFP / RFQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-amber-400 transition">
                  Implementation Advisory
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Insurix Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition">Privacy Notice</span>
            <span className="hover:text-white cursor-pointer transition">Master Services Agreement</span>
            <span className="hover:text-white cursor-pointer transition">Security Whitepaper</span>
            <span className="hover:text-white cursor-pointer transition">Bordereau SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
