
export default function Skills() {
    const skills = [
        { name: "Python", icon: "bi-filetype-py" },
        { name: "React", icon: "bi-code-slash" },
        { name: "HTML/CSS", icon: "bi-filetype-html" },
        { name: "JavaScript", icon: "bi-filetype-js" },
        { name: "MySQL", icon: "bi-database" },
        { name: "Tailwind", icon: "bi-brush" }
    ];

    return (
        <section className="section">
            <p className="section-eyebrow">My Expertise</p>
            <h2 className="section-title">Technical Skills</h2>
            <div class="services-grid">
                {skills.map(skill => (
                    <div key={skill.name} className="service-card">
                        <div className="service-icon-wrap"><i className={`bi ${skill.icon}`}></i></div>
                        <h4 className="service-name">{skill.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}