import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f9e8f4' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#5a2d6e' }}>
          🌸 Glow Care
        </Link>
        <div className="d-flex gap-4">
          <Link className="nav-link" to="/" style={{ color: '#5a2d6e' }}>Accueil</Link>
          <Link className="nav-link" to="/quiz" style={{ color: '#5a2d6e' }}>Quiz</Link>
          <Link className="nav-link" to="/about" style={{ color: '#5a2d6e' }}>À propos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;