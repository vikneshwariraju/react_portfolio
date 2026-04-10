
export default function About() {
  return (
    <section className="section">
      <h2 className="section-title">My Journey</h2>
      <div className="about-grid">
        <div className="about-bio">
          <h3 className="about-subtitle accent">From Code to Concept</h3>
          <p className="about-text">
            I specialize in creating functional backend logic with Python and 
            ensuring the end-user experience is flawless through strong UI/UX principles.
          </p>
        </div>
        <div className="metrics-card card">
          <div className="metrics-grid">
            <div className="metric"><span className="metric-value accent">8.44</span><span className="metric-label">CGPA</span></div>
            <div className="metric"><span className="metric-value accent">2</span><span className="metric-label">Projects</span></div>
          </div>
          <button className="btn btn-outline-full">
            <i className="bi bi-download"></i> View Full Journey
          </button>
        </div>
      </div>
    </section>
  );
}