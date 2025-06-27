import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { OpenAI } from 'openai';
import fetch from 'node-fetch';
import 'dotenv/config';


const app = express();
const port = 3001;

app.use(cors())
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
    try {
        const {messages} = req.body;
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: "system", content: "You are a supportive AI therapist. Respond in a calm, thoughtful, and encouraging tone." },
        ...messages,
            ],
            temperature: 0.7,
        });
        const reply = response.choices[0].message.content;
        res.json({reply});
    } catch (error) {
        console.error("OpenAI Call Error: ", error)
    }
});

app.listen(port, () => {
  console.log(`GPT-4 backend listening on http://localhost:${port}`);
});