export default function SummaryOptions({ length, setLength, style, setStyle, disabled }) {
  return (
    <div className="summary-options">
      <div className="option-group">
        <label htmlFor="length">Length</label>
        <select id="length" value={length} onChange={(e) => setLength(e.target.value)} disabled={disabled}>
          <option value="short">Short (1-2 sentences)</option>
          <option value="medium">Medium (paragraph)</option>
          <option value="long">Long (detailed)</option>
        </select>
      </div>
      <div className="option-group">
        <label htmlFor="style">Style</label>
        <select id="style" value={style} onChange={(e) => setStyle(e.target.value)} disabled={disabled}>
          <option value="concise">Concise</option>
          <option value="bullets">Bullet points</option>
          <option value="friendly">Friendly</option>
        </select>
      </div>
    </div>
  )
}
