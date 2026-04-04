import { DashboardLayout } from "@/components/DashboardLayout";
import { AdminSidebar } from "@/components/sidebars/AdminSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";

const events = [
  { id: 1, action: "Credit Batch Created", user: "maria@greenforest.com", entity: "cb-1", timestamp: "2024-08-20 14:30:22" },
  { id: 2, action: "KYB Approved", user: "admin@carbonstack.io", entity: "org-3", timestamp: "2024-08-19 10:15:00" },
  { id: 3, action: "Retirement Submitted", user: "james@cleanenergy.com", entity: "ret-1", timestamp: "2024-08-18 09:00:00" },
  { id: 4, action: "Dispute Filed", user: "sarah@verravvb.com", entity: "disp-2", timestamp: "2024-08-18 16:00:00" },
  { id: 5, action: "Project Status Changed", user: "system", entity: "proj-1", timestamp: "2024-08-17 12:00:00" },
];

const AdminAuditTrail = () => (
  <DashboardLayout sidebar={<AdminSidebar />}>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Audit Trail</h1><p className="text-muted-foreground">Platform-wide action log</p></div>
        <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Export</Button>
      </div>
      <div className="relative"><Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" /><Input placeholder="Search actions, users, entities..." className="pl-9" /></div>
      <Card><CardContent className="p-0">
        <Table><TableHeader><TableRow><TableHead>Timestamp</TableHead><TableHead>Action</TableHead><TableHead>User</TableHead><TableHead>Entity</TableHead></TableRow></TableHeader>
          <TableBody>{events.map(e=>(<TableRow key={e.id}><TableCell className="font-mono text-xs">{e.timestamp}</TableCell><TableCell className="font-medium">{e.action}</TableCell><TableCell className="text-sm">{e.user}</TableCell><TableCell className="font-mono text-xs">{e.entity}</TableCell></TableRow>))}</TableBody></Table>
      </CardContent></Card>
    </div>
  </DashboardLayout>
);
export default AdminAuditTrail;
