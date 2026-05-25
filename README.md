# CarbonStack

**The infrastructure layer the carbon market has been waiting for.**

Carbon credits shouldn't require spreadsheets, email chains, and six-month verification cycles. CarbonStack replaces the fragmented mess with one platform that moves credits from forest floor to corporate balance sheet — fast, transparent, and audit-ready.

---

## The Problem

The voluntary carbon market is a $1.7B industry running on manual processes. Project developers juggle disconnected tools. Buyers can't trace provenance. Verifiers drown in unstructured data. Registries lack real-time visibility.

Everyone loses time. Everyone loses trust.

## The Solution

CarbonStack unifies the entire carbon credit lifecycle into a single platform with role-based access for every participant:

| Role | What They Get |
|------|---------------|
| **Project Developers** | Onboarding wizards, automated MRV, credit issuance, marketplace listing |
| **Corporate Buyers** | Searchable marketplace, provenance tracking, one-click retirement, ESG reporting |
| **Verifiers (VVBs)** | Structured audit packages, finding logs, digital sign-off workflows |
| **Registry Admins** | KYB/AML queues, dispute resolution, Article 6 tracking, full audit trails |

## Why CarbonStack Wins

- **60% faster verification** — Structured data packages replace back-and-forth emails
- **Full provenance chain** — Every credit traceable from baseline to retirement
- **Article 6 ready** — Corresponding adjustment tracking built in from day one
- **CSRD-aligned reporting** — Buyers get compliance-ready documentation out of the box

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 · TypeScript · Vite 5 |
| UI System | Tailwind CSS · shadcn/ui (Radix primitives) |
| State | TanStack React Query |
| Forms | React Hook Form · Zod validation |
| Charts | Recharts |
| Routing | React Router v6 |
| Testing | Vitest · Testing Library · Playwright |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:8080` — pick a role and explore.

## Project Structure

```
src/
├── components/          # Shared UI + role-specific sidebars
│   ├── ui/              # shadcn/ui primitives
│   └── sidebars/        # Admin, Buyer, Developer, Verifier nav
├── contexts/            # Auth context provider
├── data/                # Mock data (structured for backend migration)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
└── pages/
    ├── admin/           # Registry & compliance console
    ├── buyer/           # Corporate buyer portal
    ├── developer/       # Project developer dashboard
    └── verifier/        # VVB verification portal
```

## Platform Modules

### Developer Dashboard
Project onboarding (multi-step wizard) · MRV monitoring · Credit lifecycle management · Document vault · API key management

### Buyer Console
Advanced marketplace search (20+ filter facets) · Portfolio analytics · Retirement workflows · Certificate generation · CSRD reporting

### Verifier Portal
Structured audit packages · Side-by-side data review · Clarification threads · Finding & non-conformity logging · Digital verification sign-off

### Admin Console
KYB/AML review queues · Dispute management (Kanban) · Platform-wide audit trail · Article 6 corresponding adjustments · Compliance document library

---

## Scripts

```bash
npm run dev          # Development server (port 8080)
npm run build        # Production build
npm run lint         # ESLint
npm run test         # Unit tests (Vitest)
npx playwright test  # E2E tests
```

## Roadmap

- [ ] Supabase backend integration
- [ ] Stripe payment processing for credit purchases
- [ ] Mapbox integration for project boundary visualization
- [ ] Real satellite MRV data pipeline
- [ ] Multi-registry sync (Verra, Gold Standard, ACR, CAR)

---

**CarbonStack** — Move carbon credits at the speed of software.
