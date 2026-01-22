
import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash-preview',
    }];

const prompt = `You are an assistant for ${COMPANY_INFO.name}. 
    Contact: ${COMPANY_INFO.phone}, ${COMPANY_INFO.email}.
    User asked: ${query}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "抱歉，系统暂时无法回复，请稍后再试。";
  }
}
