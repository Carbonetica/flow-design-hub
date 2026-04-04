import { DashboardLayout } from "@/components/DashboardLayout";
import { AdminSidebar } from "@/components/sidebars/AdminSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { kybReviews } from "@/data/mockData";

const AdminKyb = () => (
  <DashboardLayout sidebar={<AdminSidebar />}>
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">KYB/AML Queue</h1><p className="text-muted-foreground">Review pending organization verifications</p></div>
      <Card><CardContent className="p-0">
        <Table><TableHeader><TableRow><TableHead>Organization</TableHead><TableHead>Type</TableHead><TableHead>Country</TableHead><TableHead>Risk</TableHead><TableHead>Watchlist Hits</TableHead><TableHead>Submitted</TableHead><TableHead>Status</TableHead><TableHead></TableHead></TableRow></TableHeader>
          <TableBody>{kybReviews.map(k=>(<TableRow key={k.id}><TableCell className="font-medium">{k.organizationName}</TableCell><TableCell>{k.type}</TableCell><TableCell>{k.country}</TableCell><TableCell><StatusBadge status={k.riskLevel}/></TableCell><TableCell>{k.watchlistHits}</TableCell><TableCell>{k.submittedAt}</TableCell><TableCell><StatusBadge status={k.status}/></TableCell><TableCell><Button variant="outline" size="sm">Review</Button></TableCell></TableRow>))}</TableBody></Table>
      </CardContent></Card>
    </div>
  </DashboardLayout>
);
export default AdminKyb;
