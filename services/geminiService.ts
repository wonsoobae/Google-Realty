import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const initChat = () => {
  if (!apiKey) {
    console.warn("API Key is missing. Chat functionality will be limited.");
    return;
  }
  
  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat session:", error);
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initChat();
    if (!chatSession) return "죄송합니다. 현재 AI 서비스를 사용할 수 없습니다. (API Key Missing)";
  }

  try {
    const response: GenerateContentResponse = await chatSession!.sendMessage({ message });
    return response.text || "죄송합니다. 답변을 생성하는데 문제가 발생했습니다.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};
