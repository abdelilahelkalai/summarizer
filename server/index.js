import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/summarize', async (req, res) => {
  const { text, length, style } = req.body;

  if (!text || text.trim().length === 0) {
    return res.status(400).json({ error: 'No text provided' });
  }

  const lengthMap = {
    short: 'Summarize this in 1-2 sentences.',
    medium: 'Summarize this in a short paragraph.',
    long: 'Provide a detailed summary covering the main points.',
  };

  const styleMap = {
    concise: 'Be concise and direct.',
    bullets: 'Use bullet points.',
    friendly: 'Use a friendly and accessible tone.',
  };

  const prompt = `${lengthMap[length] || lengthMap.medium} ${styleMap[style] || styleMap.concise}\n\nText:\n${text}`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that summarizes text clearly and accurately.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: length === 'short' ? 150 : length === 'long' ? 500 : 300,
    });

    const summary = completion.choices[0].message.content;
    res.json({ summary });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({
      error: 'Failed to generate summary. Please check your API key and try again.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Summarizer server running on http://localhost:${PORT}`);
});
