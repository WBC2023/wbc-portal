import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

// 确保你已在 Vercel 设置了 VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    // 关键修正：使用最基础的模型获取方式，避开 API 版本冲突
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a professional insurance assistant for ${COMPANY_INFO.name}. 
    Company details: ${COMPANY_INFO.address}.
    Please answer the following user question: ${query}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
}
