import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { projects } from "@/data/mockData";
import { Plus, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const DevProjects = () => {
  const devProjects = projects.filter((p) => p.organizationId === "org-1");

  return (
    <DashboardLayout sidebar={<DeveloperSidebar />}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="text-muted-foreground">Manage your carbon credit projects</p>
          </div>
          <Link to="/developer/projects/new">
            <Button className="gap-2"><Plus className="h-4 w-4" /> New Project</Button>
          </Link>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Standard</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Credits Issued</TableHead>
                  <TableHead className="text-right">Estimated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devProjects.map((project) => (
                  <TableRow key={project.id} className="cursor-pointer hover:bg-muted/30">
                    <TableCell>
                      <Link to={`/developer/projects/${project.id}`} className="font-medium hover:underline">{project.name}</Link>
                    </TableCell>
                    <TableCell><StatusBadge status={project.type} /></TableCell>
                    <TableCell><span className="flex items-center gap-1 text-sm"><MapPin className="h-3 w-3" />{project.country}, {project.region}</span></TableCell>
                    <TableCell className="text-sm">{project.standard}</TableCell>
                    <TableCell><StatusBadge status={project.status} /></TableCell>
                    <TableCell className="text-right font-medium">{project.issuedCredits.toLocaleString()}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{project.estimatedCredits.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DevProjects;
