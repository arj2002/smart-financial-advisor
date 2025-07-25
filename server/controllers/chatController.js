export const askAgent = async (req, res) => {
  const { question } = req.body;

  try {
    // Dynamically import inside the function
    const { advisorAgent } = await import('../langchain/agents/financialAdvisorAgent.js');
    // Or if using graph
    // const { advisorGraph } = await import('../langchain/graphs/financialAdvisorGraph.js');

    const result = await advisorAgent.invoke({
      input: question,
      userId: req.user
    });

    // If using graph:
    // const result = await advisorGraph.run({ userId: req.user, question });

    res.json({ response: result.output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
