const { advisorAgent } = await import('../langchain/agents/financialAdvisorAgent');
// or
const { advisorGraph } = await import('../langchain/graphs/financialAdvisorGraph');

exports.askAgent = async (req, res) => {
  const { question } = req.body;
  try {
    const result = await advisorAgent.invoke({ input: question, userId: req.user });
    // or: const result = await advisorGraph.run({ userId: req.user, question });
    res.json({ response: result.output });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
