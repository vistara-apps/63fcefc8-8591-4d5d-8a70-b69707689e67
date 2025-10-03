'use client';

import { JobOpportunity } from '@/lib/types';
import { Clock, DollarSign, Zap } from 'lucide-react';

interface BountyCardProps {
  job: JobOpportunity;
  variant?: 'featured' | 'standard' | 'minimal';
  onViewMatches?: (jobId: string) => void;
}

export function BountyCard({ job, variant = 'standard', onViewMatches }: BountyCardProps) {
  const urgencyColors = {
    high: 'text-error',
    medium: 'text-warning',
    low: 'text-success',
  };

  const isFeatured = variant === 'featured';

  return (
    <div className={`glass-card p-6 hover:bg-opacity-80 transition-all duration-200 ${isFeatured ? 'border-2 border-accent shadow-glow' : ''}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-muted text-sm line-clamp-2">{job.description}</p>
        </div>
        <div className={`badge-gold ml-4 ${isFeatured ? 'text-lg px-4 py-2' : ''}`}>
          <DollarSign className="w-4 h-4" />
          <span className="font-bold">${job.bounty_amount}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.required_skills.slice(0, 4).map((skill) => (
          <span key={skill} className="badge bg-surface text-fg border border-border">
            {skill}
          </span>
        ))}
        {job.required_skills.length > 4 && (
          <span className="badge bg-surface text-muted border border-border">
            +{job.required_skills.length - 4} more
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{Math.ceil((job.deadline.getTime() - Date.now()) / (1000 * 60 * 60 * 24))}d left</span>
          </div>
          <div className={`flex items-center gap-1 ${urgencyColors[job.urgency_level]}`}>
            <Zap className="w-4 h-4" />
            <span className="capitalize">{job.urgency_level}</span>
          </div>
        </div>

        <button
          onClick={() => onViewMatches?.(job.id)}
          className="btn-primary text-sm px-4 py-2"
        >
          View Matches
        </button>
      </div>

      {/* Escrow Badge */}
      {job.escrow_contract_address && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-success text-sm">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            <span className="font-medium">Bounty Escrowed</span>
          </div>
        </div>
      )}
    </div>
  );
}
