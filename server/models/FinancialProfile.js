import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  name: String,
  monthlyIncome: Number,
  monthlyExpenses: Number,
  riskAppetite: String,
  financialGoal: String,
  investmentHorizon: Number
});

const FinancialProfile = mongoose.model('FinancialProfile', profileSchema);

export default FinancialProfile;
