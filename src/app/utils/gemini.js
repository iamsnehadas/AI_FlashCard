import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

export const getFlashcardData = async (query) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const response = await model.generateContent([query]);
    return response.response.text();
  } catch (error) {
    console.error('Error fetching data from Gemini API', error);
    throw error;
  }
};
