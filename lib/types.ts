export interface User {
  id: string;
  fid: string;
  baseWallet: string;
  username: string;
  reputation_score: number;
  total_earnings: number;
  successful_referrals: number;
  conversion_rate: number;
  created_at: Date;
}

export interface Freelancer {
  id: string;
  fid: string;
  baseWallet: string;
  name: string;
  skills: string[];
  quality_score: number;
  trust_badge: 'verified' | 'top10' | 'rising_star' | 'none';
  successful_hires: number;
  endorsements_count: number;
  bio: string;
  portfolio_url?: string;
  avatar?: string;
  created_at: Date;
}

export interface JobOpportunity {
  id: string;
  poster_fid: string;
  title: string;
  description: string;
  required_skills: string[];
  bounty_amount: number;
  escrow_contract_address?: string;
  status: 'open' | 'filled' | 'expired';
  deadline: Date;
  urgency_level: 'low' | 'medium' | 'high';
  created_at: Date;
}

export interface Referral {
  id: string;
  referrer_id: string;
  freelancer_id: string;
  job_opportunity_id: string;
  match_score: number;
  endorsement_text: string;
  status: 'pending' | 'accepted' | 'hired' | 'rejected';
  bounty_status: 'escrowed' | 'released' | 'cancelled';
  payout_amount?: number;
  payout_tx_hash?: string;
  created_at: Date;
  hired_at?: Date;
}

export interface Notification {
  id: string;
  user_id: string;
  type: 'referral_submitted' | 'bounty_escrowed' | 'payout_released' | 'new_opportunity' | 'match_found';
  title: string;
  message: string;
  action_url?: string;
  read: boolean;
  created_at: Date;
}
