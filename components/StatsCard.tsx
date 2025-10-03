'use client';

import { TrendingUp } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string | number;
  trend?: number;
  icon?: React.ReactNode;
}

export function StatsCard({ label, value, trend, icon }: StatsCardProps) {
  return (
    <div className="glass-card p-5 hover:bg-opacity-80 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="text-muted text-sm">{label}</div>
        {icon && <div className="text-accent">{icon}</div>}
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      {trend !== undefined && (
        <div className={`flex items-center gap-1 text-sm ${trend >= 0 ? 'text-success' : 'text-error'}`}>
          <TrendingUp className="w-4 h-4" />
          <span>{trend >= 0 ? '+' : ''}{trend}%</span>
        </div>
      )}
    </div>
  );
}
