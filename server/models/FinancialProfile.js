const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  name: String,
  monthlyIncome: Number,
  monthlyExpenses: Number,
  riskAppetite: String,
  financialGoal: String,
  investmentHorizon: Number
});

module.exports = mongoose.model('FinancialProfile', profileSchema);
