import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash" 
    });

    const fullPrompt = `You are a professional assistant for ${COMPANY_INFO.name}. 
    Company Address: ${COMPANY_INFO.address}.
    User Query: ${query}`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Assistant Error:", error);
    return "抱歉，助理目前无法连接，请检查配置。";
  }
}
