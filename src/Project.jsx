import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "College Notice Board",
    role: "Developer",
    duration: "Jun'25 – Aug'25",
    description:
      "Developed a digital notice board for a college, automating announcements and making them more accessible and efficient. The system features secure login, an administrator dashboard, and a responsive design for easy content management on any device.",
    highlights: [
      "AI-powered text classification to automatically sort and prioritize announcements",
      "Secure login system with administrator dashboard",
      "Responsive design for seamless content management on any device",
      "Reduced manual work and improved user experience significantly",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "AI/NLP"],
    color: "#7c3aed",
    icon: "📋",
  },
  {
    id: 2,
    title: "Voice-Based Authentication System",
    role: "Developer",
    duration: "Jan'25 – Mar'25",
    description:
      "Engineered and deployed a secure voice authentication solution, bolstering user access management. Partnered with diverse teams for seamless integration into established systems.",
    highlights: [
      "Fine-tuned voice recognition models to boost precision and minimize incorrect rejections",
      "Seamless integration with established authentication systems",
      "Comprehensive testing and troubleshooting for robust system dependability",
      "Cross-team collaboration for smooth deployment",
    ],
    tags: ["Voice Recognition", "Machine Learning", "Security", "API Integration"],
    color: "#a855f7",
    icon: "🎙️",
  },
];

const tagColors = {
  "HTML5": "#e34c26",
  "CSS3": "#264de4",
  "JavaScript": "#f0db4f",
  "AI/NLP": "#7c3aed",
  "Voice Recognition": "#a855f7",
  "Machine Learning": "#6d28d9",
  "Security": "#10b981",
  "API Integration": "#3b82f6",
};

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)",
        padding: "80px 40px",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: "10%", left: "-10%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "-5%",
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Section Heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p style={{ color: "#a855f7", fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
          What I've Built
        </p>
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 800,
          color: "#fff",
          margin: 0,
          lineHeight: 1.2,
        }}>
          My <span style={{
            background: "linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Projects</span>
        </h2>
        <div style={{
          width: 60, height: 4, margin: "20px auto 0",
          background: "linear-gradient(90deg, #7c3aed, #a855f7)",
          borderRadius: 2,
        }} />
      </div>

      {/* Project Cards */}
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}>
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === project.id
                ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))"
                : "rgba(255,255,255,0.03)",
              border: hovered === project.id
                ? "1px solid rgba(168,85,247,0.5)"
                : "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: "40px 44px",
              transition: "all 0.35s ease",
              boxShadow: hovered === project.id
                ? "0 0 40px rgba(124,58,237,0.2), 0 8px 40px rgba(0,0,0,0.4)"
                : "0 4px 20px rgba(0,0,0,0.3)",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Accent corner glow */}
            <div style={{
              position: "absolute", top: 0, right: 0,
              width: 120, height: 120,
              background: `radial-gradient(circle at top right, ${project.color}30, transparent 70%)`,
              pointerEvents: "none",
            }} />

            {/* Header Row */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{
                  fontSize: 32,
                  background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)`,
                  border: `1px solid ${project.color}60`,
                  borderRadius: 14,
                  padding: "10px 14px",
                  lineHeight: 1,
                }}>
                  {project.icon}
                </span>
                <div>
                  <h3 style={{ color: "#fff", fontSize: "1.35rem", fontWeight: 700, margin: 0 }}>
                    {project.title}
                  </h3>
                  <p style={{ color: "#a855f7", fontSize: 13, margin: "4px 0 0", fontWeight: 500 }}>
                    {project.role}
                  </p>
                </div>
              </div>
              <span style={{
                background: "rgba(124,58,237,0.2)",
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#c084fc",
                fontSize: 12,
                padding: "6px 14px",
                borderRadius: 20,
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}>
                {project.duration}
              </span>
            </div>

            {/* Description */}
            <p style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              marginBottom: 24,
            }}>
              {project.description}
            </p>

            {/* Highlights */}
            <ul style={{ margin: "0 0 28px", paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {project.highlights.map((point, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  <span style={{
                    marginTop: 5, flexShrink: 0,
                    width: 7, height: 7, borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    display: "inline-block",
                  }} />
                  {point}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "5px 14px",
                  borderRadius: 20,
                  background: `${tagColors[tag] || "#7c3aed"}22`,
                  border: `1px solid ${tagColors[tag] || "#7c3aed"}55`,
                  color: tagColors[tag] || "#a855f7",
                  letterSpacing: 0.3,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
