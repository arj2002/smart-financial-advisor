import { createGraph } from "langgraph";
import { advisorAgent } from "../agents/financialAdvisorAgent";

export const advisorGraph = createGraph({
  nodes: {
    start: { next: "getProfile" },
    getProfile: async (ctx) => {
      ctx.profile = await fetchProfile(ctx.userId);
      return "validate";
    },
    validate: (ctx) => {
      if (!ctx.profile) throw new Error("Profile missing");
      return "simulate";
    },
    simulate: async (ctx) => {
      ctx.recommendation = await simulate(ctx.profile);
      return "respond";
    },
    respond: async (ctx) => {
      return { result: ctx.recommendation };
    },
  },
  startNode: "start",
});
