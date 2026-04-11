import React from "react";

const skills = [
  { name: "HTML5", level: "90%" },
  { name: "CSS3", level: "85%" },
  { name: "JavaScript", level: "90%" },
  { name: "React", level: "80%" },
  { name: "Java", level: "75%" },
  { name: "Node.js", level: "70%" },
  { name: "MongoDB", level: "65%" },
  { name: "Git & GitHub", level: "85%" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)",
        padding: "80px 40px",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)",
        }}
      />

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p
          style={{
            color: "#a855f7",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontSize: 14,
            marginBottom: 10,
          }}
        >
          What I Know
        </p>

        <h2 style={{ fontSize: "3rem", color: "#fff", margin: 0 }}>
          My{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #7c3aed, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Skills
          </span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 25,
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 15,
              padding: 20,
              transition: "0.3s",
            }}
          >
            {/* Skill name */}
            <h3 style={{ color: "#fff", marginBottom: 10 }}>
              {skill.name}
            </h3>

            {/* Progress bar */}
            <div
              style={{
                height: 8,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: skill.level,
                  height: "100%",
                  background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                  borderRadius: 20,
                }}
              />
            </div>

            <p style={{ color: "#aaa", fontSize: 12, marginTop: 8 }}>
              {skill.level}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}