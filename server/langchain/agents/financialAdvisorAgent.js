// server/langchain/agents/financialAdvisorAgent.js

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { AgentExecutor } from "langchain/agents";
import tools from "../tools/index.js";
import { investmentPrompt } from "../promptTemplates";

// Load environment variables
import "dotenv/config";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",  // or "gemini-1.5-pro"
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.3,
  maxOutputTokens: 2048,
});

export const advisorAgent = await AgentExecutor.fromLLMAndTools({
  llm,
  tools,
  prompt: investmentPrompt,
});
