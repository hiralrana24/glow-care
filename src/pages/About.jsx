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
          <h3 className="fw-bold" style={{ color: '#5a2d6e' }}>A propos de Glow Care</h3>
          <p className="mx-auto" style={{ color: '#888', fontSize: '14px', maxWidth: '480px' }}>
            Glow Care est une application web interactive qui aide chaque personne a trouver sa routine skincare ideale grace a un quiz personalise.
          </p>
        </div>

        {/* Mission */}
        <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
          <p className="fw-bold mb-2" style={{ color: '#5a2d6e' }}>Notre mission</p>
          <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
            La skincare peut etre compliquee et intimidante. Glow Care simplifie tout ca : en quelques questions, on identifie ton type de peau, tes problemes et on te propose une routine adaptee a ton budget. Parce que prendre soin de sa peau, ca devrait etre accessible a tout le monde.
          </p>
        </div>

        {/* Equipe */}
        <p className="fw-bold mb-3" style={{ color: '#333' }}>L'equipe</p>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="p-4 rounded-4 d-flex align-items-center gap-3" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '50px', height: '50px', backgroundColor: '#fdf0f8', fontSize: '18px', fontWeight: 'bold', color: '#d060a0', flexShrink: 0 }}>
                M1
              </div>
              <div>
                <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#333' }}>[Prenom NOM]</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#d060a0' }}>Hiral Rana</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>Quiz · Donnees JSON</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 rounded-4 d-flex align-items-center gap-3" style={{ border: '1px solid #e0d0f0', backgroundColor: 'white' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '50px', height: '50px', backgroundColor: '#f0eafc', fontSize: '18px', fontWeight: 'bold', color: '#5a2d6e', flexShrink: 0 }}>
                M2
              </div>
              <div>
                <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#333' }}>[Prenom NOM]</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#5a2d6e' }}>Chakira Boubacar Foudi</p>
                <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>Design · Resultats</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;