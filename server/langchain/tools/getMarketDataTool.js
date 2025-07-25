import { Tool } from "langchain/tools";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Handle __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export default getMarketDataTool;
