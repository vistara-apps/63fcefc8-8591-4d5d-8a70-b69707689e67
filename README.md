# RefReward - Base MiniApp

Get paid crypto bounties for connecting great freelancers to opportunities through your social network.

## Features

- 💰 **Guaranteed Escrow Payouts** - Smart contract ensures you get paid automatically
- 🤖 **AI Network Matcher** - Finds the best freelancers in your network instantly
- 📊 **Quality Scoring** - Pre-vetted freelancer ratings protect your reputation
- 🎯 **One-Tap Referrals** - Submit referrals directly in Farcaster frames
- 📈 **Referral Portfolio** - Build your on-chain referrer brand

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base L2 with OnchainKit
- **Styling**: Tailwind CSS with custom finance theme
- **Identity**: Farcaster integration via MiniKit
- **Wallet**: Base Wallet with smart contract escrow

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Architecture

- `/app` - Next.js pages and layouts
- `/components` - Reusable UI components
- `/lib` - Types, utilities, and mock data

## Key Components

- **BountyCard** - Displays job opportunities with bounty amounts
- **FreelancerCard** - Shows freelancer profiles with quality scores
- **EscrowStatus** - Real-time escrow and payout tracking
- **StatsCard** - User earnings and performance metrics

## Smart Contract Integration

Escrow system ensures:
- Bounties locked on-chain when jobs posted
- Automatic release to referrer on hire confirmation
- 85% to referrer, 15% platform fee
- Zero payment disputes

## License

MIT
