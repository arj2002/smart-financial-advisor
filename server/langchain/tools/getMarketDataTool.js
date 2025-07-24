const { Tool } = require("langchain/tools");
const fs = require("fs");
const path = require("path");

const getMarketDataTool = new Tool({
  name: "get_market_data",
  description: "Returns mock market data from JSON",
  func: async () => {
    try {
      const dataPath = path.join(__dirname, "../../data/market_data.json");
      const rawData = fs.readFileSync(dataPath, "utf-8");
      return rawData;
    } catch (err) {
      return `Error reading market data: ${err.message}`;
    }
  },
});

module.exports = getMarketDataTool;