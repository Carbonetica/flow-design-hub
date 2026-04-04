import { DashboardLayout } from "@/components/DashboardLayout";
import { AdminSidebar } from "@/components/sidebars/AdminSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { disputes } from "@/data/mockData";

const columns = ["Submitted", "Under Review", "Resolved"] as const;

const AdminDisputes = () => (
  <DashboardLayout sidebar={<AdminSidebar />}>
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Disputes</h1><p className="text-muted-foreground">Manage platform disputes</p></div>
      <div className="grid md:grid-cols-3 gap-4">
        {columns.map(col => (
          <div key={col}>
            <h3 className="font-semibold mb-3 flex items-center gap-2"><StatusBadge status={col} /> <span className="text-sm text-muted-foreground">({disputes.filter(d=>d.status===col).length})</span></h3>
            <div className="space-y-3">
              {disputes.filter(d=>d.status===col).map(d=>(
                <Card key={d.id}><CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2"><StatusBadge status={d.priority}/></div>
                  <h4 className="font-medium text-sm mb-1">{d.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{d.description}</p>
                  <p className="text-xs text-muted-foreground">By {d.submittedBy} • {d.createdAt}</p>
                </CardContent></Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </DashboardLayout>
);
export default AdminDisputes;
