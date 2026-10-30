# Insurix — Next.js Insurance Technology Landing Page Application

An enterprise insurance SaaS landing application for modern policy administration, automated First-Notice-of-Loss (FNOL) claims orchestration, and broker management.

## 🚀 Port & Development

This application runs on port **9004**:

```bash
npm install
npm run dev
```

Visit: `http://localhost:9004`

## 📄 Pages Included (4 Fully Designed Pages)

1. **Home / Landing Page (`/`)**:
   - Hero section: "Simplify Insurance. Strengthen Trust."
   - Interactive Insurance Core Dashboard Preview (in-force policies, loss ratio gauge, active claims queue)
   - Dual Stakeholder View Toggle: Carriers & MGAs vs Independent Brokers
   - Commercial underwriting benefits and claims metrics
2. **Solutions (`/solutions`)**:
   - Policy administration core (dynamic rating engine, endorsements, renewals)
   - First-Notice-of-Loss (FNOL) claims automation and fraud anomaly scoring
   - Broker distribution portal with sub-minute quote & bind
   - ACORD form parser and intelligent document processing
3. **Platform & Integrations (`/platform`)**:
   - Interactive 5-Step Claims Orchestration Diagram (FNOL Intake → AI Triage → Damage Appraisal → Adjudication → Settlement)
   - Real-time actuarial combined loss ratio exposure view
   - Certified data partner connectors (Verisk, ISO, LexisNexis, Guidewire, RTP Network)
4. **Enterprise Pricing & RFQ (`/pricing`)**:
   - Gross Written Premium (GWP) volume-tiered pricing
   - Enterprise RFP / RFQ Request Form with React Hook Form + Zod validation

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Deep Navy & Restrained Gold theme)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
