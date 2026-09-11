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
  'Visible scope before execution',
  'Local context that stays inspectable',
  'Checks that make delivery reviewable',
]

const commandRows = [
  'plan → bounded workspace scan',
  'read → review the selected files',
  'edit → patch only the stated paths',
  'verify → build before delivery',
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
          <ul className="nav-list">
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
              Keiko helps teams work with project context, delivery checks, and visible authority
              controls in one local-first workspace.
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

          <aside className="console" aria-label="Workspace overview preview">
            <div className="console-panel console-topline">
              <span className="chip chip-source">local-first</span>
              <span className="chip chip-status">status: bounded</span>
            </div>
            <div className="console-flow" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="console-columns">
              <section className="console-panel console-stack">
                <h2>Workspace</h2>
                <p>Project context loaded</p>
                <ul className="console-list">
                  <li>scope: selected files only</li>
                  <li>authority: operator reviewed</li>
                  <li>checks: build required</li>
                </ul>
              </section>
              <section className="console-panel console-stack console-mono-panel">
                <h2>Delivery path</h2>
                <ul className="command-list">
                  {commandRows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </section>
            </div>
          </aside>
        </section>

        <section id="principles" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Principles</p>
            <h2>Small surfaces. Clear control.</h2>
          </div>
          <div className="card-grid">
            {valueCards.map((card) => (
              <article className="value-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <ul className="principles-list" aria-label="Keiko principles summary">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="workspace" className="section-block workspace-section">
          <div className="section-heading">
            <p className="eyebrow">Workspace</p>
            <h2>A compact view of governed delivery.</h2>
            <p>A practical canvas for context, commands, and checks.</p>
          </div>
          <div className="workspace-preview" role="img" aria-label="Static Keiko workspace preview">
            <div className="preview-sidebar">
              <span className="chip chip-status">review path</span>
              <div className="preview-card inset-card">
                <p className="panel-label">sources</p>
                <strong>repo · issue · notes</strong>
              </div>
              <div className="preview-card">
                <p className="panel-label">authority</p>
                <strong>explicit approval</strong>
              </div>
            </div>
            <div className="preview-main">
              <div className="preview-window">
                <div className="window-bar">
                  <span className="window-dot" />
                  <span className="window-title">task workspace</span>
                </div>
                <div className="preview-grid-lines" />
                <div className="preview-nodes">
                  <div className="preview-node accent-node">plan</div>
                  <div className="preview-node">read</div>
                  <div className="preview-node">edit</div>
                  <div className="preview-node">verify</div>
                </div>
              </div>
              <div className="preview-log console-mono-panel">
                <p>build passed · localhost ready · diff reviewable</p>
              </div>
            </div>
          </div>
        </section>

        <section id="start" className="section-block closing-card">
          <p className="eyebrow">Start</p>
          <h2>A small surface for serious work.</h2>
          <a className="button button-primary" href="#top">
            Start the local demo
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
