import { GoogleGenerativeAI } from "@google/generative-ai";
import { COMPANY_INFO } from "./constants";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askInsuranceAssistant(query: string) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are a professional customer service assistant for Wealth Build Consulting, an insurance consulting agency.
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
        - If user needs a form, mention it can be found in the "Download Centre".
        - Do not provide financial advice, only administrative guidance.`
    });

    const result = await model.generateContent(query);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly.";
  }
}
