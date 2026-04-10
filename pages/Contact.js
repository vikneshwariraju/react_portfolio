
export default function Contact() {
  return (
    <section className="section">
      <h2 className="section-title">Let's Connect</h2>
      <div className="contact-wrapper card">
        <div className="contact-links">
            <a href="mailto:email@example.com" className="contact-link primary-link">
                <i className="bi bi-envelope-fill"></i> Email Me
            </a>
            <a href="https://linkedin.com" className="contact-link">
                <i className="bi bi-linkedin"></i> LinkedIn
            </a>
        </div>
      </div>
    </section>
  );
}