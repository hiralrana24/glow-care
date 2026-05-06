import React from 'react';

function About() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fd' }}>
      <div className="container py-5" style={{ maxWidth: '700px' }}>

        {/* Header */}
        <div className="text-center mb-4">
          <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: '#fdf0f8', color: '#d060a0', fontSize: '13px' }}>
            Notre projet
          </span>
          <h3 className="fw-bold" style={{ color: '#5a2d6e' }}>À propos de Glow Care</h3>
          <p className="mx-auto" style={{ color: '#888', fontSize: '14px', maxWidth: '480px' }}>
            Glow Care est une application web interactive qui aide chaque personne à trouver sa routine skincare idéale grâce à un quiz personnalisé.
          </p>
        </div>

        {/* Mission */}
        <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
          <p className="fw-bold mb-2" style={{ color: '#5a2d6e' }}>Notre mission 🌸</p>
          <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
            La skincare peut être compliquée et intimidante. Glow Care simplifie tout ça : en quelques questions, on identifie ton type de peau, tes problèmes et on te propose une routine adaptée à ton budget. Parce que prendre soin de sa peau, ça devrait être accessible à tout le monde.
          </p>
        </div>

        {/* Équipe */}
        <p className="fw-bold mb-3" style={{ color: '#333' }}>L'équipe 👩‍💻</p>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="p-4 rounded-4 d-flex align-items-center gap-3" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '50px', height: '50px', backgroundColor: '#fdf0f8', fontSize: '22px', flexShrink: 0 }}>
                👩
              </div>
              <div>
                <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#333' }}>[Hiral RANA]</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#d060a0' }}>Membre 1</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>Quiz · Données JSON</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 rounded-4 d-flex align-items-center gap-3" style={{ border: '1px solid #e0d0f0', backgroundColor: 'white' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '50px', height: '50px', backgroundColor: '#f0eafc', fontSize: '22px', flexShrink: 0 }}>
                👩
              </div>
              <div>
                <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#333' }}>[Chakira Boubacar foudi]</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#5a2d6e' }}>Membre 2</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>Design · Résultats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <p className="fw-bold mb-3" style={{ color: '#333' }}>Technologies utilisées 🛠️</p>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {['React', 'React Router', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'JSON', 'Git / GitHub'].map((tech) => (
            <span key={tech} className="px-3 py-2 rounded-pill"
              style={{ backgroundColor: '#fdf0f8', color: '#5a2d6e', fontSize: '13px', fontWeight: '500', border: '1px solid #e8c0e0' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-4 rounded-4 d-flex justify-content-between align-items-center"
          style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
          <div>
            <p className="mb-0" style={{ fontSize: '13px', color: '#888' }}>Projet réalisé dans le cadre du cours de</p>
            <p className="mb-0 fw-bold" style={{ fontSize: '13px', color: '#5a2d6e' }}>Développement Web Avancé — 2025/2026</p>
          </div>
          <span style={{ fontSize: '24px' }}>🌸</span>
        </div>

      </div>
    </div>
  );
}

export default About;