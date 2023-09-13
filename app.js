import express from "express";
import { chat } from "./src/gpt";

const app = express();
app.use(express.json());
app.use("/", express.static("public"));

app.get("/chat", async (req, res) => {
  const response = await chat("Oi, tudo bem?");
  res.send(response.data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});