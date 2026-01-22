import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const combinedPrompt = `You are a professional customer service assistant for Wealth Build Consulting.
      Company Info:
      Name: ${COMPANY_INFO.name}
      Address: ${COMPANY_INFO.address}
      Email: ${COMPANY_INFO.email}
      Phone: ${COMPANY_INFO.phone}
      
      Your Goals:
      - Help with Insurance claims (Medical, Death, Motor, Travel).
      - Guide users to "Download Centre" for forms.
      - Maintain a professional tone. No financial advice.
      
      User Question: ${query}`;

    const result = await model.generateContent(combinedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini 2.0 Assistant Error:", error);
    return "I'm sorry, I'm currently having connection issues. Please try again or contact us directly.";
  }
}
