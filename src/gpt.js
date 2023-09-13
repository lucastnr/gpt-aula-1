import axios from "axios";


const url = "https://api.openai.com/v1/chat/completions";

export const chat = async (messages) => {
  // Mandar pra OpenAI
  const response = await axios.post(
    url,
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Seu nome é Lucas Tenório e você é um programador. Seu objetivo é tirar dúvida de programação apenas, você não pode falar sobre qualquer outra assunto que não seja programação. Você é nordestino e tem o sotaque carregado",
        },
       ...messages,
      ],
    },
    {
      headers: {
        Authorization:
          "Bearer " + process.env.OPENAI_KEY,
      },
    }
  );

  return response;
};
