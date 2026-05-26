import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  ArrowRight,
  Shield,
  BarChart3,
  Globe2,
  Users,
  Zap,
  CheckCircle2,
  TreePine,
  Building2,
  FileCheck,
  ChevronRight,
  Layers,
  TrendingUp,
  Lock,
  Sparkles,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[hsl(var(--forest))] to-[hsl(var(--forest-light))] flex items-center justify-center shadow-sm">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">CarbonStack</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Platform</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            {/* <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a> */}
            <a href="#roles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">For Teams</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="rounded-full px-5">
                Start Free <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-[hsl(var(--moss))]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[hsl(var(--sage))]/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--moss))]/10 border border-[hsl(var(--moss))]/20 mb-8">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--forest-light))]" />
              <span className="text-sm font-medium text-[hsl(var(--forest-light))]">Trusted by 100+ carbon market participants</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Carbon credits,
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--forest))] via-[hsl(var(--forest-light))] to-[hsl(var(--moss))] bg-clip-text text-transparent">
                moved at software speed
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              The full-stack platform for originating, verifying, trading, and retiring carbon credits.
              Cut issuance time from 18 months to 6. Reduce costs by 60%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/signup">
                <Button size="lg" className="rounded-full px-8 h-12 text-base gap-2 shadow-lg shadow-primary/20">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/developer">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base gap-2">
                  Explore Demo
                </Button>
              </Link>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { value: "$1.7B", label: "Market size" },
                { value: "25%", label: "Annual growth" },
                { value: "60%", label: "Cost savings" },
                { value: "3×", label: "Faster issuance" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-24 px-6 bg-[hsl(var(--cream))]/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider">The Problem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Carbon markets run on duct tape</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Spreadsheets, email chains, 18-month timelines, and 30-40% intermediary fees.
              The market needs infrastructure, not more middlemen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-destructive/15 bg-white p-8">
              <div className="text-sm font-semibold text-destructive mb-5 uppercase tracking-wide">Before CarbonStack</div>
              <div className="space-y-4">
                {[
                  "18+ months from project start to credit issuance",
                  "Manual MRV with consultants and spreadsheets",
                  "Fragmented registries, no interoperability",
                  "Opaque pricing with 30-40% intermediary fees",
                  "Paper-based verification and compliance",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                      <span className="text-destructive text-xs">✕</span>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[hsl(var(--moss))]/30 bg-white p-8">
              <div className="text-sm font-semibold text-[hsl(var(--forest-light))] mb-5 uppercase tracking-wide">With CarbonStack</div>
              <div className="space-y-4">
                {[
                  "6 months average time to credit issuance",
                  "Automated MRV with satellite & IoT integration",
                  "Unified multi-registry platform",
                  "Transparent pricing, 8-12% platform fee",
                  "Digital verification with structured audit packages",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-[hsl(var(--moss))]/15 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3 w-3 text-[hsl(var(--forest-light))]" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works — Pipeline */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Five layers. One platform.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From project onboarding to retirement certificate — every step automated and auditable.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line connector */}
            <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[hsl(var(--moss))]/60 via-[hsl(var(--forest-light))]/40 to-[hsl(var(--moss))]/60 hidden md:block" />

            <div className="space-y-6">
              {[
                { step: "01", title: "Onboard", desc: "KYB verification, methodology selection, GeoJSON boundary mapping, baseline data entry", icon: Globe2 },
                { step: "02", title: "Monitor", desc: "Satellite imagery, IoT sensors, field data collection, automated tCO2e calculations", icon: BarChart3 },
                { step: "03", title: "Verify", desc: "Structured audit packages, VVB review workflows, finding management, digital sign-off", icon: FileCheck },
                { step: "04", title: "Issue", desc: "Buffer deductions, duplicate detection, multi-registry submission, serial number assignment", icon: Zap },
                { step: "05", title: "Trade & Retire", desc: "Marketplace listing, spot trading, escrow settlement, retirement certificates, CSRD reporting", icon: TrendingUp },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5 md:gap-6 group">
                  <div className="relative z-10 h-12 w-12 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--forest))] to-[hsl(var(--forest-light))] flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <item.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="pt-1 md:pt-3">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-muted-foreground/60">{item.step}</span>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="platform" className="py-24 px-6 bg-[hsl(var(--forest))]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white/90 border-white/20 text-xs uppercase tracking-wider">Platform</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Built for the entire carbon lifecycle</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Comprehensive tooling for every participant in the voluntary carbon market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: TreePine, title: "Project Management", desc: "Multi-step onboarding, methodology eligibility wizard, GeoJSON mapping, baseline data collection" },
              { icon: BarChart3, title: "Automated MRV", desc: "Satellite monitoring, IoT sensor integration, automated calculations with uncertainty ranges" },
              { icon: Shield, title: "Verification Engine", desc: "Structured audit packages, clarification threads, finding logs, digital verification sign-off" },
              { icon: Zap, title: "Credit Issuance", desc: "Buffer pool management, duplicate detection, multi-registry submission, serial tracking" },
              { icon: Globe2, title: "Marketplace", desc: "20+ search filters, CCP quality labels, credit passports, spot and forward trading" },
              { icon: Lock, title: "Compliance & Reporting", desc: "One-click retirement, CSRD documentation, Article 6 adjustments, full audit trails" },
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[hsl(var(--moss))]/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-[hsl(var(--moss))]" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based portals */}
      <section id="roles" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider">For Teams</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">One platform, four portals</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every stakeholder gets a purpose-built workspace with the tools they need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: TreePine,
                title: "Project Developers",
                desc: "Onboard projects, manage MRV pipelines, issue credits, and list on the marketplace — all from one dashboard.",
                link: "/developer",
                color: "from-emerald-500/10 to-green-500/5",
              },
              {
                icon: Building2,
                title: "Corporate Buyers",
                desc: "Browse verified credits, purchase with full provenance, retire for ESG reporting, and generate CSRD documentation.",
                link: "/buyer",
                color: "from-blue-500/10 to-cyan-500/5",
              },
              {
                icon: FileCheck,
                title: "Verifiers (VVBs)",
                desc: "Review structured audit packages, log findings, manage clarification threads, and submit verification reports digitally.",
                link: "/verifier",
                color: "from-amber-500/10 to-orange-500/5",
              },
              {
                icon: Users,
                title: "Registry & Admin",
                desc: "KYB/AML review queues, dispute management, platform-wide audit trails, and Article 6 corresponding adjustments.",
                link: "/admin",
                color: "from-purple-500/10 to-violet-500/5",
              },
            ].map((role) => (
              <Link to={role.link} key={role.title} className="group">
                <div className={`rounded-2xl border p-7 h-full bg-gradient-to-br ${role.color} hover:shadow-md transition-all`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-11 w-11 rounded-xl bg-white border flex items-center justify-center shadow-sm">
                      <role.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — commented out for now
      <section id="pricing" className="py-24 px-6 bg-[hsl(var(--cream))]/50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xs uppercase tracking-wider">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start free. Scale when ready.</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No hidden fees. No per-credit charges on Starter. Transparent pricing that grows with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Starter",
                price: "$299",
                period: "/mo",
                desc: "For pilot projects and small developers",
                features: ["Up to 5 projects", "Basic MRV tools", "Single registry", "Email support", "1,000 API calls/mo"],
                cta: "Start Free Trial",
                popular: false,
              },
              {
                name: "Professional",
                price: "$999",
                period: "/mo",
                desc: "For scaling organizations",
                features: ["Unlimited projects", "Satellite MRV", "Multi-registry", "Priority support", "50K API calls/mo", "VVB portal", "Custom reports"],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For large buyers and marketplace operators",
                features: ["White-label platform", "Dedicated infra", "SLA guarantees", "Custom integrations", "Unlimited API", "Account manager", "Article 6 compliance"],
                cta: "Talk to Sales",
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-7 bg-white relative ${
                  plan.popular ? "border-[hsl(var(--forest))] shadow-xl ring-1 ring-[hsl(var(--forest))]/10 scale-[1.02]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[hsl(var(--forest))] text-white shadow-sm">Most Popular</Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-semibold text-lg">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[hsl(var(--moss))] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/signup" className="block">
                  <Button
                    className={`w-full rounded-full ${plan.popular ? "" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="rounded-3xl bg-gradient-to-br from-[hsl(var(--forest))] to-[hsl(var(--forest-light))] p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to move carbon at software speed?
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Join the organizations already using CarbonStack to cut costs, accelerate issuance, and build trust in every credit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base gap-2 shadow-lg">
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="ghost" className="rounded-full px-8 h-12 text-base text-white hover:bg-white/10 border border-white/20">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[hsl(var(--forest))] to-[hsl(var(--forest-light))] flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg">CarbonStack</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-stack infrastructure for the voluntary carbon market.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "API Docs", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { title: "Resources", links: ["Documentation", "Guides", "Webinars", "Support"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-semibold text-sm mb-4">{col.title}</div>
                <div className="space-y-2.5">
                  {col.links.map((l) => (
                    <div key={l} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t gap-4">
            <p className="text-xs text-muted-foreground">© 2025 CarbonStack. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Aligned with Article 6 of the Paris Agreement</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
