export default function TextInput({ text, setText, disabled }) {
  return (
    <div className="text-input">
      <label htmlFor="text">Paste or type the text you want to summarize:</label>
      <textarea
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        rows={10}
        disabled={disabled}
      />
      <p className="char-count">{text.length} characters</p>
    </div>
  )
}
