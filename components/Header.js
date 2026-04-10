
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="navbar">
            <nav className="nav-inner">
                <Link to="/" className="nav-brand">
                    <i className="bi bi-triangle-fill brand-icon"></i> Raveena R
                </Link>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            to={link.path} 
                            className={`nav-btn ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                </button>
            </nav>
        </header>
    );
}