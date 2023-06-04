const express = require('express');
const openai = require('openai');

const app = express();
const port = 3001; // Altere para a porta desejada

const gpt3ApiKey = 'sk -zfg6FMfbKYD7u94cwv6TT3BlbkFJGy 0Gn7JCrwan7n5urVWt'; // Substitua pelo sua chave API do GPT-3

app.use(express.json());

app.post('/api/gpt3', async (req, res) => {
  const { message } = req.body;

  // Chame a API do GPT-3 com a mensagem recebida
  const gpt3Response = await openai.Completion.create({
    engine: 'text-davinci-003', // Substitua pelo modelo desejado, ex.: 'text-davinci-002'
    prompt: message,
    max_tokens: 50, // Altere o número de tokens desejado para a resposta
  });

  const answer = gpt3Response.choices[0].text.trim();

  res.json({ answer });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/ChatBAIGOO.jsx');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});