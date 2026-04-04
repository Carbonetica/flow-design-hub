
# CarbonStack — Complete Frontend Build Plan

## Design System
- **Theme**: Green/sustainability palette — deep forest greens (#1B4332, #2D6A4F), moss (#52B788), sage accents (#95D5B2), warm cream backgrounds (#FEFAE0), earth browns for secondary elements
- **Typography**: Clean, modern — Inter or system fonts with strong hierarchy
- **Components**: Cards with subtle shadows, rounded corners, nature-inspired iconography (leaves, trees, globe)
- **Layout**: Sidebar navigation for dashboards, responsive across all breakpoints

## 1. Landing/Marketing Page
- **Hero section**: Bold headline "The Stripe for Carbon Credits" with animated earth/carbon visualization, CTA buttons for developers and buyers
- **Problem/Solution section**: Visual comparison of fragmented manual workflow vs CarbonStack's unified platform
- **Platform architecture visual**: Interactive 5-layer diagram (Onboarding → MRV → Issuance → Marketplace → Compliance)
- **Customer segments section**: Cards for Project Developers, Corporate Buyers, VVBs, Marketplace Operators
- **Pricing page**: 3-tier table (Starter $299/mo, Professional $999/mo, Enterprise custom)
- **Features breakdown**: Expandable sections for each module with icons and descriptions
- **Stats/market section**: Key figures ($1.7B market, 25% CAGR, 60% cost reduction)
- **Footer**: Links, newsletter signup, regulatory positioning statement

## 2. Developer Dashboard (Project Developers, NGOs, Consultants)
- **Sidebar navigation**: Projects, MRV Tasks, Credits, Documents, Verifiers, API Keys, Settings
- **Dashboard overview**: Project portfolio cards with status indicators, credit balance summary (issued/listed/sold/retired), active MRV tasks, recent activity feed
- **Project Onboarding flow** (multi-step wizard):
  - Step 1: Account/KYB info collection form
  - Step 2: Project type selection (REDD+, ARR, Soil Carbon, Methane, Cookstoves)
  - Step 3: Methodology eligibility wizard — questionnaire that narrows to 2-4 eligible methodologies
  - Step 4: GeoJSON boundary upload/map drawing tool (Mapbox placeholder)
  - Step 5: Baseline data entry forms (land use history, activity data)
  - Step 6: Project Description auto-generation preview
  - Step 7: Document upload & review
- **Project detail page**: Tabs for Overview, MRV Data, Credits, Documents, Verifier Communication, Audit Trail
- **MRV module**:
  - Monitoring plan setup form (parameters, frequency, data sources)
  - Field data collection form (GPS-tagged entries, photo upload)
  - Satellite monitoring status dashboard with timeline visualization
  - Calculation engine results display (tCO2e figures, uncertainty ranges)
  - Monitoring report generator with preview
- **Credit management**: Credit batch table with lifecycle states (Draft→Validated→Issued→Listed→Sold→Retired), serial numbers, buffer deduction details
- **Issuance request workflow**: Form to trigger issuance, pre-issuance duplicate check results, buffer calculation display, registry submission status tracker
- **Marketplace listing creator**: Form for price, quantity, lot size, sale terms, co-benefit labels
- **Document vault**: File manager with version history, e-signature status, categorized folders
- **VVB communication**: Threaded conversation view with file attachments and clarification request tracking
- **API Keys page**: Key management, webhook configuration, usage stats
- **Settings**: Organization profile, team members/roles, billing, notifications

## 3. Corporate Buyer Console
- **Sidebar navigation**: Portfolio, Marketplace, Orders, Retirements, Reports, API Keys, Settings
- **Portfolio dashboard**: Credit holdings by type/vintage/geography with donut/bar charts, total retired vs held, upcoming retirement schedule
- **Marketplace search & discovery**:
  - Advanced search with 20+ filter facets (project type, geography, vintage, standard, CCP label, price range, methodology, co-benefits)
  - Credit listing cards with quality badges, project photos, key metadata
  - Listing detail page with full project provenance, MRV data summary, risk score, "credit passport"
- **Order flow**:
  - Spot purchase checkout with Stripe payment placeholder
  - Order confirmation with escrow status
  - Order history table with status tracking
- **Retirement workflow**:
  - Retirement instruction form (beneficiary name, reporting year, reason)
  - Retirement status tracker
  - Certificate library — view/download retirement certificates (PDF preview)
  - CSRD/ESG documentation bundle section (placeholder for Phase 2)
- **Budget tracking**: Spend by category, projected vs actual, export capabilities
- **Reports page**: CSRD compliance reporting, portfolio summary exports

## 4. Verifier Portal (VVB)
- **Sidebar navigation**: Assigned Projects, Audit Queue, Completed, Settings
- **Project queue**: Table of assigned projects with verification stage, deadline, priority
- **Structured audit package viewer**:
  - Tabbed view: Data Tables, Satellite Exports, Sensor Logs, Field Photos, Calculations
  - Side-by-side comparison view for data vs methodology requirements
  - Uncertainty calculation display
- **Clarification request workflow**: Create/respond to clarification threads with file attachments, status tracking (open/responded/resolved)
- **Finding & non-conformity logging**: Form to log findings with severity levels, corrective action requirements
- **Verification report upload**: Drag-and-drop upload with digital signature placeholder
- **Audit completion dashboard**: Summary of all reviewed items, sign-off checklist

## 5. Registry & Compliance Admin Console
- **Registry account dashboard**: Balance sync status across Verra/Gold Standard/ACR/CAR, credit serial reconciliation table with discrepancy alerts
- **KYB/AML queue**: Pending reviews, watchlist screening results, approval workflow
- **Dispute management board**: Kanban-style board (Submitted → Under Review → Resolved), evidence viewer, resolution timeline
- **Audit trail query interface**: Searchable/filterable log of all platform actions with export
- **Corresponding adjustment tracker**: Per-project/vintage Article 6 status display
- **Compliance document library**: Categorized regulatory docs, methodology guidance

## 6. Shared Components & Utilities
- **Auth pages**: Login, signup, forgot password (UI only, mock auth flow)
- **Role-based navigation**: Automatically show correct dashboard based on user role selector
- **Notification center**: Bell icon with dropdown showing platform events
- **Global search**: Command palette (Cmd+K) searching across projects, credits, organizations
- **Status badges**: Consistent lifecycle state indicators across all modules
- **Data tables**: Sortable, filterable, paginated tables with export (CSV/JSON)
- **Chart components**: Donut, bar, line, and area charts for dashboards
- **Map component**: Placeholder map view for project boundaries
- **File upload**: Drag-and-drop with progress, supporting multiple file types
- **Form validation**: Zod schemas for all forms with proper error states
- **Empty states**: Illustrated empty states for each section
- **Loading skeletons**: Skeleton loaders for all data-driven views
- **Mock data layer**: Realistic sample data for 5 projects, 3 organizations, credit batches, transactions — structured for easy Supabase migration

## Routing Structure
- `/` — Landing page
- `/login`, `/signup` — Auth
- `/developer/*` — Developer Dashboard routes
- `/buyer/*` — Corporate Buyer Console routes  
- `/verifier/*` — Verifier Portal routes
- `/admin/*` — Registry & Compliance Admin routes
