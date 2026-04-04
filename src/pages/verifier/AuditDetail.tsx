import { useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { VerifierSidebar } from "@/components/sidebars/VerifierSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { verificationTasks } from "@/data/mockData";
import { Plus, Upload, MessageSquare, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const AuditDetail = () => {
  const { id } = useParams();
  const task = verificationTasks.find((t) => t.id === id) || verificationTasks[0];

  return (
    <DashboardLayout sidebar={<VerifierSidebar />}>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold">{task.projectName}</h1>
            <p className="text-muted-foreground">Stage: {task.stage} • Deadline: {task.deadline}</p>
          </div>
          <div className="flex gap-2">
            <StatusBadge status={task.priority} />
            <StatusBadge status={task.status} />
          </div>
        </div>

        <Tabs defaultValue="data">
          <TabsList>
            <TabsTrigger value="data">Data Tables</TabsTrigger>
            <TabsTrigger value="satellite">Satellite Exports</TabsTrigger>
            <TabsTrigger value="sensors">Sensor Logs</TabsTrigger>
            <TabsTrigger value="photos">Field Photos</TabsTrigger>
            <TabsTrigger value="calculations">Calculations</TabsTrigger>
            <TabsTrigger value="findings">Findings ({task.findings.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="data">
            <Card><CardContent className="p-6">
              <Table>
                <TableHeader><TableRow><TableHead>Parameter</TableHead><TableHead>Value</TableHead><TableHead>Unit</TableHead><TableHead>Source</TableHead><TableHead>Methodology Requirement</TableHead></TableRow></TableHeader>
                <TableBody>
                  {[
                    { param: "Above-ground biomass", value: "152.3", unit: "tC/ha", source: "Field sampling", req: "Section 8.1.2" },
                    { param: "Deforestation rate", value: "1.18%", unit: "%/yr", source: "Remote sensing", req: "Section 8.2.1" },
                    { param: "Leakage factor", value: "0.15", unit: "ratio", source: "Calculation", req: "Section 8.3" },
                    { param: "Net GHG reduction", value: "125,400", unit: "tCO2e", source: "Model output", req: "Section 9.1" },
                  ].map((row) => (
                    <TableRow key={row.param}>
                      <TableCell className="font-medium">{row.param}</TableCell>
                      <TableCell>{row.value}</TableCell>
                      <TableCell>{row.unit}</TableCell>
                      <TableCell>{row.source}</TableCell>
                      <TableCell className="text-muted-foreground">{row.req}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="satellite">
            <Card><CardContent className="p-6 text-center text-muted-foreground">
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center mb-4">Satellite imagery comparison viewer</div>
              <p>Side-by-side baseline vs monitoring period imagery</p>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="sensors">
            <Card><CardContent className="p-6 text-center text-muted-foreground">Sensor log data viewer — time series from IoT devices</CardContent></Card>
          </TabsContent>

          <TabsContent value="photos">
            <Card><CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center text-sm text-muted-foreground border">Photo {i}</div>
                ))}
              </div>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="calculations">
            <Card><CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Emission Reduction Calculation</h3>
              <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm space-y-2">
                <div>Baseline emissions: 145,200 tCO2e</div>
                <div>Project emissions: 12,300 tCO2e</div>
                <div>Leakage: 7,500 tCO2e</div>
                <div className="border-t pt-2 font-bold">Net reduction: 125,400 tCO2e</div>
                <div className="text-muted-foreground">Uncertainty: ±8.2%</div>
              </div>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="findings">
            <div className="space-y-4">
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild><Button className="gap-2"><Plus className="h-4 w-4" /> Log Finding</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader><DialogTitle>Log Finding</DialogTitle></DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2"><Label>Type</Label><Select><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger><SelectContent><SelectItem value="nc">Non-Conformity</SelectItem><SelectItem value="obs">Observation</SelectItem><SelectItem value="cl">Clarification</SelectItem></SelectContent></Select></div>
                      <div className="space-y-2"><Label>Severity</Label><Select><SelectTrigger><SelectValue placeholder="Select severity" /></SelectTrigger><SelectContent><SelectItem value="major">Major</SelectItem><SelectItem value="minor">Minor</SelectItem></SelectContent></Select></div>
                      <div className="space-y-2"><Label>Description</Label><Textarea placeholder="Describe the finding..." rows={4} /></div>
                      <Button className="w-full">Submit Finding</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              {task.findings.map((finding) => (
                <Card key={finding.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        <StatusBadge status={finding.type} />
                        <StatusBadge status={finding.severity} />
                      </div>
                      <StatusBadge status={finding.status} />
                    </div>
                    <p className="text-sm">{finding.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{finding.createdAt}</p>
                  </CardContent>
                </Card>
              ))}
              {task.findings.length === 0 && <Card><CardContent className="p-6 text-center text-muted-foreground">No findings logged yet</CardContent></Card>}
            </div>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader><CardTitle className="text-lg">Verification Report</CardTitle></CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-xl p-8 text-center">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="font-medium mb-1">Upload Verification Report</p>
              <p className="text-sm text-muted-foreground mb-4">Drag and drop or click to upload</p>
              <Button variant="outline">Choose File</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-lg">Sign-off Checklist</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {["All data tables reviewed", "Satellite imagery verified", "Calculations checked", "Findings resolved", "Report uploaded"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className={`h-5 w-5 ${i < 3 ? "text-success" : "text-muted-foreground"}`} />
                  <span className={`text-sm ${i >= 3 ? "text-muted-foreground" : ""}`}>{item}</span>
                </div>
              ))}
            </div>
            <Button className="mt-4" disabled>Complete Verification</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AuditDetail;
