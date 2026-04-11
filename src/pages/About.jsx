import {useState} from "react";

export default function About() {
  return (
    <section
      id="about"
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
      <div style={{
        position: "absolute",
        top: "15%",
        left: "-10%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)",
      }} />

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p style={{
          color: "#a855f7",
          fontSize: 14,
          letterSpacing: 4,
          textTransform: "uppercase",
          marginBottom: 8
        }}>
          Who I Am
        </p>

        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "#fff"
        }}>
          About{" "}
          <span style={{
            background: "linear-gradient(90deg, #7c3aed, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Me
          </span>
        </h2>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: 1000,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center"
      }}>

        {/* Image */}
        <div style={{
          borderRadius: 20,
          padding: 10,
          background: "linear-gradient(135deg, #7c3aed, #a855f7)"
        }}>
          <img
            src="https://via.placeholder.com/500"
            alt="About"
            style={{
              width: "100%",
              borderRadius: 15,
              display: "block"
            }}
          />
        </div>

        {/* Text */}
        <div>
          <h3 style={{
            color: "#a855f7",
            marginBottom: 20
          }}>
            Full Stack Developer 
          </h3>

          <p style={{
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.8,
            marginBottom: 20
          }}>
            I'm a passionate developer focused on building modern, responsive, 
            and user-friendly web applications. I enjoy combining design and 
            development to create meaningful digital experiences.
          </p>

          <p style={{
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.8
          }}>
            I specialize in React, Java, and backend systems, and I love solving 
            real-world problems using technology and innovation.
          </p>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: 20,
            marginTop: 30
          }}>
            <div style={{
              padding: 20,
              borderRadius: 15,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <h4 style={{ color: "#7c3aed", margin: 0 }}>10+</h4>
              <p style={{ fontSize: 12, color: "#aaa" }}>Projects</p>
            </div>

            <div style={{
              padding: 20,
              borderRadius: 15,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
              <h4 style={{ color: "#a855f7", margin: 0 }}>1+</h4>
              <p style={{ fontSize: 12, color: "#aaa" }}>Experience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}