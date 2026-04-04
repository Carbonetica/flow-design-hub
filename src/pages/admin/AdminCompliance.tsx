import { DashboardLayout } from "@/components/DashboardLayout";
import { AdminSidebar } from "@/components/sidebars/AdminSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const docs = [
  { title: "Verra VCS Standard v4.5", category: "Standards", date: "2024-01" },
  { title: "Gold Standard Impact Quantification", category: "Methodology", date: "2024-03" },
  { title: "Article 6 Implementation Guide", category: "Regulatory", date: "2024-06" },
  { title: "CSRD Carbon Reporting Template", category: "Compliance", date: "2024-02" },
  { title: "KYB/AML Procedures Manual", category: "Internal", date: "2024-04" },
];

const AdminCompliance = () => (
  <DashboardLayout sidebar={<AdminSidebar />}>
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Compliance Documents</h1><p className="text-muted-foreground">Regulatory documents and methodology guidance</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map(d=>(
          <Card key={d.title} className="hover:shadow-md transition-shadow"><CardContent className="p-6">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"><FileText className="h-5 w-5 text-primary" /></div>
            <h3 className="font-semibold text-sm mb-1">{d.title}</h3>
            <p className="text-xs text-muted-foreground mb-1">{d.category}</p>
            <p className="text-xs text-muted-foreground mb-4">{d.date}</p>
            <Button variant="outline" size="sm" className="w-full gap-1"><Download className="h-3 w-3"/>Download</Button>
          </CardContent></Card>
        ))}
      </div>
    </div>
  </DashboardLayout>
);
export default AdminCompliance;
