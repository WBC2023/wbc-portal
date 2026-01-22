
import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash-preview',
        systemInstruction: `
          You are a professional customer service assistant for Wealth Build Consulting, an insurance consulting agency.
          Company Information:
          Name: ${COMPANY_INFO.name}
          Address: ${COMPANY_INFO.address}
          Email: ${COMPANY_INFO.email}
          Phone: ${COMPANY_INFO.phone}
          
          You assist customers with:
          1. Insurance claim requirements (Medical, Death, Motor, Travel).
          2. Customer service request forms.
          3. eConnect (Great Eastern) portal user guides.
          
          Guidelines:
          - Be polite, professional, and helpful.
          - If the user asks about specific company details, use the provided info.
          - If the user asks about recent insurance trends or news, use Google Search grounding.
          - If user needs a form, mention it can be found in the "Download Centre".
          - Do not provide financial advice, only administrative guidance.
        `,
       
   const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: query }] }],
      tools: [{ googleSearch: {} }],
    });

      const response = await result.response;
    return response.text();

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
