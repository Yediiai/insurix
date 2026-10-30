"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ShieldCheck, Check, ArrowRight, CheckCircle2, AlertCircle, 
  Send, Loader2, Building2, HelpCircle, Award, Sliders
} from "lucide-react";

const rfqSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  corporateEmail: z.string().email("Please provide a valid corporate email address"),
  organizationName: z.string().min(2, "Organization name is required"),
  annualGwp: z.enum(["under-5m", "5m-25m", "25m-100m", "over-100m"], {
    errorMap: () => ({ message: "Please select annual Gross Written Premium (GWP)" }),
  }),
  orgType: z.enum(["mga", "carrier", "brokerage", "reinsurer"]),
  currentCore: z.string().min(2, "Please indicate current core system or AS400/manual"),
  timeframe: z.enum(["q1", "q2", "q3-q4", "evaluating"]),
  message: z.string().min(10, "Please provide brief project or lines-of-business scope"),
});

type RfqFormData = z.infer<typeof rfqSchema>;

export default function PricingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<RfqFormData | null>(null);

  const tiers = [
    {
      name: "Starter MGA",
      gwpCap: "Up to $5M Annual GWP",
      ideal: "For new Managing General Agents and specialized program administrators.",
      baseFee: "$2,400",
      feeCadence: "/ month base + 0.35% GWP",
      features: [
        "Up to 2 active lines of business (P&C or Specialty)",
        "Omnichannel FNOL intake & automated claims queue",
        "Broker portal with sub-minute quote & bind",
        "Standard ACORD form extractor",
        "Monthly premium & loss bordereau reports",
        "Standard SLA & business hours support",
      ],
      cta: "Request MGA Onboarding",
    },
    {
      name: "Growth Carrier",
      gwpCap: "$5M to $50M Annual GWP",
      ideal: "For regional mutuals, specialty carriers, and established MGAs.",
      baseFee: "$6,500",
      feeCadence: "/ month base + 0.20% GWP",
      popular: true,
      features: [
        "Unlimited lines of business and commercial rating tables",
        "Straight-Through Processing (STP) claims engine",
        "Verisk, ISO ClaimSearch & LexisNexis connectors",
        "Sub-producer multi-tier commission accounting",
        "Automated state surplus lines stamping exports",
        "Dedicated implementation architect & 99.95% SLA",
      ],
      cta: "Schedule Growth Consultation",
    },
    {
      name: "Enterprise Global",
      gwpCap: "$50M+ Unlimited GWP",
      ideal: "For tier-1 national carriers, global syndicates, and reinsurers.",
      baseFee: "Custom",
      feeCadence: "Volume-tiered enterprise contract",
      features: [
        "Everything in Growth Carrier",
        "Legacy AS400 / Guidewire bi-directional bridge",
        "Custom computer-vision damage appraisal models",
        "Multi-entity international currency & tax routing",
        "On-premise VPC or dedicated AWS/Azure cloud deployment",
        "24/7/365 dedicated mission-critical actuarial NOC",
      ],
      cta: "Request Custom RFQ",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RfqFormData>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      annualGwp: "5m-25m",
      orgType: "mga",
      timeframe: "q1",
    },
  });

  const onSubmit = async (data: RfqFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setSubmittedData(data);
    reset();
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-semibold mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
          <span>Aligned With Your Underwriting Volume</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Transparent, Volume-Aligned Pricing
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Our pricing scales with your Gross Written Premium (GWP). No massive upfront multi-million dollar capital expenditure required.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-3xl transition-all duration-200 flex flex-col justify-between ${
                tier.popular
                  ? "bg-white border-2 border-blue-600 shadow-xl relative"
                  : "bg-white border border-slate-200 shadow-sm hover:border-slate-300"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-700 text-white text-xs font-bold tracking-wider uppercase">
                  Most Selected by Carriers
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <div className="text-xs font-mono font-semibold text-blue-700 mt-1">
                  {tier.gwpCap}
                </div>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px]">{tier.ideal}</p>

                <div className="mt-6 mb-6">
                  <span className="text-4xl font-extrabold text-slate-900 font-mono">
                    {tier.baseFee}
                  </span>
                  <span className="text-xs text-slate-500 ml-1.5 font-sans">{tier.feeCadence}</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-100">
                <a
                  href="#rfq-form"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-slate-900 hover:bg-blue-700 text-white shadow-md"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enterprise RFQ & Inquiry Form */}
      <section id="rfq-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold">
                Enterprise Engagement
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Request a Custom Carrier RFQ & System Audit
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Our insurance solutions engineers will review your lines of business, rating complexities, and data migration needs to prepare a formal technical proposal and implementation roadmap.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="font-bold text-slate-900">What Our Team Provides:</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Custom GWP volume economics & fee schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Rating engine gap analysis (ISO vs proprietary)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Bordereau sample mapping to your reinsurers</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {submittedData ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Carrier RFQ Successfully Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{submittedData.fullName}</strong>. An Insurix Managing Director has been assigned to <strong>{submittedData.organizationName}</strong> and will reach out with your proposal packet.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 max-w-sm mx-auto text-left">
                  <div>Corporate Email: {submittedData.corporateEmail}</div>
                  <div>GWP Range: {submittedData.annualGwp}</div>
                  <div>Type: {submittedData.orgType}</div>
                  <div>Target Launch: {submittedData.timeframe}</div>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition"
                >
                  Submit Additional Program RFQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">Request Formal Proposal / Demo</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete the organizational details below for enterprise qualification.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name & Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="David Sterling, CUO"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.fullName ? "border-rose-300" : "border-slate-200 focus:border-blue-600"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("corporateEmail")}
                      placeholder="david@apexmutual.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.corporateEmail ? "border-rose-300" : "border-slate-200 focus:border-blue-600"
                      }`}
                    />
                    {errors.corporateEmail && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.corporateEmail.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("organizationName")}
                      placeholder="Apex Specialty Underwriters"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.organizationName ? "border-rose-300" : "border-slate-200 focus:border-blue-600"
                      }`}
                    />
                    {errors.organizationName && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.organizationName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register("orgType")}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-600 transition"
                    >
                      <option value="mga">Managing General Agent (MGA)</option>
                      <option value="carrier">Admitted / Non-Admitted Carrier</option>
                      <option value="brokerage">National Commercial Brokerage</option>
                      <option value="reinsurer">Reinsurer / Syndicate</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Annual Gross Written Premium (GWP) <span className="text-rose-500">*</span>
                    </label>
                    <select
                      {...register("annualGwp")}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-600 transition"
                    >
                      <option value="under-5m">&lt; $5M Annual GWP</option>
                      <option value="5m-25m">$5M - $25M Annual GWP</option>
                      <option value="25m-100m">$25M - $100M Annual GWP</option>
                      <option value="over-100m">&gt; $100M+ Enterprise GWP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Core System <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("currentCore")}
                      placeholder="e.g. AS400, Guidewire, Manual Excel"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                        errors.currentCore ? "border-rose-300" : "border-slate-200 focus:border-blue-600"
                      }`}
                    />
                    {errors.currentCore && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.currentCore.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Implementation Timeframe
                  </label>
                  <select
                    {...register("timeframe")}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-600 transition"
                  >
                    <option value="q1">Q1 Urgent (Within 90 Days)</option>
                    <option value="q2">Q2 Target (Within 6 Months)</option>
                    <option value="q3-q4">Next Annual Planning Cycle</option>
                    <option value="evaluating">Formal RFI / RFP Process</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Lines of Business & Program Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Specify target lines of business (e.g. Commercial Fleet, Cyber, GL), number of states, and key integrations needed..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none transition ${
                      errors.message ? "border-rose-300" : "border-slate-200 focus:border-blue-600"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                      <span>Transmitting Enterprise RFQ...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Transmit Formal RFQ to Underwriting Solutions</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
          Implementation & Data Migration Questions
        </h3>
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              How does Insurix handle historical policy and claims data migration?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We provide automated ETL pipelines that map historical AS400, CSV, and SQL policy records into our standard data model with checksum verification and actuarial balance verification.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-slate-900 text-sm mb-1">
              Can we run our existing proprietary rating tables in Insurix?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Yes. Our dynamic rating engine supports custom multi-factor actuarial lookup tables, territory multipliers, and custom loss-cost algorithms in addition to standard ISO / Verisk circular feeds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
