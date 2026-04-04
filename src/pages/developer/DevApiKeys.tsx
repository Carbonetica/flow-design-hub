import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy, Plus, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { StatusBadge } from "@/components/StatusBadge";

const keys = [
  { name: "Production API Key", key: "cs_live_xxxxxxxxxxxx", created: "2024-01-15", lastUsed: "2024-08-20", status: "Active" },
  { name: "Test API Key", key: "cs_test_xxxxxxxxxxxx", created: "2024-03-01", lastUsed: "2024-08-18", status: "Active" },
];

const DevApiKeys = () => {
  const [showKeys, setShowKeys] = useState(false);
  return (
    <DashboardLayout sidebar={<DeveloperSidebar />}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div><h1 className="text-2xl font-bold">API Keys</h1><p className="text-muted-foreground">Manage your API keys and webhooks</p></div>
          <Button className="gap-2"><Plus className="h-4 w-4" /> Create Key</Button>
        </div>
        <Card><CardContent className="p-0">
          <Table>
            <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Key</TableHead><TableHead>Created</TableHead><TableHead>Last Used</TableHead><TableHead>Status</TableHead><TableHead></TableHead></TableRow></TableHeader>
            <TableBody>
              {keys.map((k) => (
                <TableRow key={k.name}>
                  <TableCell className="font-medium">{k.name}</TableCell>
                  <TableCell className="font-mono text-xs">{showKeys ? k.key : "cs_••••••••••••"}</TableCell>
                  <TableCell>{k.created}</TableCell>
                  <TableCell>{k.lastUsed}</TableCell>
                  <TableCell><StatusBadge status={k.status} /></TableCell>
                  <TableCell><div className="flex gap-1"><Button variant="ghost" size="icon" onClick={() => setShowKeys(!showKeys)}>{showKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</Button><Button variant="ghost" size="icon"><Copy className="h-4 w-4" /></Button></div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent></Card>
        <Card><CardContent className="p-6 space-y-4">
          <h3 className="font-semibold">Webhook Configuration</h3>
          <div className="space-y-2"><Label>Webhook URL</Label><Input placeholder="https://your-server.com/webhooks/carbonstack" /></div>
          <Button>Save Webhook</Button>
        </CardContent></Card>
      </div>
    </DashboardLayout>
  );
};

export default DevApiKeys;
