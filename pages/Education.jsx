import { useEffect, useRef } from "react";

const educationData = [
  {
    degree: "B.E. Computer Science And Engineering",
    institution: "Anna University",
    location: "Pappakoil",
    period: "Aug'22 - Jun'25",
    grade: "8.16 CGPA",
    icon: "🎓",
    color: "#a855f7",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "State Board",
    location: "Neermulai",
    period: "Jun'20 - May'22",
    grade: "77%",
    icon: "📘",
    color: "#6366f1",
  },
  {
    degree: "Secondary School Leaving Certificate (10th)",
    institution: "State Board",
    location: "Neermulai",
    period: "Jun'18 - May'20",
    grade: "75%",
    icon: "📗",
    color: "#8b5cf6",
  },
];

export default function Education() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 50%, #0a0a1a 100%)",
        minHeight: "100vh",
        padding: "80px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow effects */}
      <div style={{
        position: "absolute", top: "10%", left: "5%",
        width: 300, height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: 350, height: 350,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Section Title */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p style={{ color: "#a855f7", fontSize: 14, letterSpacing: 4, textTransform: "uppercase", marginBottom: 10 }}>
          My Journey
        </p>
        <h2 style={{
          color: "#ffffff",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          margin: 0,
        }}>
          Education
        </h2>
        <div style={{
          margin: "16px auto 0",
          width: 60, height: 4,
          borderRadius: 2,
          background: "linear-gradient(90deg, #a855f7, #6366f1)",
        }} />
      </div>

      {/* Timeline */}
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        position: "relative",
      }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: 0, bottom: 0,
          width: 2,
          background: "linear-gradient(to bottom, #a855f7, #6366f1, transparent)",
          transform: "translateX(-50%)",
        }} />

        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="edu-card"
              style={{
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                marginBottom: 40,
                position: "relative",
                opacity: 0,
                transform: `translateX(${isLeft ? -40 : 40}px)`,
                transition: `all 0.6s ease ${index * 0.2}s`,
              }}
            >
              {/* Dot on timeline */}
              <div style={{
                position: "absolute",
                left: "50%",
                top: 28,
                transform: "translateX(-50%)",
                width: 16, height: 16,
                borderRadius: "50%",
                background: edu.color,
                boxShadow: `0 0 12px ${edu.color}`,
                zIndex: 2,
              }} />

              {/* Card */}
              <div style={{
                width: "44%",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid rgba(168,85,247,0.2)`,
                borderRadius: 16,
                padding: "24px 28px",
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(168,85,247,0.25)`;
                  e.currentTarget.style.borderColor = "rgba(168,85,247,0.5)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)";
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 10 }}>{edu.icon}</div>
                <h3 style={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  margin: "0 0 6px",
                  lineHeight: 1.4,
                }}>
                  {edu.degree}
                </h3>
                <p style={{ color: "#a855f7", fontSize: 13, margin: "0 0 4px", fontWeight: 600 }}>
                  {edu.institution}
                </p>
                <p style={{ color: "#6b7280", fontSize: 12, margin: "0 0 14px" }}>
                  📍 {edu.location}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                  <span style={{
                    background: "rgba(168,85,247,0.15)",
                    color: "#c084fc",
                    fontSize: 12,
                    padding: "4px 12px",
                    borderRadius: 20,
                    border: "1px solid rgba(168,85,247,0.3)",
                  }}>
                    {edu.period}
                  </span>
                  <span style={{
                    background: "rgba(99,102,241,0.15)",
                    color: "#818cf8",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 20,
                    border: "1px solid rgba(99,102,241,0.3)",
                  }}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .edu-card.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
}
