import Profile from '../models/FinancialProfile.js';
import fs from 'fs';
import path from 'path';

// Read JSON safely using fs instead of import assertions
const marketData = JSON.parse(
  fs.readFileSync(
    path.resolve('./data/market_data.json'), 
    'utf-8'
  )
);

export const getRecommendation = async (req, res) => {
  try {
     console.log('🔐 Authenticated user ID:', req.user);
    const profile = await Profile.findOne({ user: req.user });

    if (!profile) {
      return res.status(404).json({ error: "Financial profile not found." });
    }

    const { monthlyIncome, riskAppetite } = profile;

    const allocation = {
      High: { stocks: 70, mutualFunds: 20, fixedDeposits: 10 },
      Medium: { stocks: 40, mutualFunds: 40, fixedDeposits: 20 },
      Low: { stocks: 10, mutualFunds: 40, fixedDeposits: 50 }
    }[riskAppetite];

    const expectedReturn =
      (avg(marketData.stocks.map(s => s.growth_pct_yoy)) * allocation.stocks +
        avg(marketData.mutual_funds.map(m => m.return_pct_3y_cagr)) * allocation.mutualFunds +
        avg(marketData.fixed_deposits.map(f => f.rate_pct)) * allocation.fixedDeposits) / 100;

    res.json({ allocation, expectedReturn: expectedReturn.toFixed(2) });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
