import { DashboardLayout } from "@/components/DashboardLayout";
import { BuyerSidebar } from "@/components/sidebars/BuyerSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { retirements } from "@/data/mockData";
import { Plus, Download, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const BuyerRetirements = () => (
  <DashboardLayout sidebar={<BuyerSidebar />}>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Retirements</h1><p className="text-muted-foreground">Retire credits and manage certificates</p></div>
        <Dialog>
          <DialogTrigger asChild><Button className="gap-2"><Plus className="h-4 w-4" /> Retire Credits</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Retire Credits</DialogTitle></DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2"><Label>Credit Batch</Label><Select><SelectTrigger><SelectValue placeholder="Select batch" /></SelectTrigger><SelectContent><SelectItem value="cb-1">VCS-001-2024 (50,000)</SelectItem><SelectItem value="cb-5">GS-004-2024 (30,000)</SelectItem></SelectContent></Select></div>
              <div className="space-y-2"><Label>Quantity</Label><Input type="number" placeholder="10000" /></div>
              <div className="space-y-2"><Label>Beneficiary</Label><Input placeholder="Organization name" /></div>
              <div className="space-y-2"><Label>Reporting Year</Label><Select><SelectTrigger><SelectValue placeholder="Select year" /></SelectTrigger><SelectContent><SelectItem value="2024">2024</SelectItem><SelectItem value="2023">2023</SelectItem></SelectContent></Select></div>
              <div className="space-y-2"><Label>Reason</Label><Textarea placeholder="Scope 1 offset, CSRD compliance, etc." /></div>
              <Button className="w-full">Submit Retirement</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow><TableHead>ID</TableHead><TableHead>Project</TableHead><TableHead>Quantity</TableHead><TableHead>Beneficiary</TableHead><TableHead>Year</TableHead><TableHead>Date</TableHead><TableHead>Certificate</TableHead></TableRow></TableHeader>
          <TableBody>
            {retirements.map((ret) => (
              <TableRow key={ret.id}>
                <TableCell className="font-mono text-sm">{ret.id}</TableCell>
                <TableCell className="font-medium">{ret.projectName}</TableCell>
                <TableCell>{ret.quantity.toLocaleString()}</TableCell>
                <TableCell>{ret.beneficiary}</TableCell>
                <TableCell>{ret.reportingYear}</TableCell>
                <TableCell>{ret.retiredAt}</TableCell>
                <TableCell><Button variant="ghost" size="sm" className="gap-1"><Download className="h-3 w-3" /> PDF</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  </DashboardLayout>
);

export default BuyerRetirements;
