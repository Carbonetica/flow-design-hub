import { DashboardLayout } from "@/components/DashboardLayout";
import { VerifierSidebar } from "@/components/sidebars/VerifierSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { verificationTasks } from "@/data/mockData";

const VerifierCompleted = () => {
  const completed = verificationTasks.filter((t) => t.status === "Completed");

  return (
    <DashboardLayout sidebar={<VerifierSidebar />}>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-bold">Completed Verifications</h1><p className="text-muted-foreground">Previously completed verification tasks</p></div>
        <Card><CardContent className="p-0">
          <Table>
            <TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Stage</TableHead><TableHead>Findings</TableHead><TableHead>Completed</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {completed.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.projectName}</TableCell>
                  <TableCell>{task.stage}</TableCell>
                  <TableCell>{task.findings.length}</TableCell>
                  <TableCell>{task.deadline}</TableCell>
                  <TableCell><StatusBadge status={task.status} /></TableCell>
                </TableRow>
              ))}
              {completed.length === 0 && <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No completed verifications</TableCell></TableRow>}
            </TableBody>
          </Table>
        </CardContent></Card>
      </div>
    </DashboardLayout>
  );
};

export default VerifierCompleted;
