import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { creditBatches } from "@/data/mockData";

const DevCredits = () => (
  <DashboardLayout sidebar={<DeveloperSidebar />}>
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Credits</h1><p className="text-muted-foreground">Manage credit batches and lifecycle</p></div>
      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow><TableHead>Serial Range</TableHead><TableHead>Project</TableHead><TableHead>Quantity</TableHead><TableHead>Vintage</TableHead><TableHead>Buffer</TableHead><TableHead>Price</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {creditBatches.map((batch) => (
              <TableRow key={batch.id}>
                <TableCell className="font-mono text-xs">{batch.serialStart.slice(0, 20)}...</TableCell>
                <TableCell>{batch.projectId}</TableCell>
                <TableCell>{batch.quantity.toLocaleString()}</TableCell>
                <TableCell>{batch.vintage}</TableCell>
                <TableCell>{batch.bufferDeduction}%</TableCell>
                <TableCell>{batch.pricePerCredit ? `$${batch.pricePerCredit}` : "—"}</TableCell>
                <TableCell><StatusBadge status={batch.status} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  </DashboardLayout>
);

export default DevCredits;
