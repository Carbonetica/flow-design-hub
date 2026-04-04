import { DashboardLayout } from "@/components/DashboardLayout";
import { BuyerSidebar } from "@/components/sidebars/BuyerSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BarChart3 } from "lucide-react";

const reports = [
  { title: "CSRD Carbon Offset Report 2024", type: "CSRD Compliance", date: "2024-08-01", status: "Ready" },
  { title: "Portfolio Summary Q2 2024", type: "Portfolio Report", date: "2024-07-01", status: "Ready" },
  { title: "ESG Disclosure Bundle 2023", type: "ESG Report", date: "2024-01-15", status: "Ready" },
];

const BuyerReports = () => (
  <DashboardLayout sidebar={<BuyerSidebar />}>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Reports</h1><p className="text-muted-foreground">CSRD compliance and portfolio reports</p></div>
        <Button className="gap-2"><BarChart3 className="h-4 w-4" /> Generate Report</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report) => (
          <Card key={report.title} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{report.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{report.type}</p>
              <p className="text-xs text-muted-foreground mb-4">{report.date}</p>
              <Button variant="outline" size="sm" className="w-full gap-1"><Download className="h-3 w-3" /> Download</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default BuyerReports;
