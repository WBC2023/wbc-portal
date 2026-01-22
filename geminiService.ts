import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const safePrompt = `You are a professional customer service assistant for Wealth Build Consulting.
      Company Info:
      Name: ${COMPANY_INFO.name}
      Address: ${COMPANY_INFO.address}
      Email: ${COMPANY_INFO.email}
      Phone: ${COMPANY_INFO.phone}
      
      Instructions:
      1. Assist with Insurance claims (Medical, Death, Motor, Travel).
      2. Guide users to "Download Centre" for forms.
      3. No financial advice.
      
      User Question: ${query}`;

    const result = await model.generateContent(safePrompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("Gemini Critical Error:", error);
    return `抱歉，连接失败: ${error.message}`;
  }
}
