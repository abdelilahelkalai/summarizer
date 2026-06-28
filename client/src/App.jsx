import { useState } from 'react'
import TextInput from './components/TextInput'
import SummaryOptions from './components/SummaryOptions'
import SummaryOutput from './components/SummaryOutput'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [length, setLength] = useState('medium')
  const [style, setStyle] = useState('concise')

  async function handleSummarize() {
    if (!text.trim()) return

    setLoading(true)
    setError('')
    setSummary('')

    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, length, style }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to summarize')
      }

      setSummary(data.summary)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  function handleClear() {
    setText('')
    setSummary('')
    setError('')
  }

  return (
    <div className="app">
      <header>
        <h1>Text Summarizer</h1>
        <p>Paste any text and get a concise AI-powered summary</p>
      </header>

      <main>
        <TextInput text={text} setText={setText} disabled={loading} />
        <SummaryOptions length={length} setLength={setLength} style={style} setStyle={setStyle} disabled={loading} />

        <div className="actions">
          <button onClick={handleSummarize} disabled={loading || !text.trim()}>
            {loading ? 'Summarizing...' : 'Summarize'}
          </button>
          <button className="secondary" onClick={handleClear} disabled={loading}>
            Clear
          </button>
        </div>

        <SummaryOutput summary={summary} loading={loading} error={error} />
      </main>
    </div>
  )
}

export default App
