
export default function Projects() {
  return (
    <section className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-list">
        <div className="project-card card">
          <div className="project-number accent">01</div>
          <h3 className="project-title accent">Voice Based Authentication</h3>
          <p className="project-desc">Real-time speaker identification using ML models and Python.</p>
          <div className="project-tags">
            <span className="ptag">Python</span><span className="ptag">ML</span>
          </div>
        </div>
      </div>
    </section>
  );
}
