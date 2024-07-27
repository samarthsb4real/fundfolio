import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: ["sk-proj-PZtHKrHVllV3gWyHY5a6T3BlbkFJ8cK5cv8k3ZsnCyiilASD"],
  dangerouslyAllowBrowser: true,
});

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const userPrompt = `
    Based on the following financial data:
    - Total Budget: ${totalBudget} INR
    - Expenses: ${totalSpend} INR
    - Incomes: ${totalIncome} INR
    provide detailed financial advice in 2 sentences to help the user manage his money`;

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Ensure you are using the correct model name
      messages: [{ role: "user", content: userPrompt }],
    });

    const advice = chatCompletion.choices[0].message.content;

    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return error.message; // Return the error message as a string
  }
};

export default getFinancialAdvice;
