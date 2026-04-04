import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { StatsCard } from "@/components/StatsCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects, creditBatches, mrvTasks, recentActivities } from "@/data/mockData";
import { Coins, FolderTree, Satellite, TrendingUp, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DevDashboard = () => {
  const devProjects = projects.filter((p) => p.organizationId === "org-1");
  const totalIssued = devProjects.reduce((acc, p) => acc + p.issuedCredits, 0);
  const totalEstimated = devProjects.reduce((acc, p) => acc + p.estimatedCredits, 0);
  const activeMrv = mrvTasks.filter((t) => t.status !== "Completed").length;

  return (
    <DashboardLayout sidebar={<DeveloperSidebar />}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Developer Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Maria. Here's your project overview.</p>
          </div>
          <Link to="/developer/projects">
            <Button className="gap-2"><Plus className="h-4 w-4" /> New Project</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Active Projects" value={devProjects.length} icon={FolderTree} trend={{ value: "+1 this month", positive: true }} />
          <StatsCard title="Credits Issued" value={totalIssued.toLocaleString()} subtitle={`of ${totalEstimated.toLocaleString()} estimated`} icon={Coins} />
          <StatsCard title="Active MRV Tasks" value={activeMrv} icon={Satellite} trend={{ value: "2 overdue", positive: false }} />
          <StatsCard title="Revenue" value="$2.4M" subtitle="Lifetime credit sales" icon={TrendingUp} trend={{ value: "+18% QoQ", positive: true }} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Projects</CardTitle>
              <Link to="/developer/projects"><Button variant="ghost" size="sm" className="gap-1">View All <ArrowRight className="h-3 w-3" /></Button></Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {devProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground">{project.type} • {project.country} • {project.standard}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right text-sm">
                        <div className="font-medium">{project.issuedCredits.toLocaleString()} tCO2e</div>
                        <div className="text-muted-foreground">issued</div>
                      </div>
                      <StatusBadge status={project.status} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-lg">Recent Activity</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <p className="text-sm">{activity.message}</p>
                      <p className="text-xs text-muted-foreground">{new Date(activity.timestamp).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DevDashboard;
