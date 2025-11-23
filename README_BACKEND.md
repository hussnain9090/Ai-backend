# AI Girlfriend - Backend

Express.js backend server for the AI Girlfriend application, providing AI chat capabilities, memory management, mood tracking, and voice synthesis.

## 🔗 Related Repository

**Frontend Repository**: [Link to your frontend repository here]

## ✨ Features

- 🤖 AI-powered chat using Google Gemini API
- 💾 Conversation memory and context management
- 😊 Dynamic mood tracking and personality adaptation
- 🔊 Text-to-Speech integration
- 🎤 Speech-to-Text support
- 🌐 Multi-language support (English + Roman Urdu)
- 🔒 CORS-enabled API
- ⚡ Fast response times

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/ai-gf-backend.git
cd ai-gf-backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your API keys:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```env
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Getting API Keys

1. **Google Gemini API**:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env` file

## 📁 Project Structure

```
server/
├── index.js            # Main server file
├── .env.example        # Environment variables template
├── .env                # Your environment variables (not committed)
├── package.json        # Dependencies
└── README.md           # This file
```

## 🌐 API Endpoints

### POST `/api/chat`

Send a message to the AI girlfriend.

**Request Body:**
```json
{
  "message": "Hello!",
  "conversationHistory": [],
  "userMood": "happy"
}
```

**Response:**
```json
{
  "reply": "Hi there! 😊",
  "mood": "happy",
  "timestamp": "2025-11-23T16:48:49Z"
}
```

### GET `/health`

Check server health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-11-23T16:48:49Z"
}
```

## 🚀 Deployment

### Deploy to Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your repository
3. Add environment variables
4. Deploy

### Deploy to Railway

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Deploy to Heroku

```bash
heroku create your-app-name
heroku config:set GEMINI_API_KEY=your_key_here
git push heroku main
```

## 🔒 Security

- Never commit `.env` file
- Use environment variables for all sensitive data
- Enable CORS only for trusted origins in production
- Implement rate limiting for production
- Use HTTPS in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

[Your License Here]

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   - Change the PORT in `.env`
   - Or kill the process using the port

2. **API key errors**:
   - Verify your Gemini API key is correct
   - Check API quota limits

3. **CORS errors**:
   - Update `CORS_ORIGIN` in `.env`
   - Ensure frontend URL is whitelisted

## 📞 Support

For issues related to:
- **Backend/API**: Open an issue in this repository
- **Frontend/UI**: Open an issue in the frontend repository
