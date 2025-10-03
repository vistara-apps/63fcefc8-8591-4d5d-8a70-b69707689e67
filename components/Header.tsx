'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Bell, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="glass-card mb-6">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">💰</div>
          <div>
            <h1 className="text-xl font-bold text-accent">RefReward</h1>
            <p className="text-xs text-muted">Earn crypto for referrals</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-surface rounded-lg transition-colors duration-200 relative">
            <Bell className="w-5 h-5" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></div>
          </button>

          <Wallet>
            <ConnectWallet>
              <div className="flex items-center gap-2 glass-card px-3 py-2">
                <Avatar className="w-6 h-6" />
                <Name className="text-sm font-medium" />
              </div>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
