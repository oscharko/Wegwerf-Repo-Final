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

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Keiko home">
          <span className="wordmark__mark" aria-hidden="true" />
          <span>Keiko</span>
        </a>

        <nav aria-label="Primary">
          <ul className="nav-list">
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
              Keiko helps teams work with project context, delivery checks, and visible
              authority controls in one local-first workspace.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#workspace">View the workspace</a>
              <a className="button button--secondary" href="#principles">Read the principles</a>
            </div>
          </div>

          <div className="console-card" aria-label="Workspace preview summary">
            <div className="console-card__topline">
              <span className="chip chip--accent">governed run</span>
              <span className="chip">reviewable path</span>
            </div>
            <div className="console-flow">
              <div className="console-panel">
                <p className="panel-label">source</p>
                <strong>task #1</strong>
                <span className="panel-note">scope set</span>
              </div>
              <div className="connector" aria-hidden="true" />
              <div className="console-panel console-panel--raised">
                <p className="panel-label">workspace</p>
                <ul className="command-list">
                  <li>plan</li>
                  <li>read files</li>
                  <li>verify build</li>
                </ul>
              </div>
              <div className="connector" aria-hidden="true" />
              <div className="console-panel">
                <p className="panel-label">delivery</p>
                <strong>checks passed</strong>
                <span className="panel-note">authority visible</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="principles">
          <div className="section-heading">
            <p className="eyebrow">Principles</p>
            <h2>Small controls that stay easy to inspect.</h2>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="workspace">
          <div className="section-heading">
            <p className="eyebrow">Workspace</p>
            <h2>A compact surface for context, checks, and delivery.</h2>
          </div>

          <div className="workspace-preview" role="img" aria-label="Illustration of a governed local-first workspace">
            <aside className="workspace-sidebar">
              <span className="chip chip--accent">local</span>
              <span className="chip">authority noted</span>
              <div className="sidebar-stack">
                <div className="mini-panel">
                  <p className="panel-label">sources</p>
                  <p>repo, task, notes</p>
                </div>
                <div className="mini-panel">
                  <p className="panel-label">status</p>
                  <p>build ready</p>
                </div>
              </div>
            </aside>

            <div className="workspace-main">
              <div className="workspace-main__header">
                <p className="panel-label">command surface</p>
                <span className="status-line"><span className="status-dot" /> Verification recorded</span>
              </div>
              <div className="terminal-lines">
                <p><span>$</span> read src/App.tsx</p>
                <p><span>$</span> edit styles with tokens</p>
                <p><span>$</span> npm run build</p>
              </div>
              <div className="workspace-cards">
                <div className="mini-panel mini-panel--wide">
                  <p className="panel-label">review</p>
                  <p>Changes stay small. Checks stay close.</p>
                </div>
                <div className="mini-panel mini-panel--wide accent-panel">
                  <p className="panel-label">boundary</p>
                  <p>Selected tools, explicit approval, visible result.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section closing" id="start">
          <p className="eyebrow">Start</p>
          <h2>A small surface for serious work.</h2>
          <a className="button button--primary" href="#top">Start the local demo</a>
        </section>
      </main>
    </div>
  )
}

export default App
