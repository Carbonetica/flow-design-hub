import { DashboardLayout } from "@/components/DashboardLayout";
import { AdminSidebar } from "@/components/sidebars/AdminSidebar";
import { StatsCard } from "@/components/StatsCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { kybReviews, disputes } from "@/data/mockData";
import { Database, UserCheck, AlertTriangle, ScrollText } from "lucide-react";

const AdminDashboard = () => (
  <DashboardLayout sidebar={<AdminSidebar />}>
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Registry & Compliance</h1><p className="text-muted-foreground">Platform administration overview</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Registry Accounts" value={4} subtitle="Verra, GS, ACR, CAR" icon={Database} />
        <StatsCard title="Pending KYB" value={kybReviews.filter(k=>k.status==="Pending").length} icon={UserCheck} />
        <StatsCard title="Open Disputes" value={disputes.filter(d=>d.status!=="Resolved").length} icon={AlertTriangle} />
        <StatsCard title="Audit Events" value="12,847" subtitle="Last 30 days" icon={ScrollText} />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card><CardHeader><CardTitle className="text-lg">KYB Queue</CardTitle></CardHeader><CardContent className="p-0">
          <Table><TableHeader><TableRow><TableHead>Organization</TableHead><TableHead>Type</TableHead><TableHead>Risk</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>{kybReviews.slice(0,3).map(k=>(<TableRow key={k.id}><TableCell className="font-medium">{k.organizationName}</TableCell><TableCell>{k.type}</TableCell><TableCell><StatusBadge status={k.riskLevel}/></TableCell><TableCell><StatusBadge status={k.status}/></TableCell></TableRow>))}</TableBody></Table>
        </CardContent></Card>
        <Card><CardHeader><CardTitle className="text-lg">Recent Disputes</CardTitle></CardHeader><CardContent className="p-0">
          <Table><TableHeader><TableRow><TableHead>Title</TableHead><TableHead>Priority</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>{disputes.map(d=>(<TableRow key={d.id}><TableCell className="font-medium">{d.title}</TableCell><TableCell><StatusBadge status={d.priority}/></TableCell><TableCell><StatusBadge status={d.status}/></TableCell></TableRow>))}</TableBody></Table>
        </CardContent></Card>
      </div>
    </div>
  </DashboardLayout>
);
export default AdminDashboard;
