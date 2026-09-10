const values = [
  {
    title: 'Bounded authority',
    body: 'Tasks start with visible scope, selected autonomy, and clear limits.',
  },
  {
    title: 'Local-first context',
    body: 'Project files, decisions, and evidence stay close to the workspace.',
  },
  {
    title: 'Reviewable delivery',
    body: 'Changes are easier to inspect because the path from task to result stays small.',
  },
]

const commandRows = [
  'plan.read epic #1',
  'workspace.search landing page criteria',
  'verify.build npm run build',
]

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keiko home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">Keiko</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li><a href="#principles">Principles</a></li>
            <li><a href="#workspace">Workspace</a></li>
            <li><a href="#start">Start</a></li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">Governed local-first workspace</p>
            <h1>Engineering work, kept inside clear boundaries.</h1>
            <p className="hero-text">
              Keiko helps teams work with project context, delivery checks, and visible authority
              controls in one local-first workspace.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="#workspace">View the workspace</a>
              <a className="button button-secondary" href="#principles">Read the principles</a>
            </div>
          </div>

          <div className="hero-visual panel" aria-label="Workspace status preview">
            <div className="panel-topline">
              <span className="chip chip-source">local source</span>
              <span className="chip chip-status">checks ready</span>
            </div>
            <div className="visual-columns">
              <div className="mini-panel inset-panel">
                <p className="panel-label">authority</p>
                <strong>bounded task</strong>
                <span>selected files · build gate · clear exit</span>
              </div>
              <div className="connector" aria-hidden="true" />
              <div className="mini-panel raised-panel">
                <p className="panel-label">delivery</p>
                <ul className="status-list">
                  <li><span>scope</span><strong>visible</strong></li>
                  <li><span>review</span><strong>small diff</strong></li>
                  <li><span>proof</span><strong>recorded</strong></li>
                </ul>
              </div>
            </div>
            <div className="command-log">
              {commandRows.map((row) => (
                <div className="command-row" key={row}>
                  <span>&gt;</span>
                  <code>{row}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-stack" id="principles">
          <div className="section-heading">
            <p className="eyebrow">Principles</p>
            <h2>Controls that stay readable.</h2>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card panel" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-stack" id="workspace">
          <div className="section-heading">
            <p className="eyebrow">Workspace</p>
            <h2>A compact surface for task context and delivery checks.</h2>
          </div>
          <div className="workspace-preview panel">
            <aside className="workspace-sidebar inset-panel">
              <p className="panel-label">sources</p>
              <div className="sidebar-chip">issue #1 · ready</div>
              <div className="sidebar-chip">repo files · bounded</div>
              <div className="sidebar-chip">build proof · pending</div>
            </aside>
            <div className="workspace-canvas">
              <div className="canvas-card raised-panel">
                <p className="panel-label">task canvas</p>
                <h3>Landing page delivery</h3>
                <p>Read issues, edit a small set of files, then verify the result.</p>
              </div>
              <div className="canvas-flow" aria-hidden="true">
                <span className="flow-node">discover</span>
                <span className="flow-line" />
                <span className="flow-node">edit</span>
                <span className="flow-line" />
                <span className="flow-node">verify</span>
              </div>
              <div className="canvas-log inset-panel">
                <p className="panel-label">command surface</p>
                {commandRows.map((row) => (
                  <div className="command-row" key={`preview-${row}`}><span>&gt;</span><code>{row}</code></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="closing panel" id="start">
          <div>
            <p className="eyebrow">Start</p>
            <h2>A small surface for serious work.</h2>
          </div>
          <a className="button button-primary" href="#top">Start the local demo</a>
        </section>
      </main>
    </div>
  )
}

export default App
