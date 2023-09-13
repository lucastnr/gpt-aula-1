import express from "express";
import { chat } from "./src/gpt.js";

const app = express();
app.use(express.json());
app.use("/", express.static("public"));

// req -> requisição, é o que vem do cliente
// res -> resposta, é o que sai do servidor, vai pro cliente
app.get("/chat", async (req, res) => {
  try {
    const content = req.query.content;

    const response = await chat(content);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
