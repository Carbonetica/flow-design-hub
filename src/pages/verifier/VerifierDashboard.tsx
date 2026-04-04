import { DashboardLayout } from "@/components/DashboardLayout";
import { VerifierSidebar } from "@/components/sidebars/VerifierSidebar";
import { StatsCard } from "@/components/StatsCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { verificationTasks } from "@/data/mockData";
import { ClipboardList, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const VerifierDashboard = () => {
  const pending = verificationTasks.filter((t) => t.status === "Pending").length;
  const inProgress = verificationTasks.filter((t) => t.status === "In Progress").length;
  const completed = verificationTasks.filter((t) => t.status === "Completed").length;
  const totalFindings = verificationTasks.reduce((acc, t) => acc + t.findings.length, 0);

  return (
    <DashboardLayout sidebar={<VerifierSidebar />}>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-bold">Verifier Portal</h1><p className="text-muted-foreground">Assigned projects and verification tasks</p></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Pending" value={pending} icon={Clock} />
          <StatsCard title="In Progress" value={inProgress} icon={ClipboardList} />
          <StatsCard title="Completed" value={completed} icon={CheckCircle} />
          <StatsCard title="Open Findings" value={totalFindings} icon={AlertTriangle} />
        </div>

        <Card><CardContent className="p-0">
          <Table>
            <TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Stage</TableHead><TableHead>Priority</TableHead><TableHead>Deadline</TableHead><TableHead>Findings</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
            <TableBody>
              {verificationTasks.map((task) => (
                <TableRow key={task.id} className="cursor-pointer hover:bg-muted/30">
                  <TableCell>
                    <Link to={`/verifier/audit/${task.id}`} className="font-medium hover:underline">{task.projectName}</Link>
                  </TableCell>
                  <TableCell>{task.stage}</TableCell>
                  <TableCell><StatusBadge status={task.priority} /></TableCell>
                  <TableCell>{task.deadline}</TableCell>
                  <TableCell>{task.findings.length}</TableCell>
                  <TableCell><StatusBadge status={task.status} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
      </div>
    </DashboardLayout>
  );
};

export default VerifierDashboard;
