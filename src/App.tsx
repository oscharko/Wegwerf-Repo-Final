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
  'Plan update · scope recorded',
  'Workspace scan · read-only paths',
  'Patch review · staged for proof',
]

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Keiko home">
          <span className="wordmark-mark" aria-hidden="true" />
          <span>Keiko</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
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

          <div className="hero-visual panel" aria-label="Workspace overview preview">
            <div className="panel-header">
              <span className="chip chip-accent">Authority: bounded</span>
              <span className="chip">Review path: visible</span>
            </div>
            <div className="hero-console">
              <div className="console-stack panel panel-inset">
                <p className="console-label">Workspace canvas</p>
                <div className="connector-row" aria-hidden="true">
                  <span className="connector-node" />
                  <span className="connector-line" />
                  <span className="connector-node connector-node-accent" />
                </div>
                <div className="mini-panels">
                  <article className="mini-panel">
                    <p className="mini-title">Task scope</p>
                    <p className="mini-body">Issue #1 · child checks linked</p>
                  </article>
                  <article className="mini-panel raised">
                    <p className="mini-title">Proof state</p>
                    <p className="mini-body">Build ready · localhost visible</p>
                  </article>
                </div>
              </div>
              <div className="command-surface panel panel-inset">
                <div className="surface-heading-row">
                  <p className="console-label">Command surface</p>
                  <span className="chip chip-status">Checks pass</span>
                </div>
                <ul className="command-list">
                  {commandRows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="principles" className="section-stack" aria-labelledby="principles-title">
          <div className="section-heading">
            <p className="eyebrow">Core principles</p>
            <h2 id="principles-title">Calm controls for daily delivery.</h2>
          </div>
          <div className="value-grid">
            {valueCards.map((card) => (
              <article key={card.title} className="panel value-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workspace" className="section-stack" aria-labelledby="workspace-title">
          <div className="section-heading">
            <p className="eyebrow">Workspace preview</p>
            <h2 id="workspace-title">A compact surface that keeps evidence close.</h2>
          </div>
          <div className="workspace-preview panel">
            <div className="workspace-sidebar panel panel-inset">
              <p className="console-label">Sources</p>
              <span className="chip">repo_f79f · trusted</span>
              <span className="chip">Issue #5 · docs</span>
            </div>
            <div className="workspace-main panel panel-inset">
              <div className="surface-heading-row">
                <p className="console-label">Review window</p>
                <span className="chip chip-accent">Manual check: done</span>
              </div>
              <div className="workspace-lines" aria-hidden="true">
                <span className="line line-strong" />
                <span className="line" />
                <span className="line line-accent" />
                <span className="line" />
              </div>
            </div>
          </div>
        </section>

        <section id="start" className="closing panel" aria-labelledby="closing-title">
          <p className="eyebrow">Start locally</p>
          <h2 id="closing-title">A small surface for serious work.</h2>
          <a className="button button-primary" href="#top">Start the local demo</a>
        </section>
      </main>
    </div>
  )
}

export default App
