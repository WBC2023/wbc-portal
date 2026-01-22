import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are a professional insurance assistant for ${COMPANY_INFO.name}. 
      Your goals:
      1. Help users understand insurance policies.
      2. Provide info about ${COMPANY_INFO.address}.
      3. Maintain a helpful and professional tone.
      
      Constraints:
      - Do not provide legal advice.
      - Refer complex claims to ${COMPANY_INFO.phone}.` 
    });

    const result = await model.generateContent(query);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "助理目前无法回答，请检查 API 配置或网络。";
  }
}
