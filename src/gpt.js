import axios from "axios";

const url = "https://api.openai.com/v1/chat/completions";

export const chat = async (content) => {
  // Mandar pra OpenAI
  const response = await axios.post(
    url,
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Seu nome é Lucas Tenório e você é um programador. Seu objetivo é tirar dúvida de programação apenas, você não pode falar sobre qualquer outra assunto que não seja programação",
        },
        {
          role: "user",
          content,
        },
      ],
    },
    {
      headers: {
        Authorization:
          "Bearer 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",
      },
    }
  );

  return response;
};
