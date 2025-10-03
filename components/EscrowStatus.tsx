'use client';

import { CheckCircle2, Clock, Lock } from 'lucide-react';

interface EscrowStatusProps {
  status: 'escrowed' | 'released' | 'cancelled';
  amount?: number;
  txHash?: string;
  variant?: 'locked' | 'releasing' | 'completed';
}

export function EscrowStatus({ status, amount, txHash, variant }: EscrowStatusProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'escrowed':
        return {
          icon: <Lock className="w-5 h-5" />,
          label: 'Bounty Locked',
          color: 'text-warning',
          bgColor: 'bg-warning bg-opacity-20',
          borderColor: 'border-warning border-opacity-30',
        };
      case 'released':
        return {
          icon: <CheckCircle2 className="w-5 h-5" />,
          label: 'Payout Released',
          color: 'text-success',
          bgColor: 'bg-success bg-opacity-20',
          borderColor: 'border-success border-opacity-30',
        };
      case 'cancelled':
        return {
          icon: <Clock className="w-5 h-5" />,
          label: 'Cancelled',
          color: 'text-muted',
          bgColor: 'bg-surface',
          borderColor: 'border-border',
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`glass-card p-4 ${config.bgColor} border ${config.borderColor}`}>
      <div className="flex items-center gap-3">
        <div className={`${config.color}`}>
          {config.icon}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-sm">{config.label}</div>
          {amount && (
            <div className="text-accent font-bold text-lg">
              ${amount.toFixed(2)}
            </div>
          )}
        </div>
        {txHash && status === 'released' && (
          <a
            href={`https://basescan.org/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm hover:underline"
          >
            View TX
          </a>
        )}
      </div>

      {status === 'escrowed' && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="text-xs text-muted">
            Funds secured on-chain. Automatic release upon hire confirmation.
          </div>
        </div>
      )}
    </div>
  );
}
