
import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from './constants';

const apiKey = process.env.NEXT_PUBLIC_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });
    
      const result = await model.generateContent(query);
    return result.response.text(); 
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
