import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Upload } from "lucide-react";

const folders = ["Project Design Documents", "Monitoring Reports", "Verification Reports", "Legal Documents", "Stakeholder Consultations"];

const DevDocuments = () => (
  <DashboardLayout sidebar={<DeveloperSidebar />}>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">Documents</h1><p className="text-muted-foreground">Document vault and file management</p></div>
        <Button className="gap-2"><Upload className="h-4 w-4" /> Upload</Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {folders.map((folder) => (
          <Card key={folder} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><FolderOpen className="h-5 w-5 text-primary" /></div>
              <div><p className="font-medium">{folder}</p><p className="text-sm text-muted-foreground">{Math.floor(Math.random() * 10 + 1)} files</p></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default DevDocuments;
