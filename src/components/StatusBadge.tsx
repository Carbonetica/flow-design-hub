import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  // Project statuses
  Draft: "bg-muted text-muted-foreground",
  Validation: "bg-info/10 text-info border-info/20",
  Registered: "bg-success/10 text-success border-success/20",
  Monitoring: "bg-warning/10 text-warning border-warning/20",
  Verification: "bg-info/10 text-info border-info/20",
  Issuance: "bg-accent/20 text-accent-foreground border-accent/30",
  Completed: "bg-success/10 text-success border-success/20",
  // Credit statuses
  Validated: "bg-info/10 text-info border-info/20",
  Issued: "bg-success/10 text-success border-success/20",
  Listed: "bg-accent/20 text-accent-foreground border-accent/30",
  Sold: "bg-primary/10 text-primary border-primary/20",
  Retired: "bg-muted text-muted-foreground",
  // General
  Active: "bg-success/10 text-success border-success/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
  "In Progress": "bg-info/10 text-info border-info/20",
  Overdue: "bg-destructive/10 text-destructive border-destructive/20",
  Open: "bg-warning/10 text-warning border-warning/20",
  Responded: "bg-info/10 text-info border-info/20",
  Resolved: "bg-success/10 text-success border-success/20",
  Submitted: "bg-warning/10 text-warning border-warning/20",
  "Under Review": "bg-info/10 text-info border-info/20",
  Approved: "bg-success/10 text-success border-success/20",
  Rejected: "bg-destructive/10 text-destructive border-destructive/20",
  Confirmed: "bg-success/10 text-success border-success/20",
  Escrow: "bg-warning/10 text-warning border-warning/20",
  Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
  Low: "bg-success/10 text-success border-success/20",
  Medium: "bg-warning/10 text-warning border-warning/20",
  High: "bg-destructive/10 text-destructive border-destructive/20",
  Major: "bg-destructive/10 text-destructive border-destructive/20",
  Minor: "bg-warning/10 text-warning border-warning/20",
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => (
  <Badge variant="outline" className={cn("font-medium", statusColors[status] || "bg-muted text-muted-foreground", className)}>
    {status}
  </Badge>
);
