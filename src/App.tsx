const valueCards = [
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

const principles = [
  'Scope is set before work starts.',
  'Authority stays visible while work runs.',
  'Delivery ends with evidence, not guesswork.',
]

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Keiko home">
          <span className="wordmark-mark" aria-hidden="true" />
          <span>Keiko</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a href="#principles">Principles</a>
            </li>
            <li>
              <a href="#workspace">Workspace</a>
            </li>
            <li>
              <a href="#start">Start</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">Governed local-first workspace</p>
            <h1>Engineering work, kept inside clear boundaries.</h1>
            <p className="hero-text">
              Keiko helps teams work with project context, delivery checks, and visible
              authority controls in one local-first workspace.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#workspace">
                View the workspace
              </a>
              <a className="button button-secondary" href="#principles">
                Read the principles
              </a>
            </div>
          </div>

          <aside className="hero-console" aria-label="Workspace status preview">
            <div className="console-window console-window-main">
              <div className="console-titlebar">
                <span>task-landing-page</span>
                <span className="status-chip success">Verified</span>
              </div>
              <div className="console-grid">
                <div className="mini-panel">
                  <p className="panel-label">Context</p>
                  <p>Issue #1 with scoped child work</p>
                </div>
                <div className="mini-panel accent-panel">
                  <p className="panel-label">Authority</p>
                  <p>Read, edit, verify, stage</p>
                </div>
                <div className="mini-panel command-list">
                  <p className="panel-label">Checks</p>
                  <code>npm install</code>
                  <code>npm run build</code>
                  <code>npm run dev</code>
                </div>
              </div>
            </div>
            <div className="connector" aria-hidden="true" />
            <div className="console-window console-window-side">
              <p className="panel-label">Decision log</p>
              <ul className="status-list">
                <li>
                  <span className="status-chip">Scope</span>
                  <span>Single page only</span>
                </li>
                <li>
                  <span className="status-chip">Review</span>
                  <span>Readable diff</span>
                </li>
                <li>
                  <span className="status-chip success">Output</span>
                  <span>Build ready</span>
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="section-stack" id="principles">
          <div className="section-heading">
            <p className="eyebrow">Principles</p>
            <h2>Calm controls for real delivery work.</h2>
          </div>
          <div className="card-grid">
            {valueCards.map((card) => (
              <article className="value-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="principles-strip">
            {principles.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className="section-stack" id="workspace">
          <div className="section-heading">
            <p className="eyebrow">Workspace</p>
            <h2>A compact surface that keeps status in view.</h2>
          </div>
          <div className="workspace-preview" role="img" aria-label="Keiko workspace preview">
            <div className="workspace-sidebar">
              <p className="panel-label">Sources</p>
              <span className="source-chip">github issue #1</span>
              <span className="source-chip">workspace files</span>
              <span className="source-chip">verification gate</span>
            </div>
            <div className="workspace-canvas">
              <div className="canvas-header">
                <span className="status-chip success">Ready</span>
                <span className="canvas-meta">localhost / build / review</span>
              </div>
              <div className="canvas-body">
                <div className="canvas-panel">
                  <p className="panel-label">Planned steps</p>
                  <ul>
                    <li>Read issue scope</li>
                    <li>Make a small change set</li>
                    <li>Verify before delivery</li>
                  </ul>
                </div>
                <div className="canvas-panel terminal-panel">
                  <p className="panel-label">Command surface</p>
                  <code>$ npm install</code>
                  <code>$ npm run build</code>
                  <code>$ npm run dev</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="closing-card section-stack" id="start">
          <p className="eyebrow">Start</p>
          <h2>A small surface for serious work.</h2>
          <p>
            Keiko keeps the task, the checks, and the authority controls in one place.
          </p>
          <a className="button button-primary" href="#top">
            Start the local demo
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
