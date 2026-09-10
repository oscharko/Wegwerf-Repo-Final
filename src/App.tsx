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

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Keiko home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Keiko</span>
        </a>
        <nav aria-label="Primary">
          <a href="#principles">Principles</a>
          <a href="#workspace">Workspace</a>
          <a href="#start">Start</a>
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
            <div className="actions">
              <a className="button button-primary" href="#workspace">
                View the workspace
              </a>
              <a className="button button-secondary" href="#principles">
                Read the principles
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Workspace visual preview">
            <div className="panel-toolbar">
              <span className="chip chip-accent">scope: landing-page</span>
              <span className="chip">status: ready</span>
            </div>
            <div className="flow-map">
              <div className="mini-panel">
                <span className="panel-label">source</span>
                <strong>repo_f79f1928</strong>
              </div>
              <div className="connector" aria-hidden="true" />
              <div className="mini-panel raised">
                <span className="panel-label">governor</span>
                <strong>authority gates</strong>
              </div>
              <div className="connector vertical" aria-hidden="true" />
              <div className="command-list">
                <span className="panel-label">command surface</span>
                <code>plan → read → edit → verify</code>
                <code>stage → commit → push</code>
                <code className="status-line">checks passed · localhost ready</code>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="principles">
          <div className="section-heading">
            <p className="eyebrow">Principles</p>
            <h2>Small controls. Clear records.</h2>
          </div>
          <div className="card-grid">
            {valueCards.map((card) => (
              <article className="value-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="workspace">
          <div className="section-heading narrow">
            <p className="eyebrow">Workspace</p>
            <h2>A compact surface for task context and delivery checks.</h2>
          </div>
          <div className="workspace-preview">
            <aside className="workspace-sidebar">
              <div>
                <span className="panel-label">task</span>
                <strong>#1 landing page epic</strong>
              </div>
              <div>
                <span className="panel-label">paths</span>
                <code>src/App.tsx</code>
                <code>src/styles.css</code>
              </div>
            </aside>
            <div className="workspace-main">
              <div className="workspace-window">
                <div className="window-header">
                  <span>verification</span>
                  <span className="chip chip-accent">build passing</span>
                </div>
                <div className="window-body">
                  <div className="command-row">
                    <code>npm install</code>
                    <span>clean checkout</span>
                  </div>
                  <div className="command-row">
                    <code>npm run dev</code>
                    <span>localhost served</span>
                  </div>
                  <div className="command-row active">
                    <code>npm run build</code>
                    <span>artifacts ready</span>
                  </div>
                </div>
              </div>
              <div className="workspace-window inset-window">
                <div className="window-header">
                  <span>review trail</span>
                  <span className="chip">visible authority</span>
                </div>
                <p>
                  Each step stays readable. The workspace shows what changed, what was checked, and
                  which action comes next.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section closing" id="start">
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
