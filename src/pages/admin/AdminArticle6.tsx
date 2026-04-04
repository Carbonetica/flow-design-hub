import { DashboardLayout } from "@/components/DashboardLayout";
import { AdminSidebar } from "@/components/sidebars/AdminSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { projects } from "@/data/mockData";

const AdminArticle6 = () => (
  <DashboardLayout sidebar={<AdminSidebar />}>
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Article 6 Tracker</h1><p className="text-muted-foreground">Corresponding adjustment status per project</p></div>
      <Card><CardContent className="p-0">
        <Table><TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Country</TableHead><TableHead>Vintage</TableHead><TableHead>CA Status</TableHead><TableHead>LOA</TableHead></TableRow></TableHeader>
          <TableBody>{projects.map(p=>(<TableRow key={p.id}><TableCell className="font-medium">{p.name}</TableCell><TableCell>{p.country}</TableCell><TableCell>{p.vintage}</TableCell><TableCell><StatusBadge status={p.country === "Brazil" ? "Pending" : "Approved"}/></TableCell><TableCell><StatusBadge status={p.country === "Brazil" ? "Pending" : "Completed"}/></TableCell></TableRow>))}</TableBody></Table>
      </CardContent></Card>
    </div>
  </DashboardLayout>
);
export default AdminArticle6;
