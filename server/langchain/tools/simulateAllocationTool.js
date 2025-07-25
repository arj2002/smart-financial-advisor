import { Tool } from "langchain/tools";

const simulateAllocationTool = new Tool({
  name: "simulate_allocation",
  description:
    "Simulates investment allocation based on risk appetite (low/medium/high)",
  func: async (riskLevel) => {
    try {
      let allocation = {};
      let expectedReturn = 0;

      switch (riskLevel.toLowerCase()) {
        case "high":
          allocation = { stocks: 70, mutualFunds: 20, fixedDeposits: 10 };
          expectedReturn = 12;
          break;
        case "medium":
          allocation = { stocks: 40, mutualFunds: 40, fixedDeposits: 20 };
          expectedReturn = 9;
          break;
        default:
          allocation = { stocks: 10, mutualFunds: 40, fixedDeposits: 50 };
          expectedReturn = 6;
      }

      return JSON.stringify({ allocation, expectedReturn });
    } catch (err) {
      return `Error in allocation simulation: ${err.message}`;
    }
  },
});

export default simulateAllocationTool;
