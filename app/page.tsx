'use client';

import { Header } from '@/components/Header';
import { StatsCard } from '@/components/StatsCard';
import { BountyCard } from '@/components/BountyCard';
import { FreelancerCard } from '@/components/FreelancerCard';
import { EscrowStatus } from '@/components/EscrowStatus';
import { mockJobs, mockFreelancers, mockUserStats, mockReferrals } from '@/lib/mock-data';
import { DollarSign, TrendingUp, Users, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleViewMatches = (jobId: string) => {
    setSelectedJob(jobId);
  };

  const handleRefer = (freelancerId: string) => {
    alert(`Referral submitted for freelancer ${freelancerId}! Bounty escrowed.`);
  };

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      <Header />

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatsCard
          label="Total Earnings"
          value={`$${mockUserStats.total_earnings.toFixed(2)}`}
          trend={12}
          icon={<DollarSign className="w-5 h-5" />}
        />
        <StatsCard
          label="Successful Referrals"
          value={mockUserStats.successful_referrals}
          icon={<Users className="w-5 h-5" />}
        />
        <StatsCard
          label="Conversion Rate"
          value={`${mockUserStats.conversion_rate}%`}
          trend={5}
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatsCard
          label="Pending Bounties"
          value={`$${mockUserStats.pending_bounties}`}
          icon={<Zap className="w-5 h-5" />}
        />
      </div>

      {/* Active Referrals */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Active Referrals</h2>
        <div className="space-y-4">
          {mockReferrals.map((referral) => {
            const freelancer = mockFreelancers.find(f => f.id === referral.freelancer_id);
            const job = mockJobs.find(j => j.id === referral.job_opportunity_id);
            
            return (
              <div key={referral.id} className="glass-card p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{job?.title}</h3>
                    <p className="text-muted text-sm">Referred: {freelancer?.name}</p>
                  </div>
                  <div className="badge-primary">
                    {referral.status === 'hired' ? '✓ Hired' : '⏳ Pending'}
                  </div>
                </div>
                <EscrowStatus
                  status={referral.bounty_status}
                  amount={referral.payout_amount}
                  txHash={referral.payout_tx_hash}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Bounty Marketplace */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Bounty Marketplace</h2>
          <button className="text-accent text-sm font-medium hover:underline">
            View All →
          </button>
        </div>
        <div className="space-y-4">
          {mockJobs.map((job, index) => (
            <BountyCard
              key={job.id}
              job={job}
              variant={index === 0 ? 'featured' : 'standard'}
              onViewMatches={handleViewMatches}
            />
          ))}
        </div>
      </section>

      {/* AI Matches */}
      {selectedJob && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Matches from Your Network</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockFreelancers.map((freelancer, index) => (
              <FreelancerCard
                key={freelancer.id}
                freelancer={freelancer}
                matchScore={94 - index * 3}
                onRefer={handleRefer}
              />
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="glass-card p-8 text-center border-2 border-accent shadow-glow">
        <h2 className="text-2xl font-bold mb-3">Ready to Earn More?</h2>
        <p className="text-muted mb-6">
          Connect your network and start earning crypto bounties for successful referrals
        </p>
        <button className="btn-primary text-lg px-8 py-4">
          Browse All Opportunities
        </button>
      </section>
    </div>
  );
}
