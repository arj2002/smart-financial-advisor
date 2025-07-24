import { ChatOpenAI } from "langchain/chat_models/openai";
import { AgentExecutor } from "langchain/agents";
import tools from "../tools";
import { investmentPrompt } from "../promptTemplates";

const llm = new ChatOpenAI({ modelName: "gpt-4" });

export const advisorAgent = new AgentExecutor({
  llm,
  tools,
  prompt: investmentPrompt,
});
