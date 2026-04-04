import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, ArrowRight, Shield, BarChart3, Globe2, Users, Zap, CheckCircle2, TreePine, Building2, Search, FileCheck, ChevronRight, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">CarbonStack</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#segments" className="text-sm text-muted-foreground hover:text-foreground transition-colors">For Teams</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login"><Button variant="ghost" size="sm">Sign In</Button></Link>
            <Link to="/signup"><Button size="sm">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 py-1 px-4 text-sm border-accent text-accent-foreground bg-accent/10">
            🌱 The Future of Carbon Markets
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The <span className="text-accent">Stripe</span> for{" "}
            <span className="text-accent">Carbon Credits</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            End-to-end infrastructure for carbon credit origination, verification, trading, and retirement.
            Reduce costs by 60% and accelerate issuance from 18 months to 6.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="gap-2 px-8">
                Start Building <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/developer">
              <Button variant="outline" size="lg" className="gap-2 px-8">
                View Demo Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$1.7B", label: "Carbon Market Size" },
              { value: "25%", label: "Annual Growth (CAGR)" },
              { value: "60%", label: "Cost Reduction" },
              { value: "6 mo", label: "Time to Issuance" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Carbon Markets Are Broken</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The voluntary carbon market suffers from fragmentation, opacity, and painfully slow processes. CarbonStack fixes this.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-lg text-destructive">❌ Without CarbonStack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {["18+ months from project to credit issuance", "Manual MRV with spreadsheets & consultants", "Fragmented registries with no interoperability", "Opaque pricing & high intermediary fees (30-40%)", "Paper-based verification & compliance"].map((item) => (
                  <div key={item} className="flex gap-2"><span className="text-destructive shrink-0">✗</span>{item}</div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-success/20 bg-success/5">
              <CardHeader>
                <CardTitle className="text-lg text-success">✓ With CarbonStack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                {["6 months average time to issuance", "Automated MRV with satellite & IoT integration", "Unified multi-registry platform", "Transparent pricing with 8-12% platform fee", "Digital verification with structured audit packages"].map((item) => (
                  <div key={item} className="flex gap-2"><span className="text-success shrink-0">✓</span>{item}</div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">5-Layer Platform Architecture</h2>
            <p className="text-muted-foreground">From project onboarding to compliance — everything in one platform.</p>
          </div>
          <div className="space-y-4">
            {[
              { step: 1, title: "Project Onboarding", desc: "KYB, methodology selection, GeoJSON boundary, baseline data", icon: Globe2, color: "bg-primary" },
              { step: 2, title: "MRV Engine", desc: "Satellite monitoring, IoT sensors, field data, automated calculations", icon: BarChart3, color: "bg-secondary" },
              { step: 3, title: "Issuance & Registry", desc: "Verification workflow, buffer deductions, multi-registry integration", icon: FileCheck, color: "bg-accent" },
              { step: 4, title: "Marketplace", desc: "Credit listing, price discovery, spot trading, escrow settlement", icon: Search, color: "bg-forest-light" },
              { step: 5, title: "Compliance & Reporting", desc: "Retirement, CSRD reporting, Article 6 adjustments, audit trails", icon: Shield, color: "bg-primary" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-5 rounded-xl bg-card border hover:shadow-md transition-shadow">
                <div className={`h-10 w-10 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">LAYER {item.step}</span>
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground">Comprehensive tools for every stakeholder in the carbon market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: TreePine, title: "Project Management", desc: "Multi-step onboarding wizard, methodology eligibility, GeoJSON mapping, baseline data collection" },
              { icon: BarChart3, title: "Automated MRV", desc: "Satellite imagery analysis, IoT sensor integration, automated tCO2e calculations with uncertainty ranges" },
              { icon: Shield, title: "Verification Workflow", desc: "Structured audit packages, VVB communication, finding management, digital sign-off" },
              { icon: Zap, title: "Credit Issuance", desc: "Buffer pool deductions, duplicate detection, multi-registry submission, serial number management" },
              { icon: Globe2, title: "Marketplace", desc: "Advanced search with 20+ filters, CCP labels, credit passports, spot & forward trading" },
              { icon: CheckCircle2, title: "Retirement & Compliance", desc: "One-click retirement, certificate generation, CSRD reporting, Article 6 adjustment tracking" },
            ].map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section id="segments" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Built For Every Stakeholder</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TreePine, title: "Project Developers", desc: "Onboard projects, manage MRV, issue credits, and list on the marketplace.", link: "/developer", cta: "Developer Portal" },
              { icon: Building2, title: "Corporate Buyers", desc: "Browse credits, purchase with confidence, retire for ESG reporting.", link: "/buyer", cta: "Buyer Console" },
              { icon: FileCheck, title: "Verifiers (VVBs)", desc: "Review audit packages, log findings, submit verification reports.", link: "/verifier", cta: "Verifier Portal" },
              { icon: Users, title: "Marketplace Operators", desc: "White-label infrastructure for carbon exchanges and brokerages.", link: "/admin", cta: "Admin Console" },
            ].map((segment) => (
              <Card key={segment.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <segment.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{segment.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{segment.desc}</p>
                  <Link to={segment.link}>
                    <Button variant="outline" size="sm" className="w-full gap-1">
                      {segment.cta} <ChevronRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground">Start small, scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "$299", period: "/mo", desc: "For small developers & pilot projects", features: ["Up to 5 projects", "Basic MRV tools", "Single registry", "Email support", "1,000 API calls/mo"], cta: "Start Free Trial", popular: false },
              { name: "Professional", price: "$999", period: "/mo", desc: "For scaling organizations", features: ["Unlimited projects", "Advanced MRV & satellite", "Multi-registry support", "Priority support", "50,000 API calls/mo", "Custom reporting", "VVB portal access"], cta: "Start Free Trial", popular: true },
              { name: "Enterprise", price: "Custom", period: "", desc: "For large buyers & marketplace operators", features: ["White-label platform", "Dedicated infrastructure", "SLA guarantees", "Custom integrations", "Unlimited API calls", "Account manager", "Article 6 compliance"], cta: "Contact Sales", popular: false },
            ].map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                      {f}
                    </div>
                  ))}
                  <Link to="/signup" className="block pt-4">
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>{plan.cta}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Carbon Markets?</h2>
          <p className="text-primary-foreground/70 mb-8">Join 100+ organizations already using CarbonStack to originate, trade, and retire carbon credits.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup"><Button size="lg" variant="secondary" className="gap-2">Get Started Free <ArrowRight className="h-4 w-4" /></Button></Link>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">Schedule Demo</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">CarbonStack</span>
              </div>
              <p className="text-sm text-muted-foreground">End-to-end carbon credit infrastructure.</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "API Docs", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { title: "Resources", links: ["Documentation", "Guides", "Webinars", "Support"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-semibold text-sm mb-3">{col.title}</div>
                <div className="space-y-2">
                  {col.links.map((l) => (
                    <div key={l} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">{l}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t gap-4">
            <div className="flex items-center gap-4">
              <Input placeholder="Subscribe to newsletter" className="w-64" />
              <Button size="sm"><Mail className="h-4 w-4 mr-1" /> Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">© 2024 CarbonStack. All rights reserved. | Aligned with Article 6 of the Paris Agreement</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
