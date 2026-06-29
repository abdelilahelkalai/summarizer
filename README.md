# Text Summarizer

An AI-powered text summarizer built with React + Vite (frontend) and Express + OpenAI (backend).

## Features

- **Paste any text** — enter or paste the content you want summarized
- **Adjustable length** — choose Short, Medium, or Long summary
- **Multiple styles** — Concise, Bullet points, or Friendly tone
- **Dark UI** — clean, minimal dark theme
- **Secure API key** — OpenAI key stays server-side, never exposed to the browser

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite |
| Backend | Express.js |
| AI | OpenAI API (GPT-4o-mini) |

## Getting Started

### Prerequisites

- Node.js 18+
- An [OpenAI API key](https://platform.openai.com/api-keys)

### Install

```bash
git clone https://github.com/abdelilahelkalai/summarizer.git
cd summarizer
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

### Configure

Add your OpenAI API key to `.env`:

```
OPENAI_API_KEY=sk-your-key-here
```

### Run

```bash
npm run dev
```

This starts both the server (port 3001) and client (port 5173) concurrently. Open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
summarizer/
├── client/              # React + Vite frontend
│   └── src/
│       ├── App.jsx          # Main app with state management
│       ├── App.css          # Dark-themed styles
│       └── components/
│           ├── TextInput.jsx       # Text area
│           ├── SummaryOptions.jsx  # Length/Style dropdowns
│           └── SummaryOutput.jsx   # Summary display
├── server/              # Express backend
│   └── index.js             # OpenAI proxy endpoint
└── .env                     # API key (gitignored)
```

## API

### POST /api/summarize

Request body:
```json
{
  "text": "Text to summarize...",
  "length": "short | medium | long",
  "style": "concise | bullets | friendly"
}
```

Response:
```json
{
  "summary": "Summarized text..."
}
```

## License

MIT
