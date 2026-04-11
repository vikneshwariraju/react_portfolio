import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      style={{
        background: "#0a0a12",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <h2 style={{ color: "#a855f7" }}>MyPortfolio</h2>

      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "transparent",
          border: "1px solid #a855f7",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: 8,
          display: "none",
        }}
      >
        ☰
      </button>

      {/* Nav Links */}
      <nav
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            style={({ isActive }) => ({
              color: isActive ? "#a855f7" : "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "700" : "400",
              borderBottom: isActive ? "2px solid #a855f7" : "none",
              paddingBottom: 3,
              transition: "0.3s",
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}