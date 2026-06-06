import React from 'react';

function About() {
  const ingredients = [
    {
      nom: 'Acide Hyaluronique',
      role: 'Hydratation intense',
      description: 'Attire et retient l\'eau dans la peau. Ideal pour les peaux seches et deshydratees.',
      pourQui: 'Tous types de peau'
    },
    {
      nom: 'Retinol',
      role: 'Anti-age',
      description: 'Stimule le renouvellement cellulaire et reduit les rides. A utiliser le soir uniquement.',
      pourQui: 'Peaux matures'
    },
    {
      nom: 'Niacinamide',
      role: 'Pores et eclat',
      description: 'Resserre les pores, reduit les taches et controle le sebum. Tres bien tolere.',
      pourQui: 'Peaux grasses et mixtes'
    },
    {
      nom: 'Vitamine C',
      role: 'Antioxydant',
      description: 'Illumine le teint, reduit les taches brunes et protege contre les radicaux libres.',
      pourQui: 'Tous types de peau'
    },
    {
      nom: 'Ceramides',
      role: 'Barriere cutanee',
      description: 'Renforcent la barriere cutanee et retiennent l\'hydratation dans la peau.',
      pourQui: 'Peaux seches et sensibles'
    },
    {
      nom: 'Acide Salicylique',
      role: 'Anti-acne',
      description: 'Exfolie en profondeur les pores et reduit les imperfections et points noirs.',
      pourQui: 'Peaux grasses et acneiques'
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fd' }}>
      <div className="container py-5" style={{ maxWidth: '800px' }}>

        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: '#fdf0f8', color: '#d060a0', fontSize: '13px' }}>
            Notre projet
          </span>
          <h3 className="fw-bold" style={{ color: '#5a2d6e' }}>A propos de Glow Care</h3>
          
        </div>

        {/* Mission */}
        <div className="p-4 rounded-4 mb-5" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
          <p className="fw-bold mb-2" style={{ color: '#5a2d6e' }}>Notre mission</p>
          <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
            La skincare peut etre compliquee et intimidante. Glow Care simplifie tout ca : en quelques questions, on identifie ton type de peau, tes problemes et on te propose une routine adaptee a ton budget. Parce que prendre soin de sa peau, ca devrait etre accessible a tout le monde.
          </p>
        </div>

        {/* Ingredients stars */}
        <p className="fw-bold mb-4" style={{ color: '#5a2d6e', fontSize: '18px' }}>
          Les ingredients stars de la skincare
        </p>
        <div className="row g-4 mb-5">
          {ingredients.map((ing, i) => (
            <div key={i} className="col-md-4">
              <div className="p-4 rounded-4 h-100" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <p className="fw-bold mb-0" style={{ fontSize: '14px', color: '#5a2d6e' }}>{ing.nom}</p>
                  <span className="badge" style={{ backgroundColor: '#fdf0f8', color: '#d060a0', fontSize: '11px' }}>
                    {ing.role}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: '#888', marginBottom: '10px', lineHeight: '1.6' }}>
                  {ing.description}
                </p>
                <div style={{ borderTop: '1px solid #f0d0e8', paddingTop: '8px' }}>
                  <p className="mb-0" style={{ fontSize: '12px', color: '#d060a0' }}>
                    Pour qui : <span style={{ color: '#888' }}>{ing.pourQui}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton quiz */}
        <div className="text-center">
          <a href="/quiz" className="btn btn-lg px-5 py-3 fw-bold"
            style={{ backgroundColor: '#d060a0', color: 'white', borderRadius: '999px', border: 'none' }}>
            Faire le quiz
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;