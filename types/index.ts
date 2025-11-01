import { User, Company, Target, Pentest, Finding, Report, Notification } from "@prisma/client";

// Extended types with relations
export type UserWithCompany = User & {
  company?: Company | null;
};

export type PentestWithRelations = Pentest & {
  target: Target;
  company: Company;
  assignedPentesters: User[];
  findings: Finding[];
  reports: Report[];
  client?: User | null;
  createdBy: User;
};

export type FindingWithRelations = Finding & {
  target: Target;
  company: Company;
  reportedBy: User;
  assignedTo?: User | null;
  pentest?: Pentest | null;
};

export type TargetWithRelations = Target & {
  company: Company;
  owner?: User | null;
  assignedPentesters: User[];
  findings: Finding[];
  pentests: Pentest[];
};

// Dashboard Stats Types
export interface DashboardStats {
  totalPentests: number;
  pentestsInProgress: number;
  totalTargets: number;
  activeTargets: number;
  totalVulnerabilities: number;
  openVulnerabilities: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  resolved: number;
  findingsBySeverity: SeverityData[];
  findingsTimeline: TimelineData[];
  recentPentests: PentestWithRelations[];
}

export interface SeverityData {
  name: string;
  value: number;
  color: string;
}

export interface TimelineData {
  date: string;
  count: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface CreatePentestForm {
  title: string;
  description?: string;
  targetId: string;
  type: "MANUAL" | "AUTOMATED";
  startDate: Date;
  endDate?: Date;
  assignedPentesterIds: string[];
}

export interface CreateFindingForm {
  title: string;
  description: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  cvssScore?: number;
  category?: string;
  targetId: string;
  pentestId?: string;
  suggestedFix?: string;
  complianceTags?: string[];
}

// Session Types
export interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "CLIENT" | "PENTESTER";
  companyId?: string | null;
}
