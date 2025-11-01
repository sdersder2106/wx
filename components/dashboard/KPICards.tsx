"use client";

import { Shield, Target, AlertTriangle, AlertCircle, TrendingUp } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number;
  subtitle: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
}

function KPICard({ title, value, subtitle, icon: Icon, bgColor, iconColor }: KPICardProps) {
  return (
    <div className={`kpi-card ${bgColor}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          <div className="flex items-center gap-1 mt-2">
            <TrendingUp className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${iconColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}

interface KPICardsProps {
  stats: {
    totalPentests: number;
    pentestsInProgress: number;
    totalTargets: number;
    activeTargets: number;
    totalVulnerabilities: number;
    openVulnerabilities: number;
    critical: number;
  };
}

export default function KPICards({ stats }: KPICardsProps) {
  const cards = [
    {
      title: "Total Pentests",
      value: stats.totalPentests,
      subtitle: `${stats.pentestsInProgress} In Progress`,
      icon: Shield,
      bgColor: "bg-kpi-blue",
      iconColor: "bg-kpi-blueIcon",
    },
    {
      title: "Targets",
      value: stats.totalTargets,
      subtitle: `${stats.activeTargets} Active`,
      icon: Target,
      bgColor: "bg-kpi-blue",
      iconColor: "bg-kpi-blueIcon",
    },
    {
      title: "Vulnerabilities",
      value: stats.totalVulnerabilities,
      subtitle: `${stats.openVulnerabilities} Open`,
      icon: AlertTriangle,
      bgColor: "bg-kpi-yellow",
      iconColor: "bg-kpi-yellowIcon",
    },
    {
      title: "Critical",
      value: stats.critical,
      subtitle: "Requires immediate action",
      icon: AlertCircle,
      bgColor: "bg-kpi-red",
      iconColor: "bg-kpi-redIcon",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <KPICard key={card.title} {...card} />
      ))}
    </div>
  );
}
