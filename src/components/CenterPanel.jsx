export default function CenterPanel({ layer }) {
  return (
    <main className="center">
      <header>
        <h1>GradCAM <span>Explorer</span></h1>
        <p>Visualize what your CNN sees</p>
      </header>

      <div className="stats">
        {/* <div className="chip">{layer}</div> */}
      </div>

      <div className="viz">
        <section className="card"><h3>Feature Maps</h3></section>
        <section className="card"><h3>GradCAM Heatmap</h3></section>
      </div>

      <section className="card calc">
        <h3>Calculations</h3>
        <p>Descriptions of gradient computation</p>
      </section>
    </main>
  );
}