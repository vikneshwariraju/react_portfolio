import React from "react";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "0 20px",
      }}
    >
      {/* Glow circles */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)",
        }}
      />

      {/* Main content */}
      <div style={{ textAlign: "center", maxWidth: 800 }}>
        {/* Badge */}
        <p
          style={{
            color: "#a855f7",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontSize: 14,
            marginBottom: 15,
          }}
        >
          Full Stack Developer
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#fff",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Vikneshwari 👋
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginTop: 20,
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          I build modern, responsive, and high-performance web applications
          using React, Java, and backend technologies. I love turning ideas
          into real-world products 🚀
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: 35,
            display: "flex",
            justifyContent: "center",
            gap: 15,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "12px 24px",
              background: "linear-gradient(90deg, #7c3aed, #a855f7)",
              color: "#fff",
              borderRadius: 30,
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 0 20px rgba(124,58,237,0.3)",
            }}
          >
            View Projects
          </a>

          <a
            href="#about"
            style={{
              padding: "12px 24px",
              border: "1px solid rgba(168,85,247,0.5)",
              color: "#a855f7",
              borderRadius: 30,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            About Me
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "center",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#7c3aed", margin: 0 }}>10+</h3>
            <p style={{ color: "#aaa", fontSize: 12 }}>Projects</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#a855f7", margin: 0 }}>2+</h3>
            <p style={{ color: "#aaa", fontSize: 12 }}>Internships</p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ color: "#c084fc", margin: 0 }}>Full Stack</h3>
            <p style={{ color: "#aaa", fontSize: 12 }}>Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}