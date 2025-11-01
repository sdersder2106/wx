"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";
import { Shield } from "lucide-react";

interface ComplianceChartProps {
  data: Array<{
    name: string;
    passed: number;
    failed: number;
  }>;
}

export default function ImpactedComplianceChart({ data }: ComplianceChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">Impacted Compliance</h3>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Legend />
          <Bar 
            dataKey="passed" 
            fill="#10b981" 
            name="Passed"
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            dataKey="failed" 
            fill="#ef4444" 
            name="Failed"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
