import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export async function askInsuranceAssistant(query: string) {
  if (!apiKey) {
    console.error("DEBUG: VITE_GEMINI_API_KEY IS MISSING");
    return "系统错误：Vercel 环境变量未读取到，请确认变量名以 VITE_ 开头。";
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(query);
    const response = await result.response;
    return response.text();
    
  } catch (error: any) {
    console.error("Gemini Detail Error:", error);
    
    if (error.message?.includes("404")) {
      return "Google 报错 404：模型路径不通。这通常是 SDK 版本过旧或地区限制导致的。";
    }
    if (error.message?.includes("API key not valid")) {
      return "错误：API Key 无效，请重新从 Google AI Studio 获取。";
    }
    return `API 报错: ${error.message}`;
  }
}
