import Profile from '../models/FinancialProfile.js';
const data = await import('../data/market_data.json', {
  assert: { type: 'json' }
});


export const getRecommendation = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user });

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
      (avg(data.stocks.map(s => s.growth_pct_yoy)) * allocation.stocks +
        avg(data.mutual_funds.map(m => m.return_pct_3y_cagr)) * allocation.mutualFunds +
        avg(data.fixed_deposits.map(f => f.rate_pct)) * allocation.fixedDeposits) / 100;

    res.json({ allocation, expectedReturn: expectedReturn.toFixed(2) });
  } catch (error) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
};

const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
