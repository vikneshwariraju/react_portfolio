// src/pages/Skills.js
import { useState } from 'react';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "HTML", icon: "🌐", level: 95 },
      { name: "CSS", icon: "🎨", level: 85 },
      { name: "JavaScript", icon: "🟨", level: 88 },
      { name: "Bootstrap", icon: "🅱️", level: 80 },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Python", icon: "🐍", level: 82 },
      { name: "Java", icon: "☕", level: 75 },
      { name: "MySQL", icon: "🗄️", level: 78 },
    ],
  },
];

function SkillCard({ name, icon, level }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minWidth: '180px',
        flex: '1 1 180px',
        background: hovered ? '#e2e8f0' : '#f1f5f9',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: '0.3s',
      }}
    >
      <div style={{ fontSize: '28px' }}>{icon}</div>
      <div style={{ fontWeight: '600', fontSize: '16px', color: '#0f172a' }}>{name}</div>

      {/* Progress Bar */}
      <div style={{
        background: '#cbd5e1',
        borderRadius: '10px',
        height: '8px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: hovered ? `${level}%` : '0%',
          background: '#38bdf8',
          height: '100%',
          borderRadius: '10px',
          transition: 'width 0.6s ease',
        }} />
      </div>

      <span style={{ fontSize: '12px', color: '#64748b' }}>{level}% proficiency</span>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <section>
        <h1>🛠️ My Skills</h1>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>
          Technologies I work with
        </p>

        {skillsData.map((group) => (
          <div key={group.category} style={{ marginBottom: '30px' }}>
            <h2 style={{ marginBottom: '15px', color: '#0f172a' }}>
              {group.category}
            </h2>

            {/* Pill Tags (matches your friend's ul/li style) */}
            <ul style={{ marginBottom: '20px' }}>
              {group.skills.map((skill) => (
                <li key={skill.name}>{skill.icon} {skill.name}</li>
              ))}
            </ul>

            {/* Skill Cards with hover + progress bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Skills;