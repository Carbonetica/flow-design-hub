import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ArrowRight, ArrowLeft, TreePine, Sprout, Wheat, Flame, CookingPot, Upload } from "lucide-react";

const steps = ["Account & KYB", "Project Type", "Methodology", "Boundary", "Baseline Data", "Description", "Documents"];

const projectTypes = [
  { value: "REDD+", icon: TreePine, label: "REDD+", desc: "Reducing Emissions from Deforestation and Forest Degradation" },
  { value: "ARR", icon: Sprout, label: "ARR", desc: "Afforestation, Reforestation, and Revegetation" },
  { value: "Soil Carbon", icon: Wheat, label: "Soil Carbon", desc: "Agricultural soil carbon sequestration" },
  { value: "Methane", icon: Flame, label: "Methane Reduction", desc: "Methane capture and avoidance projects" },
  { value: "Cookstoves", icon: CookingPot, label: "Cookstoves", desc: "Improved cookstove distribution projects" },
];

const NewProject = () => {
  const [step, setStep] = useState(0);
  const [projectType, setProjectType] = useState("");
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <DashboardLayout sidebar={<DeveloperSidebar />}>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold">New Project</h1>
          <p className="text-muted-foreground">Step {step + 1} of {steps.length}: {steps[step]}</p>
        </div>

        <Progress value={progress} className="h-2" />

        <div className="flex gap-2 flex-wrap">
          {steps.map((s, i) => (
            <button key={s} onClick={() => i <= step && setStep(i)} className={`text-xs px-3 py-1 rounded-full transition-colors ${i === step ? "bg-primary text-primary-foreground" : i < step ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
              {i < step && <CheckCircle2 className="inline h-3 w-3 mr-1" />}{s}
            </button>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            {step === 0 && (
              <div className="space-y-4">
                <CardHeader className="p-0 pb-4"><CardTitle>Account & KYB Information</CardTitle><CardDescription>Tell us about your organization</CardDescription></CardHeader>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Organization Name</Label><Input placeholder="GreenForest Solutions" /></div>
                  <div className="space-y-2"><Label>Registration Number</Label><Input placeholder="12345678" /></div>
                  <div className="space-y-2"><Label>Country of Registration</Label><Select><SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger><SelectContent><SelectItem value="br">Brazil</SelectItem><SelectItem value="ke">Kenya</SelectItem><SelectItem value="us">United States</SelectItem><SelectItem value="id">Indonesia</SelectItem></SelectContent></Select></div>
                  <div className="space-y-2"><Label>Contact Email</Label><Input type="email" placeholder="contact@company.com" /></div>
                </div>
                <div className="space-y-2"><Label>Organization Description</Label><Textarea placeholder="Brief description of your organization..." /></div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <CardHeader className="p-0 pb-4"><CardTitle>Project Type</CardTitle><CardDescription>Select the type of carbon credit project</CardDescription></CardHeader>
                <RadioGroup value={projectType} onValueChange={setProjectType} className="space-y-3">
                  {projectTypes.map((type) => (
                    <label key={type.value} className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${projectType === type.value ? "border-primary bg-primary/5" : "hover:bg-muted/50"}`}>
                      <RadioGroupItem value={type.value} className="mt-1" />
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <type.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div><div className="font-medium">{type.label}</div><div className="text-sm text-muted-foreground">{type.desc}</div></div>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <CardHeader className="p-0 pb-4"><CardTitle>Methodology Selection</CardTitle><CardDescription>Answer questions to find eligible methodologies</CardDescription></CardHeader>
                <div className="space-y-4">
                  <div className="space-y-2"><Label>What is the primary activity?</Label><Select><SelectTrigger><SelectValue placeholder="Select activity" /></SelectTrigger><SelectContent><SelectItem value="avoid">Avoided deforestation</SelectItem><SelectItem value="reforest">Reforestation</SelectItem><SelectItem value="restore">Ecosystem restoration</SelectItem></SelectContent></Select></div>
                  <div className="space-y-2"><Label>Project area (hectares)</Label><Input type="number" placeholder="50000" /></div>
                  <div className="space-y-2"><Label>Crediting period (years)</Label><Select><SelectTrigger><SelectValue placeholder="Select period" /></SelectTrigger><SelectContent><SelectItem value="10">10 years</SelectItem><SelectItem value="20">20 years</SelectItem><SelectItem value="30">30 years</SelectItem></SelectContent></Select></div>
                  <Card className="bg-muted/30"><CardContent className="p-4"><CardTitle className="text-sm mb-2">Eligible Methodologies</CardTitle><div className="space-y-2 text-sm">{["VM0015 - Avoided Unplanned Deforestation", "VM0007 - REDD+ Methodology Framework", "VM0009 - Avoided Deforestation"].map((m) => (<div key={m} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" />{m}</div>))}</div></CardContent></Card>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <CardHeader className="p-0 pb-4"><CardTitle>Project Boundary</CardTitle><CardDescription>Upload GeoJSON or draw the project boundary</CardDescription></CardHeader>
                <div className="border-2 border-dashed rounded-xl p-12 text-center bg-muted/20">
                  <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
                  <p className="font-medium mb-1">Upload GeoJSON file</p>
                  <p className="text-sm text-muted-foreground mb-4">Or drag and drop your boundary file here</p>
                  <Button variant="outline">Choose File</Button>
                </div>
                <div className="h-64 rounded-xl bg-muted/30 border flex items-center justify-center text-muted-foreground">
                  <div className="text-center"><MapPlaceholder /><p className="text-sm mt-2">Map preview will appear here</p></div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <CardHeader className="p-0 pb-4"><CardTitle>Baseline Data</CardTitle><CardDescription>Enter baseline data for your project</CardDescription></CardHeader>
                <div className="space-y-4">
                  <div className="space-y-2"><Label>Historical land use</Label><Select><SelectTrigger><SelectValue placeholder="Select land use type" /></SelectTrigger><SelectContent><SelectItem value="forest">Primary Forest</SelectItem><SelectItem value="secondary">Secondary Forest</SelectItem><SelectItem value="degraded">Degraded Land</SelectItem><SelectItem value="agricultural">Agricultural Land</SelectItem></SelectContent></Select></div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Above-ground biomass (tC/ha)</Label><Input type="number" placeholder="150" /></div>
                    <div className="space-y-2"><Label>Below-ground biomass (tC/ha)</Label><Input type="number" placeholder="45" /></div>
                    <div className="space-y-2"><Label>Historical deforestation rate (%/yr)</Label><Input type="number" placeholder="1.2" /></div>
                    <div className="space-y-2"><Label>Reference region area (ha)</Label><Input type="number" placeholder="200000" /></div>
                  </div>
                  <div className="space-y-2"><Label>Baseline scenario description</Label><Textarea placeholder="Describe what would happen without the project intervention..." rows={4} /></div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <CardHeader className="p-0 pb-4"><CardTitle>Project Description</CardTitle><CardDescription>Auto-generated from your inputs — review and edit</CardDescription></CardHeader>
                <Card className="bg-muted/20">
                  <CardContent className="p-4 space-y-3 text-sm">
                    <h4 className="font-semibold">Amazon Rainforest Protection Project</h4>
                    <p className="text-muted-foreground">This project aims to avoid unplanned deforestation in a 50,000-hectare area of primary Amazon rainforest in the Amazonas state of Brazil. Using methodology VM0015, the project will protect biodiversity-rich forest ecosystems while generating verified carbon credits.</p>
                    <p className="text-muted-foreground">The baseline scenario projects continued deforestation at a historical rate of 1.2% per year, driven by agricultural expansion and logging activities. The project intervention will implement community-based forest management, patrol systems, and alternative livelihood programs.</p>
                  </CardContent>
                </Card>
                <div className="space-y-2"><Label>Edit Project Description</Label><Textarea rows={8} placeholder="Edit the auto-generated description..." /></div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <CardHeader className="p-0 pb-4"><CardTitle>Document Upload</CardTitle><CardDescription>Upload supporting documents for your project</CardDescription></CardHeader>
                {["Project Design Document (PDD)", "Land title / ownership proof", "Stakeholder consultation report", "Environmental Impact Assessment", "Financial projections"].map((doc) => (
                  <div key={doc} className="flex items-center justify-between p-3 rounded-lg border">
                    <span className="text-sm font-medium">{doc}</span>
                    <Button variant="outline" size="sm"><Upload className="h-3 w-3 mr-1" /> Upload</Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Previous
          </Button>
          <Button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} className="gap-2">
            {step === steps.length - 1 ? "Submit Project" : "Next"} <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

const MapPlaceholder = () => (
  <svg className="h-12 w-12 mx-auto text-muted-foreground/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 12h18M12 3v18M7 7l2 2M15 7l2 2M7 15l2 2M15 15l2 2" />
  </svg>
);

export default NewProject;
