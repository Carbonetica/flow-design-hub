import { useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { projects, creditBatches, mrvTasks } from "@/data/mockData";
import { MapPin, Calendar, Ruler } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id) || projects[0];
  const projectCredits = creditBatches.filter((c) => c.projectId === project.id);
  const projectMrv = mrvTasks.filter((t) => t.projectId === project.id);

  return (
    <DashboardLayout sidebar={<DeveloperSidebar />}>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{project.country}, {project.region}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{project.startDate}</span>
              <span className="flex items-center gap-1"><Ruler className="h-3 w-3" />{project.area.toLocaleString()} ha</span>
            </div>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Project Type", value: project.type },
            { label: "Standard", value: project.standard },
            { label: "Methodology", value: project.methodology },
            { label: "Vintage", value: project.vintage.toString() },
          ].map((item) => (
            <Card key={item.label}><CardContent className="p-4"><p className="text-xs text-muted-foreground">{item.label}</p><p className="font-semibold mt-1">{item.value}</p></CardContent></Card>
          ))}
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mrv">MRV Data</TabsTrigger>
            <TabsTrigger value="credits">Credits</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="verifier">Verifier Comms</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card><CardContent className="p-6">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <h3 className="font-semibold mb-2">Co-Benefits</h3>
              <div className="flex gap-2 flex-wrap">{project.cobenefits.map((cb) => (<StatusBadge key={cb} status={cb} />))}</div>
              <h3 className="font-semibold mt-4 mb-2">Project Boundary</h3>
              <div className="h-48 rounded-lg bg-muted/30 border flex items-center justify-center text-sm text-muted-foreground">Map visualization placeholder ({project.coordinates.lat}, {project.coordinates.lng})</div>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="mrv">
            <Card><CardContent className="p-0">
              <Table>
                <TableHeader><TableRow><TableHead>Task</TableHead><TableHead>Type</TableHead><TableHead>Assignee</TableHead><TableHead>Due Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {projectMrv.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.description}</TableCell>
                      <TableCell>{task.type}</TableCell>
                      <TableCell>{task.assignee}</TableCell>
                      <TableCell>{task.dueDate}</TableCell>
                      <TableCell><StatusBadge status={task.status} /></TableCell>
                    </TableRow>
                  ))}
                  {projectMrv.length === 0 && <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">No MRV tasks for this project</TableCell></TableRow>}
                </TableBody>
              </Table>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="credits">
            <Card><CardContent className="p-0">
              <Table>
                <TableHeader><TableRow><TableHead>Serial Range</TableHead><TableHead>Quantity</TableHead><TableHead>Vintage</TableHead><TableHead>Buffer</TableHead><TableHead>Price</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {projectCredits.map((batch) => (
                    <TableRow key={batch.id}>
                      <TableCell className="font-mono text-xs">{batch.serialStart}</TableCell>
                      <TableCell>{batch.quantity.toLocaleString()}</TableCell>
                      <TableCell>{batch.vintage}</TableCell>
                      <TableCell>{batch.bufferDeduction}%</TableCell>
                      <TableCell>{batch.pricePerCredit ? `$${batch.pricePerCredit}` : "—"}</TableCell>
                      <TableCell><StatusBadge status={batch.status} /></TableCell>
                    </TableRow>
                  ))}
                  {projectCredits.length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No credit batches yet</TableCell></TableRow>}
                </TableBody>
              </Table>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card><CardContent className="p-6 text-center text-muted-foreground">
              <p>Document vault coming soon — upload PDD, monitoring reports, and verification documents.</p>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="verifier">
            <Card><CardContent className="p-6 text-center text-muted-foreground">
              <p>VVB communication threads will appear here.</p>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="audit">
            <Card><CardContent className="p-6">
              <div className="space-y-3">
                {["Project created", "KYB submitted", "Baseline data uploaded", "Validation started", "MRV monitoring initiated"].map((event, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground">{new Date(2024, 0, 15 + i * 30).toLocaleDateString()}</span>
                    <span>{event}</span>
                  </div>
                ))}
              </div>
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetail;
