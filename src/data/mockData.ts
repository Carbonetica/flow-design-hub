// ===== ORGANIZATIONS =====
export interface Organization {
  id: string;
  name: string;
  type: "developer" | "buyer" | "verifier" | "admin";
  country: string;
  logo?: string;
  status: "active" | "pending" | "suspended";
}

export const organizations: Organization[] = [
  { id: "org-1", name: "GreenForest Solutions", type: "developer", country: "Brazil", status: "active" },
  { id: "org-2", name: "EcoCarbon Partners", type: "developer", country: "Kenya", status: "active" },
  { id: "org-3", name: "CleanEnergy Corp", type: "buyer", country: "United States", status: "active" },
  { id: "org-4", name: "SustainTech Global", type: "buyer", country: "Germany", status: "active" },
  { id: "org-5", name: "Verra Verification Ltd", type: "verifier", country: "United Kingdom", status: "active" },
];

// ===== PROJECTS =====
export type ProjectType = "REDD+" | "ARR" | "Soil Carbon" | "Methane" | "Cookstoves";
export type ProjectStatus = "Draft" | "Validation" | "Registered" | "Monitoring" | "Verification" | "Issuance" | "Completed";

export interface Project {
  id: string;
  name: string;
  type: ProjectType;
  methodology: string;
  status: ProjectStatus;
  organizationId: string;
  country: string;
  region: string;
  area: number; // hectares
  startDate: string;
  estimatedCredits: number;
  issuedCredits: number;
  description: string;
  coordinates: { lat: number; lng: number };
  verifierId?: string;
  standard: "Verra" | "Gold Standard" | "ACR" | "CAR";
  vintage: number;
  cobenefits: string[];
}

export const projects: Project[] = [
  {
    id: "proj-1", name: "Amazon Rainforest Protection", type: "REDD+", methodology: "VM0015",
    status: "Monitoring", organizationId: "org-1", country: "Brazil", region: "Amazonas",
    area: 50000, startDate: "2023-01-15", estimatedCredits: 500000, issuedCredits: 125000,
    description: "Large-scale avoided deforestation project protecting 50,000 hectares of primary Amazon rainforest.",
    coordinates: { lat: -3.4653, lng: -62.2159 }, verifierId: "org-5", standard: "Verra", vintage: 2024,
    cobenefits: ["Biodiversity", "Community Development", "Water Conservation"],
  },
  {
    id: "proj-2", name: "Kenya Reforestation Initiative", type: "ARR", methodology: "AR-ACM0003",
    status: "Validation", organizationId: "org-2", country: "Kenya", region: "Rift Valley",
    area: 12000, startDate: "2023-06-01", estimatedCredits: 180000, issuedCredits: 0,
    description: "Reforestation of degraded lands in the Rift Valley using native species.",
    coordinates: { lat: -0.3032, lng: 36.0800 }, verifierId: "org-5", standard: "Gold Standard", vintage: 2024,
    cobenefits: ["Biodiversity", "Soil Restoration", "Job Creation"],
  },
  {
    id: "proj-3", name: "Midwest Regenerative Agriculture", type: "Soil Carbon", methodology: "VM0042",
    status: "Registered", organizationId: "org-1", country: "United States", region: "Iowa",
    area: 8000, startDate: "2023-03-20", estimatedCredits: 45000, issuedCredits: 12000,
    description: "Soil carbon sequestration through regenerative agricultural practices across 8,000 hectares.",
    coordinates: { lat: 41.8780, lng: -93.0977 }, standard: "Verra", vintage: 2024,
    cobenefits: ["Soil Health", "Water Quality", "Food Security"],
  },
  {
    id: "proj-4", name: "Bangladesh Clean Cookstove Program", type: "Cookstoves", methodology: "AMS-II.G",
    status: "Issuance", organizationId: "org-2", country: "Bangladesh", region: "Dhaka Division",
    area: 0, startDate: "2022-09-10", estimatedCredits: 95000, issuedCredits: 65000,
    description: "Distribution of 50,000 fuel-efficient cookstoves to rural households.",
    coordinates: { lat: 23.8103, lng: 90.4125 }, verifierId: "org-5", standard: "Gold Standard", vintage: 2023,
    cobenefits: ["Health", "Gender Equality", "Air Quality"],
  },
  {
    id: "proj-5", name: "Indonesian Mangrove Restoration", type: "ARR", methodology: "VM0033",
    status: "Draft", organizationId: "org-1", country: "Indonesia", region: "Kalimantan",
    area: 3500, startDate: "2024-01-01", estimatedCredits: 120000, issuedCredits: 0,
    description: "Restoration of degraded mangrove ecosystems along the Kalimantan coastline.",
    coordinates: { lat: -1.6815, lng: 116.7025 }, standard: "Verra", vintage: 2025,
    cobenefits: ["Biodiversity", "Coastal Protection", "Fisheries"],
  },
];

// ===== CREDITS =====
export type CreditStatus = "Draft" | "Validated" | "Issued" | "Listed" | "Sold" | "Retired";

export interface CreditBatch {
  id: string;
  projectId: string;
  serialStart: string;
  serialEnd: string;
  quantity: number;
  vintage: number;
  status: CreditStatus;
  issuedDate?: string;
  bufferDeduction: number;
  pricePerCredit?: number;
}

export const creditBatches: CreditBatch[] = [
  { id: "cb-1", projectId: "proj-1", serialStart: "VCS-001-2024-00001", serialEnd: "VCS-001-2024-50000", quantity: 50000, vintage: 2024, status: "Listed", issuedDate: "2024-03-15", bufferDeduction: 10, pricePerCredit: 18.50 },
  { id: "cb-2", projectId: "proj-1", serialStart: "VCS-001-2024-50001", serialEnd: "VCS-001-2024-75000", quantity: 25000, vintage: 2024, status: "Issued", issuedDate: "2024-06-20", bufferDeduction: 10 },
  { id: "cb-3", projectId: "proj-3", serialStart: "VCS-003-2024-00001", serialEnd: "VCS-003-2024-12000", quantity: 12000, vintage: 2024, status: "Sold", issuedDate: "2024-02-10", bufferDeduction: 15, pricePerCredit: 22.00 },
  { id: "cb-4", projectId: "proj-4", serialStart: "GS-004-2023-00001", serialEnd: "GS-004-2023-35000", quantity: 35000, vintage: 2023, status: "Retired", issuedDate: "2023-11-05", bufferDeduction: 5, pricePerCredit: 14.00 },
  { id: "cb-5", projectId: "proj-4", serialStart: "GS-004-2024-00001", serialEnd: "GS-004-2024-30000", quantity: 30000, vintage: 2024, status: "Listed", issuedDate: "2024-07-01", bufferDeduction: 5, pricePerCredit: 15.50 },
];

// ===== MARKETPLACE LISTINGS =====
export interface MarketplaceListing {
  id: string;
  creditBatchId: string;
  projectId: string;
  projectName: string;
  projectType: ProjectType;
  quantity: number;
  pricePerCredit: number;
  vintage: number;
  standard: string;
  country: string;
  cobenefits: string[];
  seller: string;
  listedDate: string;
  ccpLabel: boolean;
  riskScore: "Low" | "Medium" | "High";
}

export const marketplaceListings: MarketplaceListing[] = [
  { id: "ml-1", creditBatchId: "cb-1", projectId: "proj-1", projectName: "Amazon Rainforest Protection", projectType: "REDD+", quantity: 50000, pricePerCredit: 18.50, vintage: 2024, standard: "Verra", country: "Brazil", cobenefits: ["Biodiversity", "Community Development"], seller: "GreenForest Solutions", listedDate: "2024-04-01", ccpLabel: true, riskScore: "Low" },
  { id: "ml-2", creditBatchId: "cb-5", projectId: "proj-4", projectName: "Bangladesh Clean Cookstove Program", projectType: "Cookstoves", quantity: 30000, pricePerCredit: 15.50, vintage: 2024, standard: "Gold Standard", country: "Bangladesh", cobenefits: ["Health", "Gender Equality"], seller: "EcoCarbon Partners", listedDate: "2024-07-15", ccpLabel: true, riskScore: "Low" },
  { id: "ml-3", creditBatchId: "cb-3", projectId: "proj-3", projectName: "Midwest Regenerative Agriculture", projectType: "Soil Carbon", quantity: 12000, pricePerCredit: 22.00, vintage: 2024, standard: "Verra", country: "United States", cobenefits: ["Soil Health", "Water Quality"], seller: "GreenForest Solutions", listedDate: "2024-03-01", ccpLabel: false, riskScore: "Medium" },
];

// ===== ORDERS =====
export interface Order {
  id: string;
  buyerId: string;
  listingId: string;
  quantity: number;
  totalAmount: number;
  status: "Pending" | "Confirmed" | "Escrow" | "Completed" | "Cancelled";
  createdAt: string;
  projectName: string;
}

export const orders: Order[] = [
  { id: "ord-1", buyerId: "org-3", listingId: "ml-1", quantity: 10000, totalAmount: 185000, status: "Completed", createdAt: "2024-05-10", projectName: "Amazon Rainforest Protection" },
  { id: "ord-2", buyerId: "org-4", listingId: "ml-2", quantity: 5000, totalAmount: 77500, status: "Escrow", createdAt: "2024-08-01", projectName: "Bangladesh Clean Cookstove Program" },
  { id: "ord-3", buyerId: "org-3", listingId: "ml-3", quantity: 3000, totalAmount: 66000, status: "Completed", createdAt: "2024-04-15", projectName: "Midwest Regenerative Agriculture" },
];

// ===== RETIREMENTS =====
export interface Retirement {
  id: string;
  buyerId: string;
  creditBatchId: string;
  quantity: number;
  beneficiary: string;
  reason: string;
  reportingYear: number;
  retiredAt: string;
  certificateUrl?: string;
  projectName: string;
}

export const retirements: Retirement[] = [
  { id: "ret-1", buyerId: "org-3", creditBatchId: "cb-4", quantity: 15000, beneficiary: "CleanEnergy Corp", reason: "Scope 1 Offset - Annual Report 2023", reportingYear: 2023, retiredAt: "2024-01-15", certificateUrl: "#", projectName: "Bangladesh Clean Cookstove Program" },
  { id: "ret-2", buyerId: "org-4", creditBatchId: "cb-3", quantity: 5000, beneficiary: "SustainTech Global", reason: "CSRD Compliance - EU Reporting", reportingYear: 2024, retiredAt: "2024-06-30", certificateUrl: "#", projectName: "Midwest Regenerative Agriculture" },
];

// ===== VERIFICATION TASKS =====
export interface VerificationTask {
  id: string;
  projectId: string;
  projectName: string;
  verifierId: string;
  stage: "Document Review" | "Site Visit" | "Data Analysis" | "Report Writing" | "Final Review";
  priority: "High" | "Medium" | "Low";
  deadline: string;
  status: "Pending" | "In Progress" | "Completed";
  assignedDate: string;
  findings: Finding[];
}

export interface Finding {
  id: string;
  type: "Non-Conformity" | "Observation" | "Clarification";
  severity: "Major" | "Minor";
  description: string;
  status: "Open" | "Responded" | "Resolved";
  createdAt: string;
}

export const verificationTasks: VerificationTask[] = [
  {
    id: "vt-1", projectId: "proj-1", projectName: "Amazon Rainforest Protection", verifierId: "org-5",
    stage: "Data Analysis", priority: "High", deadline: "2024-09-30", status: "In Progress", assignedDate: "2024-07-01",
    findings: [
      { id: "f-1", type: "Clarification", severity: "Minor", description: "Baseline deforestation rate source documentation needed.", status: "Responded", createdAt: "2024-08-01" },
      { id: "f-2", type: "Non-Conformity", severity: "Major", description: "Leakage belt monitoring data incomplete for Q2 2024.", status: "Open", createdAt: "2024-08-15" },
    ],
  },
  {
    id: "vt-2", projectId: "proj-2", projectName: "Kenya Reforestation Initiative", verifierId: "org-5",
    stage: "Document Review", priority: "Medium", deadline: "2024-11-15", status: "Pending", assignedDate: "2024-08-01",
    findings: [],
  },
  {
    id: "vt-3", projectId: "proj-4", projectName: "Bangladesh Clean Cookstove Program", verifierId: "org-5",
    stage: "Final Review", priority: "Low", deadline: "2024-08-15", status: "Completed", assignedDate: "2024-05-01",
    findings: [
      { id: "f-3", type: "Observation", severity: "Minor", description: "Consider expanding sample size for next monitoring period.", status: "Resolved", createdAt: "2024-06-01" },
    ],
  },
];

// ===== MRV TASKS =====
export interface MrvTask {
  id: string;
  projectId: string;
  type: "Field Data Collection" | "Satellite Review" | "Sensor Calibration" | "Report Generation";
  status: "Pending" | "In Progress" | "Completed" | "Overdue";
  dueDate: string;
  assignee: string;
  description: string;
}

export const mrvTasks: MrvTask[] = [
  { id: "mrv-1", projectId: "proj-1", type: "Satellite Review", status: "In Progress", dueDate: "2024-09-15", assignee: "Maria Silva", description: "Q3 2024 satellite imagery analysis for deforestation detection" },
  { id: "mrv-2", projectId: "proj-1", type: "Field Data Collection", status: "Pending", dueDate: "2024-10-01", assignee: "Carlos Santos", description: "Annual biomass sampling in plots A1-A20" },
  { id: "mrv-3", projectId: "proj-3", type: "Sensor Calibration", status: "Completed", dueDate: "2024-08-01", assignee: "John Smith", description: "Soil carbon sensor calibration for monitoring stations" },
  { id: "mrv-4", projectId: "proj-4", type: "Report Generation", status: "Overdue", dueDate: "2024-07-30", assignee: "Fatima Rahman", description: "Monthly cookstove usage monitoring report" },
];

// ===== ACTIVITY FEED =====
export interface Activity {
  id: string;
  type: "project" | "credit" | "verification" | "order" | "system";
  message: string;
  timestamp: string;
  icon: string;
}

export const recentActivities: Activity[] = [
  { id: "act-1", type: "credit", message: "50,000 credits listed for Amazon Rainforest Protection", timestamp: "2024-08-20T14:30:00Z", icon: "leaf" },
  { id: "act-2", type: "order", message: "CleanEnergy Corp purchased 10,000 credits", timestamp: "2024-08-19T10:15:00Z", icon: "shopping-cart" },
  { id: "act-3", type: "verification", message: "Data analysis started for Amazon Rainforest Protection", timestamp: "2024-08-18T09:00:00Z", icon: "check-circle" },
  { id: "act-4", type: "project", message: "Indonesian Mangrove Restoration draft submitted", timestamp: "2024-08-17T16:45:00Z", icon: "file-text" },
  { id: "act-5", type: "system", message: "System maintenance completed successfully", timestamp: "2024-08-16T02:00:00Z", icon: "settings" },
];

// ===== KYB/AML QUEUE =====
export interface KybReview {
  id: string;
  organizationName: string;
  type: "developer" | "buyer" | "verifier";
  submittedAt: string;
  status: "Pending" | "Under Review" | "Approved" | "Rejected";
  riskLevel: "Low" | "Medium" | "High";
  watchlistHits: number;
  country: string;
}

export const kybReviews: KybReview[] = [
  { id: "kyb-1", organizationName: "NewCarbon Ventures", type: "developer", submittedAt: "2024-08-15", status: "Pending", riskLevel: "Low", watchlistHits: 0, country: "Costa Rica" },
  { id: "kyb-2", organizationName: "Pacific Green Trading", type: "buyer", submittedAt: "2024-08-12", status: "Under Review", riskLevel: "Medium", watchlistHits: 1, country: "Singapore" },
  { id: "kyb-3", organizationName: "AfriVerify Ltd", type: "verifier", submittedAt: "2024-08-10", status: "Approved", riskLevel: "Low", watchlistHits: 0, country: "South Africa" },
];

// ===== DISPUTES =====
export interface Dispute {
  id: string;
  title: string;
  description: string;
  status: "Submitted" | "Under Review" | "Resolved";
  priority: "High" | "Medium" | "Low";
  submittedBy: string;
  createdAt: string;
  resolvedAt?: string;
}

export const disputes: Dispute[] = [
  { id: "disp-1", title: "Credit serial number discrepancy", description: "Mismatch between registry and platform serial numbers for batch VCS-001-2024.", status: "Under Review", priority: "High", submittedBy: "GreenForest Solutions", createdAt: "2024-08-10" },
  { id: "disp-2", title: "Double counting allegation", description: "Potential overlap between project boundaries of proj-1 and an external registry project.", status: "Submitted", priority: "High", submittedBy: "Verra Verification Ltd", createdAt: "2024-08-18" },
  { id: "disp-3", title: "Delayed payment settlement", description: "Payment for order ord-2 has not been settled within the 30-day escrow window.", status: "Resolved", priority: "Medium", submittedBy: "EcoCarbon Partners", createdAt: "2024-07-20", resolvedAt: "2024-08-05" },
];

// ===== NOTIFICATIONS =====
export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  type: "info" | "warning" | "success" | "error";
}

export const notifications: Notification[] = [
  { id: "notif-1", title: "Verification Update", message: "Data analysis started for Amazon Rainforest Protection", read: false, createdAt: "2024-08-20T14:30:00Z", type: "info" },
  { id: "notif-2", title: "Credit Issuance", message: "25,000 credits issued for batch VCS-001-2024", read: false, createdAt: "2024-08-19T10:15:00Z", type: "success" },
  { id: "notif-3", title: "MRV Task Overdue", message: "Monthly cookstove report is 3 weeks overdue", read: true, createdAt: "2024-08-18T09:00:00Z", type: "warning" },
  { id: "notif-4", title: "Dispute Filed", message: "New dispute regarding credit serial discrepancy", read: true, createdAt: "2024-08-10T16:00:00Z", type: "error" },
];

// ===== USERS (mock auth) =====
export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: "developer" | "buyer" | "verifier" | "admin";
  organizationId: string;
  avatar?: string;
}

export const mockUsers: MockUser[] = [
  { id: "user-1", name: "Maria Silva", email: "maria@greenforest.com", role: "developer", organizationId: "org-1" },
  { id: "user-2", name: "James Wilson", email: "james@cleanenergy.com", role: "buyer", organizationId: "org-3" },
  { id: "user-3", name: "Dr. Sarah Chen", email: "sarah@verravvb.com", role: "verifier", organizationId: "org-5" },
  { id: "user-4", name: "Admin User", email: "admin@carbonstack.io", role: "admin", organizationId: "org-1" },
];
