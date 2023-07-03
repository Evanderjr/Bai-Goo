const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const bodyParser = require('body-parser');
const cors=require("cors")
const app = express();
const port = 3001; // Porta

// Evander Adriano Júnior Baptista

const gpt3ApiKey = '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'; // Minha chave API do GPT-3

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors())

app.post('/api/gpt3', async (req, res) => {
  const { message } = req.body;


  
  const configuration = new Configuration({
    apiKey: gpt3ApiKey,
  });

  const openai = new OpenAIApi(configuration);
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: message}],
  });

 res.json({ answer: chatCompletion.choices[0].message.content });

;
});

app.get('/', (req, res) => {
  res.send("Api v1")
}); 

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});