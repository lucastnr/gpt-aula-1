import axios from "axios";

const url = "https://api.openai.com/v1/chat/completions";

export const chat = async (content) => {
  // Mandar pra OpenAI
  const response = await axios.post(url, {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content
      }
    ]
  });

  return response;
};
