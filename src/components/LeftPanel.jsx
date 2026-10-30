export default function LeftPanel({
  models, model, onModelChange,
  classes, targetClass, onClassChange,
  onRun,
}) {
  return (
    <aside className="side">
      <h2>Select Image</h2>

      <label className="field">
        Model
        <select value={model} onChange={(e) => onModelChange(e.target.value)}>
          {models.map((m) => <option key={m}>{m}</option>)}
        </select>
      </label>
      <label className="field">
        Target class
        <select value={targetClass} onChange={(e) => onClassChange(e.target.value)}>
          {classes.map((c) => <option key={c}>{c}</option>)}
        </select>
      </label>
      <button className="btn run" onClick={onRun}>Run GradCAM Analysis</button>
    </aside>
  );
}