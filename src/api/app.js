const express = require('express');
const openai = require('openai');
const cors=require("cors")
const app = express();
const port = 3001; // Porta

// Evander Adriano Júnior Baptista

const gpt3ApiKey = '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'; // Minha chave API do GPT-3


app.use(express.json());
app.use(cors())

app.post('/api/gpt3', async (req, res) => {
  const { message } = req.body;

  // Evander a chamar a API do GPT-3 com a mensagem recebida
  const gpt3Response = await openai.Completion.create({
    engine: 'text-davinci-003', // Meu Modelo desejado,'text-davinci-002'
    prompt: message,
    max_tokens: 50, // Evander com número de tokens desejado para a resposta
  });

  const answer = gpt3Response.choices[0].text.trim();

  res.json({ answer });
});

app.get('/', (req, res) => {
  res.send("Api v1")
}); 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});