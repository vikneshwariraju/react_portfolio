import { useState } from "react";

const contactLinks = [
  {
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    // 🔁 REPLACE with your actual GitHub profile URL
    href: "https://github.com/gracysandanarajan",
    color: "#e2e8f0",
  },
  {
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    // 🔁 REPLACE with your actual LinkedIn profile URL
    href: "https://www.linkedin.com/in/gracy-sandanarajan-5807a4363",
    color: "#0077b5",
  },
  {
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    href: "mailto:gracysandanarajan@gmail.com",
    display: "gracysandanarajan@gmail.com",
    color: "#a855f7",
  },
  {
    label: "Phone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    href: "tel:+919894359257",
    display: "+91 98943 59257",
    color: "#10b981",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      const mailtoLink = `mailto:gracysandanarajan@gmail.com?subject=${encodeURIComponent(
        form.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `Hi Gracy,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      window.open(mailtoLink, "_blank");
      setSubmitted(true);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    background: focused === field ? "rgba(124,58,237,0.12)" : "rgba(255,255,255,0.04)",
    border: focused === field ? "1px solid rgba(168,85,247,0.7)" : "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "14px 18px",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.25s ease",
    boxSizing: "border-box",
    boxShadow: focused === field ? "0 0 20px rgba(124,58,237,0.15)" : "none",
  });

  const labelStyle = {
    color: "rgba(255,255,255,0.6)",
    fontSize: 13,
    marginBottom: 8,
    display: "block",
    fontWeight: 500,
    letterSpacing: 0.4,
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)",
        padding: "80px 40px",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{
        position: "absolute", top: "20%", right: "-8%",
        width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-6%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p style={{ color: "#a855f7", fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          Let's Connect
        </p>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          color: "#fff",
          margin: 0,
          lineHeight: 1.2,
        }}>
          Contact <span style={{
            background: "linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Me</span>
        </h2>
        <div style={{
          width: 60, height: 4, margin: "20px auto 0",
          background: "linear-gradient(90deg, #7c3aed, #a855f7)",
          borderRadius: 2,
        }} />
        <p style={{
          color: "rgba(255,255,255,0.5)",
          marginTop: 20,
          fontSize: "0.95rem",
          maxWidth: 480,
          margin: "20px auto 0",
          lineHeight: 1.7,
        }}>
          Have a project in mind or just want to say hi? Feel free to reach out — I'm always open to new ideas and collaborations.
        </p>
      </div>

      <div
        className="contact-grid"
        style={{
          maxWidth: 920,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 36,
          alignItems: "start",
        }}
      >
        {/* Left: Info Card */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: "36px 28px",
        }}>
          <h3 style={{ color: "#fff", fontSize: "1.15rem", fontWeight: 700, marginBottom: 4, marginTop: 0 }}>
            S. Gracy
          </h3>
          <p style={{ color: "#a855f7", fontSize: 13, marginBottom: 6, fontWeight: 500 }}>
            Full-Stack Developer
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 24 }}>
            📍 Nagapattinam, Tamil Nadu
          </p>

          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.875rem",
            lineHeight: 1.75,
            marginBottom: 28,
          }}>
            Crafting digital experiences with clean code and creative problem-solving. Open to freelance projects and collaborations.
          </p>

          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 24 }} />

          <p style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Reach Me At
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "GitHub" || link.label === "LinkedIn" ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.22s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)";
                  e.currentTarget.style.background = "rgba(124,58,237,0.12)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span style={{ color: link.color, flexShrink: 0 }}>{link.icon}</span>
                <div style={{ overflow: "hidden", flex: 1 }}>
                  <p style={{ margin: 0, fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: 1.2, textTransform: "uppercase" }}>
                    {link.label}
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {link.display}
                  </p>
                </div>
                <span style={{ fontSize: 13, opacity: 0.3, flexShrink: 0 }}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: "40px 36px",
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                margin: "0 auto 24px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 30, color: "#fff",
              }}>✓</div>
              <h3 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 700, marginBottom: 10 }}>
                Message Sent!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Your mail app should have opened. I'll get back to you as soon as possible!
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                style={{
                  marginTop: 24,
                  background: "transparent",
                  border: "1px solid rgba(168,85,247,0.5)",
                  color: "#a855f7",
                  padding: "10px 24px",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    style={inputStyle("email")}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("subject")}
                />
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  rows={6}
                  style={{ ...inputStyle("message"), resize: "vertical", minHeight: 140 }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 12,
                  padding: "16px 32px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: 0.5,
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,58,237,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,58,237,0.35)";
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.25);
        }
      `}</style>
    </section>
  );
}
