import { DashboardLayout } from "@/components/DashboardLayout";
import { BuyerSidebar } from "@/components/sidebars/BuyerSidebar";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { orders } from "@/data/mockData";

const BuyerOrders = () => (
  <DashboardLayout sidebar={<BuyerSidebar />}>
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Orders</h1><p className="text-muted-foreground">Track your purchase orders</p></div>
      <Card><CardContent className="p-0">
        <Table>
          <TableHeader><TableRow><TableHead>Order ID</TableHead><TableHead>Project</TableHead><TableHead>Quantity</TableHead><TableHead>Total</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-mono text-sm">{order.id}</TableCell>
                <TableCell className="font-medium">{order.projectName}</TableCell>
                <TableCell>{order.quantity.toLocaleString()}</TableCell>
                <TableCell>${order.totalAmount.toLocaleString()}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell><StatusBadge status={order.status} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent></Card>
    </div>
  </DashboardLayout>
);

export default BuyerOrders;
