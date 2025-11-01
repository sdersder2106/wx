import KPICards from "@/components/dashboard/KPICards";
import VulnerabilitiesBySeverityChart from "@/components/charts/VulnerabilitiesBySeverityChart";
import ImpactedComplianceChart from "@/components/charts/ImpactedComplianceChart";
import VulnerabilityBreakdownChart from "@/components/charts/VulnerabilityBreakdownChart";

// Mock data - À remplacer par des vraies données de l'API
const mockStats = {
  totalPentests: 3,
  pentestsInProgress: 3,
  totalTargets: 12,
  activeTargets: 3,
  totalVulnerabilities: 18,
  openVulnerabilities: 3,
  critical: 6,
};

const mockRadarData = [
  { month: "January", critical: 12, high: 19, medium: 8, low: 5 },
  { month: "February", critical: 18, high: 22, medium: 12, low: 8 },
  { month: "March", critical: 8, high: 15, medium: 18, low: 12 },
  { month: "April", critical: 15, high: 20, medium: 10, low: 6 },
  { month: "May", critical: 10, high: 18, medium: 14, low: 9 },
  { month: "June", critical: 14, high: 16, medium: 9, low: 7 },
];

const mockComplianceData = [
  { name: "OWASP", passed: 45, failed: 12 },
  { name: "PCI-DSS", passed: 38, failed: 8 },
  { name: "ISO 27001", passed: 42, failed: 5 },
  { name: "GDPR", passed: 50, failed: 3 },
];

const mockBreakdownData = [
  { date: "Week 1", critical: 12, high: 19, medium: 8, low: 5 },
  { date: "Week 2", critical: 15, high: 22, medium: 12, low: 8 },
  { date: "Week 3", critical: 10, high: 18, medium: 15, low: 10 },
  { date: "Week 4", critical: 8, high: 15, medium: 18, low: 12 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, Current User's Company</p>
      </div>

      {/* KPI Cards */}
      <KPICards stats={mockStats} />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <VulnerabilitiesBySeverityChart data={mockRadarData} />
        <ImpactedComplianceChart data={mockComplianceData} />
        <VulnerabilityBreakdownChart data={mockBreakdownData} />
      </div>

      {/* Recent Pentests Table - À ajouter */}
      <div className="bg-white p-6 rounded-xl border">
        <h3 className="text-lg font-semibold mb-4">Recent Pentests</h3>
        <div className="text-gray-500 text-center py-8">
          Table des pentests récents à implémenter
        </div>
      </div>
    </div>
  );
}
