import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export async function askInsuranceAssistant(query: string) {
  if (!apiKey) {
    return "❌ 部署错误：Vercel 环境变量 VITE_GEMINI_API_KEY 未生效。请检查 Vercel 设置并重新 Deploy。";
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(query);
    const response = await result.response;
    return response.text();

  } catch (error: any) {
    console.error("DEBUG ERROR:", error);
    
    if (error.message?.includes("404")) {
      return `❌ Google 接口报错 (404): 模型未找到。请确认你的 Google AI Studio 是否可以使用。`;
    }
    if (error.message?.includes("API key not valid")) {
      return "❌ API Key 无效：请重新从 Google AI Studio 获取并更新到 Vercel。";
    }
    return `❌ API 报错: ${error.message}`;
  }
}
