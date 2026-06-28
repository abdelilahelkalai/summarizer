export default function SummaryOutput({ summary, loading, error }) {
  if (loading) {
    return (
      <div className="summary-output">
        <h2>Summary</h2>
        <div className="loading">Generating summary...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="summary-output">
        <h2>Summary</h2>
        <div className="error">{error}</div>
      </div>
    )
  }

  if (!summary) {
    return (
      <div className="summary-output">
        <h2>Summary</h2>
        <p className="placeholder">Your summary will appear here...</p>
      </div>
    )
  }

  return (
    <div className="summary-output">
      <h2>Summary</h2>
      <div className="summary-text">{summary}</div>
    </div>
  )
}
