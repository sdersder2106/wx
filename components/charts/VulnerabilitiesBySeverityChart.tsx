"use client";

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts";
import { Info } from "lucide-react";

interface SeverityChartProps {
  data: Array<{
    month: string;
    critical: number;
    high: number;
    medium: number;
    low: number;
  }>;
}

export default function VulnerabilitiesBySeverityChart({ data }: SeverityChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Info className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">Vulnerabilities by Severity</h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="month" 
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 'auto']}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Radar
            name="Critical"
            dataKey="critical"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.3}
          />
          <Radar
            name="High"
            dataKey="high"
            stroke="#f59e0b"
            fill="#f59e0b"
            fillOpacity={0.3}
          />
          <Radar
            name="Medium"
            dataKey="medium"
            stroke="#eab308"
            fill="#eab308"
            fillOpacity={0.3}
          />
          <Radar
            name="Low"
            dataKey="low"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.3}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
