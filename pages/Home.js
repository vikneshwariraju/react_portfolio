
export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name"><span className="accent">Raveena</span> R</h1>
          <h2 className="hero-role">Software Developer</h2>
          <p className="hero-bio">
            Final-year CSE student at Sir Issac Newton Educational Institutions, 
            blending backend logic with seamless UI/UX design.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary"><i className="bi bi-chat-dots-fill"></i> Let's Talk</a>
            <a href="/raveena_resume.pdf" download className="btn btn-outline">
                <i className="bi bi-file-earmark-person"></i> My Resume
            </a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hexagon-frame">
            <div className="hexagon-inner">
              <img src="myphoto.jpeg" alt="Raveena" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}