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

const commandRows = [
  'plan -> discover -> read -> edit -> verify',
  'scope: repo_f79f1928 / authority: selected',
  'verification: build ready / evidence recorded',
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
            <li><a href="#principles">Principles</a></li>
            <li><a href="#workspace">Workspace</a></li>
            <li><a href="#start">Start</a></li>
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Governed local-first workspace</p>
            <h1 id="hero-title">Engineering work, kept inside clear boundaries.</h1>
            <p className="hero-text">
              Keiko helps teams work with project context, delivery checks, and visible authority
              controls in one local-first workspace.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#workspace">View the workspace</a>
              <a className="button button-secondary" href="#principles">Read the principles</a>
            </div>
          </div>

          <div className="console-card" aria-label="Workspace visual preview">
            <div className="console-header">
              <span className="status-chip">governed run</span>
              <span className="status-chip status-chip-muted">localhost</span>
            </div>
            <div className="console-layout">
              <article className="panel panel-floating">
                <p className="panel-label">Task</p>
                <h2>Epic #1</h2>
                <p className="panel-copy">Landing page scoped to one repo, four child issues, one review path.</p>
              </article>
              <article className="panel panel-stack">
                <p className="panel-label">Authority</p>
                <ul className="signal-list">
                  <li><span className="signal-dot" /> bounded files</li>
                  <li><span className="signal-dot" /> visible verification</li>
                  <li><span className="signal-dot" /> staged delivery</li>
                </ul>
              </article>
              <div className="connector connector-horizontal" aria-hidden="true" />
              <div className="connector connector-vertical" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="section-block" id="principles" aria-labelledby="principles-title">
          <div className="section-heading">
            <p className="eyebrow">Principles</p>
            <h2 id="principles-title">Small controls. Clear evidence.</h2>
          </div>
          <div className="card-grid">
            {valueCards.map((card) => (
              <article className="info-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="workspace" aria-labelledby="workspace-title">
          <div className="section-heading">
            <p className="eyebrow">Workspace</p>
            <h2 id="workspace-title">A compact surface for governed delivery.</h2>
          </div>
          <div className="workspace-preview">
            <aside className="workspace-sidebar panel">
              <p className="panel-label">Sources</p>
              <div className="sidebar-chip-row">
                <span className="status-chip">repo</span>
                <span className="status-chip status-chip-muted">issue #1</span>
              </div>
              <p className="mono-note">context stays local</p>
            </aside>
            <div className="workspace-canvas panel-floating">
              <div className="canvas-topline">
                <span className="status-chip">verification passing</span>
                <span className="mono-note">review path visible</span>
              </div>
              <div className="command-list" role="list" aria-label="Workspace command preview">
                {commandRows.map((row) => (
                  <div className="command-row" key={row} role="listitem">
                    <span className="command-prompt">$</span>
                    <span>{row}</span>
                  </div>
                ))}
              </div>
              <div className="review-strip">
                <div>
                  <p className="panel-label">Selected files</p>
                  <p>App.tsx, styles.css, README.md</p>
                </div>
                <div>
                  <p className="panel-label">Status</p>
                  <p>ready for review</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block closing-block" id="start" aria-labelledby="start-title">
          <p className="eyebrow">Start</p>
          <h2 id="start-title">A small surface for serious work.</h2>
          <a className="button button-primary" href="#top">Start the local demo</a>
        </section>
      </main>
    </div>
  )
}

export default App
