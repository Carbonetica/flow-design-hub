import { DashboardLayout } from "@/components/DashboardLayout";
import { DeveloperSidebar } from "@/components/sidebars/DeveloperSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DevSettings = () => (
  <DashboardLayout sidebar={<DeveloperSidebar />}>
    <div className="space-y-6 max-w-3xl">
      <div><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground">Manage your organization and preferences</p></div>
      <Tabs defaultValue="profile">
        <TabsList><TabsTrigger value="profile">Organization</TabsTrigger><TabsTrigger value="team">Team</TabsTrigger><TabsTrigger value="billing">Billing</TabsTrigger><TabsTrigger value="notifications">Notifications</TabsTrigger></TabsList>
        <TabsContent value="profile">
          <Card><CardContent className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Organization Name</Label><Input defaultValue="GreenForest Solutions" /></div>
              <div className="space-y-2"><Label>Contact Email</Label><Input defaultValue="contact@greenforest.com" /></div>
              <div className="space-y-2"><Label>Country</Label><Input defaultValue="Brazil" /></div>
              <div className="space-y-2"><Label>Website</Label><Input defaultValue="https://greenforest.com" /></div>
            </div>
            <Button>Save Changes</Button>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="team"><Card><CardContent className="p-6 text-center text-muted-foreground">Team management coming soon</CardContent></Card></TabsContent>
        <TabsContent value="billing"><Card><CardContent className="p-6 text-center text-muted-foreground">Billing management coming soon</CardContent></Card></TabsContent>
        <TabsContent value="notifications">
          <Card><CardContent className="p-6 space-y-4">
            {["Email notifications", "MRV task reminders", "Credit issuance alerts", "Verification updates"].map((item) => (
              <div key={item} className="flex items-center justify-between"><Label>{item}</Label><Switch defaultChecked /></div>
            ))}
            <Button>Save Preferences</Button>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  </DashboardLayout>
);

export default DevSettings;
