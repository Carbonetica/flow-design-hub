import { DashboardLayout } from "@/components/DashboardLayout";
import { BuyerSidebar } from "@/components/sidebars/BuyerSidebar";
import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBatches, retirements, orders } from "@/data/mockData";
import { Coins, ShoppingCart, RotateCcw, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const portfolioData = [
  { type: "REDD+", quantity: 10000, color: "hsl(145, 50%, 42%)" },
  { type: "Cookstoves", quantity: 5000, color: "hsl(150, 30%, 30%)" },
  { type: "Soil Carbon", quantity: 3000, color: "hsl(143, 50%, 62%)" },
];

const spendData = [
  { month: "Mar", spend: 66000 },
  { month: "Apr", spend: 0 },
  { month: "May", spend: 185000 },
  { month: "Jun", spend: 0 },
  { month: "Jul", spend: 0 },
  { month: "Aug", spend: 77500 },
];

const BuyerPortfolio = () => {
  const totalHeld = 18000;
  const totalRetired = retirements.reduce((acc, r) => acc + r.quantity, 0);
  const totalSpend = orders.reduce((acc, o) => acc + o.totalAmount, 0);

  return (
    <DashboardLayout sidebar={<BuyerSidebar />}>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-bold">Portfolio Dashboard</h1><p className="text-muted-foreground">Your carbon credit portfolio overview</p></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Credits Held" value={totalHeld.toLocaleString()} subtitle="Across 3 project types" icon={Coins} />
          <StatsCard title="Credits Retired" value={totalRetired.toLocaleString()} icon={RotateCcw} trend={{ value: "+5,000 this quarter", positive: true }} />
          <StatsCard title="Total Orders" value={orders.length} icon={ShoppingCart} />
          <StatsCard title="Total Spend" value={`$${(totalSpend / 1000).toFixed(0)}K`} icon={DollarSign} trend={{ value: "+12% QoQ", positive: true }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Holdings by Type</CardTitle></CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={portfolioData} dataKey="quantity" nameKey="type" cx="50%" cy="50%" outerRadius={80} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                      {portfolioData.map((entry, i) => (<Cell key={i} fill={entry.color} />))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Monthly Spend</CardTitle></CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={spendData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis tickFormatter={(v) => `$${v / 1000}K`} className="text-xs" />
                    <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
                    <Bar dataKey="spend" fill="hsl(145, 50%, 42%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BuyerPortfolio;
