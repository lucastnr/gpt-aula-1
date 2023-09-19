import "dotenv/config.js";
import express from "express";
import { v4 } from "uuid";
import { chat } from "./src/gpt.js";

const chats = {};

const app = express();
app.use(express.json());
app.use("/", express.static("public"));

// req -> requisição, é o que vem do cliente
// res -> resposta, é o que sai do servidor, vai pro cliente
app.get("/chat", async (req, res) => {
  try {
    const content = req.query.content;
    let id = req.query.id;

    if (!id) {
      // Gera um id aleatorio (string)
      id = v4();
      chats[id] = [];
    }
    
    chats[id].push({ role: "user", content });
    
    
    const response = await chat(chats[id]);
    const assistantMessage = response.data.choices[0].message.content;
    
    chats[id].push({ role: "assistant", content: assistantMessage })
    
    res.send({ assistantMessage, id });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
