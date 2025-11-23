import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('<h1>AI Girlfriend Server is Running 🚀</h1><p>Go to <a href="/health">/health</a> to check status.</p>');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Girlfriend Server is running' });
});

// Gemini API proxy endpoint for text generation
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt, model = 'gemini-2.5-flash' } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    res.json({ 
      text: response.text,
      success: true 
    });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ 
      error: 'Failed to generate content',
      message: error.message 
    });
  }
});

// Gemini Live API connection endpoint
app.post('/api/live/connect', async (req, res) => {
  try {
    const { systemInstruction, config } = req.body;
    
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Note: For WebSocket/streaming connections, you'll need to implement
    // WebSocket support. This is a placeholder for the connection logic.
    res.json({ 
      message: 'Live API connection endpoint - WebSocket implementation needed',
      success: true 
    });
  } catch (error) {
    console.error('Error connecting to live API:', error);
    res.status(500).json({ 
      error: 'Failed to connect to live API',
      message: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});
