'use client';

import { Freelancer } from '@/lib/types';
import { Award, Briefcase, Star } from 'lucide-react';

interface FreelancerCardProps {
  freelancer: Freelancer;
  matchScore?: number;
  variant?: 'compact' | 'detailed' | 'inline';
  onRefer?: (freelancerId: string) => void;
}

export function FreelancerCard({ freelancer, matchScore, variant = 'compact', onRefer }: FreelancerCardProps) {
  const getBadgeIcon = () => {
    switch (freelancer.trust_badge) {
      case 'top10':
        return <Star className="w-4 h-4 fill-accent text-accent" />;
      case 'verified':
        return <Award className="w-4 h-4 text-primary" />;
      case 'rising_star':
        return <Zap className="w-4 h-4 text-success" />;
      default:
        return null;
    }
  };

  const getBadgeLabel = () => {
    switch (freelancer.trust_badge) {
      case 'top10':
        return 'Top 10%';
      case 'verified':
        return 'Verified';
      case 'rising_star':
        return 'Rising Star';
      default:
        return null;
    }
  };

  return (
    <div className="glass-card p-5 hover:bg-opacity-80 transition-all duration-200">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{freelancer.avatar}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-lg">{freelancer.name}</h4>
            {freelancer.trust_badge !== 'none' && (
              <div className="badge-gold text-xs">
                {getBadgeIcon()}
                <span>{getBadgeLabel()}</span>
              </div>
            )}
          </div>
          <p className="text-muted text-sm line-clamp-2">{freelancer.bio}</p>
        </div>
      </div>

      {/* Quality Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted">Quality Score</span>
          <span className="text-accent font-bold text-lg">{freelancer.quality_score}/100</span>
        </div>
        <div className="w-full bg-surface rounded-full h-2">
          <div
            className="bg-accent rounded-full h-2 transition-all duration-300"
            style={{ width: `${freelancer.quality_score}%` }}
          ></div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {freelancer.skills.slice(0, 3).map((skill) => (
          <span key={skill} className="badge bg-surface text-fg border border-border text-xs">
            {skill}
          </span>
        ))}
        {freelancer.skills.length > 3 && (
          <span className="badge bg-surface text-muted border border-border text-xs">
            +{freelancer.skills.length - 3}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-4 text-sm text-muted">
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          <span>{freelancer.successful_hires} hires</span>
        </div>
        <div className="flex items-center gap-1">
          <Award className="w-4 h-4" />
          <span>{freelancer.endorsements_count} endorsements</span>
        </div>
      </div>

      {/* Match Score & Action */}
      {matchScore !== undefined && (
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="badge-success">
            <span className="font-bold">{matchScore}% Match</span>
          </div>
          <button
            onClick={() => onRefer?.(freelancer.id)}
            className="btn-primary text-sm px-4 py-2"
          >
            Refer {freelancer.name.split(' ')[0]}
          </button>
        </div>
      )}
    </div>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
