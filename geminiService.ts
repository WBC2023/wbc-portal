
import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `你是 ${COMPANY_INFO.name} 的专业助理。
    公司信息：${COMPANY_INFO.address}, ${COMPANY_INFO.phone}。
    用户问题：${query}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "抱歉，我现在无法处理您的请求。";
  }
}
