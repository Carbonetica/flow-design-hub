import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mrvTasks } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const DevMrv = () => (
  <DashboardLayout sidebar={<DeveloperSidebar />}>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">MRV Tasks</h1><p className="text-muted-foreground">Monitor, Report, and Verify</p></div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> New Task</Button>
      </div>
      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow><TableHead>Description</TableHead><TableHead>Type</TableHead><TableHead>Project</TableHead><TableHead>Assignee</TableHead><TableHead>Due Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {mrvTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.description}</TableCell>
                <TableCell><StatusBadge status={task.type} /></TableCell>
                <TableCell className="text-sm">{task.projectId}</TableCell>
                <TableCell>{task.assignee}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell><StatusBadge status={task.status} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  </DashboardLayout>
);

export default DevMrv;
