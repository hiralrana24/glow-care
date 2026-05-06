import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const routines = {
  seche: {
    matin: [
      { icon: '🧴', nom: 'Nettoyant doux', detail: 'Sans savon, hydratant' },
      { icon: '💦', nom: 'Sérum hydratant', detail: 'Acide hyaluronique' },
      { icon: '🌿', nom: 'Crème nourrissante', detail: 'Riche en lipides' },
      { icon: '☀️', nom: 'SPF 50+', detail: 'Protection solaire' },
    ],
    soir: [
      { icon: '🧼', nom: 'Double nettoyage', detail: 'Huile + gel doux' },
      { icon: '🌙', nom: 'Sérum nuit', detail: 'Réparateur, rétinol doux' },
      { icon: '✨', nom: 'Crème de nuit', detail: 'Beurre de karité' },
    ],
    conseil: 'Pour une peau sèche, bois au moins 1,5L d\'eau par jour et évite les douches trop chaudes.',
  },
  grasse: {
    matin: [
      { icon: '🫧', nom: 'Nettoyant purifiant', detail: 'Contrôle du sébum' },
      { icon: '💧', nom: 'Sérum matifiant', detail: 'Niacinamide' },
      { icon: '🌱', nom: 'Gel hydratant léger', detail: 'Sans huile' },
      { icon: '☀️', nom: 'SPF 50+ mat', detail: 'Texture légère' },
    ],
    soir: [
      { icon: '🧼', nom: 'Nettoyant moussant', detail: 'Élimine l\'excès de sébum' },
      { icon: '🌙', nom: 'Sérum anti-imperfections', detail: 'Acide salicylique' },
      { icon: '✨', nom: 'Crème légère', detail: 'Non comédogène' },
    ],
    conseil: 'Pour une peau grasse, évite de te toucher le visage et nettoie ta peau 2 fois par jour.',
  },
  mixte: {
    matin: [
      { icon: '🧴', nom: 'Nettoyant équilibrant', detail: 'Doux pour les joues' },
      { icon: '💦', nom: 'Sérum équilibrant', detail: 'Zone T et joues' },
      { icon: '🌿', nom: 'Crème légère', detail: 'Hydratation ciblée' },
      { icon: '☀️', nom: 'SPF 50+', detail: 'Protection solaire' },
    ],
    soir: [
      { icon: '🧼', nom: 'Nettoyant doux', detail: 'Sans agresser la peau' },
      { icon: '🌙', nom: 'Sérum nuit', detail: 'Rééquilibrant' },
      { icon: '✨', nom: 'Crème hydratante', detail: 'Légère sur la zone T' },
    ],
    conseil: 'Pour une peau mixte, utilise des produits différents selon les zones si nécessaire.',
  },
  sensible: {
    matin: [
      { icon: '🌸', nom: 'Nettoyant apaisant', detail: 'Sans parfum, hypoallergénique' },
      { icon: '💦', nom: 'Sérum calmant', detail: 'Aloe vera, centella' },
      { icon: '🌿', nom: 'Crème apaisante', detail: 'Texture douce' },
      { icon: '☀️', nom: 'SPF 50+ minéral', detail: 'Pour peaux sensibles' },
    ],
    soir: [
      { icon: '🧼', nom: 'Eau micellaire', detail: 'Démaquillage doux' },
      { icon: '🌙', nom: 'Sérum réparateur', detail: 'Panthenol, ceramides' },
      { icon: '✨', nom: 'Crème barrière', detail: 'Renforce la peau' },
    ],
    conseil: 'Pour une peau sensible, teste toujours les nouveaux produits sur une petite zone avant.',
  },
  normale: {
    matin: [
      { icon: '🧴', nom: 'Nettoyant doux', detail: 'Pour maintenir l\'équilibre' },
      { icon: '💦', nom: 'Sérum antioxydant', detail: 'Vitamine C' },
      { icon: '🌿', nom: 'Crème hydratante', detail: 'Légère et confortable' },
      { icon: '☀️', nom: 'SPF 50+', detail: 'Protection solaire' },
    ],
    soir: [
      { icon: '🧼', nom: 'Nettoyant doux', detail: 'Élimine les impuretés' },
      { icon: '🌙', nom: 'Sérum nuit', detail: 'Rétinol léger' },
      { icon: '✨', nom: 'Crème de nuit', detail: 'Nourrissante' },
    ],
    conseil: 'Pour une peau normale, maintiens ta routine et protège-toi du soleil chaque jour.',
  },
};

const produits = {
  petit: [
    { nom: 'Nivea Soft', prix: '3€', type: 'Crème hydratante' },
    { nom: 'Garnier Micellar Water', prix: '5€', type: 'Eau micellaire' },
    { nom: 'La Roche-Posay Toleriane', prix: '12€', type: 'Nettoyant' },
  ],
  moyen: [
    { nom: 'CeraVe Hydrating Cleanser', prix: '15€', type: 'Nettoyant' },
    { nom: 'The Ordinary Hyaluronic Acid', prix: '8€', type: 'Sérum' },
    { nom: 'Avène Crème Légère', prix: '18€', type: 'Hydratant' },
  ],
  confort: [
    { nom: 'Paula\'s Choice BHA', prix: '35€', type: 'Exfoliant' },
    { nom: 'Drunk Elephant Sérum C', prix: '45€', type: 'Sérum Vitamine C' },
    { nom: 'Tatcha Water Cream', prix: '55€', type: 'Hydratant premium' },
  ],
};

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || {};

  const typePeau = answers[0] || 'normale';
  const budget = answers[2] || 'moyen';
  const routine = routines[typePeau];
  const produitsRecommandes = produits[budget];

  const typeLabel = {
    seche: 'Sèche', grasse: 'Grasse', mixte: 'Mixte',
    sensible: 'Sensible', normale: 'Normale'
  };
  const budgetLabel = {
    petit: 'Moins de 20€', moyen: '20€ - 50€', confort: 'Plus de 50€'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fd' }}>
      <div className="container py-5" style={{ maxWidth: '700px' }}>

        {/* Header */}
        <div className="text-center mb-4">
          <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: '#fdf0f8', color: '#d060a0', fontSize: '13px' }}>
            Résultats personnalisés
          </span>
          <h3 className="fw-bold" style={{ color: '#5a2d6e' }}>Ta routine Glow Care ✨</h3>
          <p style={{ color: '#888', fontSize: '14px' }}>
            Peau <strong style={{ color: '#5a2d6e' }}>{typeLabel[typePeau]}</strong> · Budget <strong style={{ color: '#5a2d6e' }}>{budgetLabel[budget]}</strong>
          </p>
        </div>

        {/* Routines */}
        <div className="row g-4 mb-4">
          {/* Matin */}
          <div className="col-md-6">
            <div className="p-4 rounded-4 h-100" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
              <p className="fw-bold mb-3" style={{ color: '#d060a0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Routine matin
              </p>
              {routine.matin.map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px', backgroundColor: '#fdf0f8', fontSize: '18px', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: '13px', color: '#333' }}>{item.nom}</p>
                    <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soir */}
          <div className="col-md-6">
            <div className="p-4 rounded-4 h-100" style={{ border: '1px solid #e0d0f0', backgroundColor: 'white' }}>
              <p className="fw-bold mb-3" style={{ color: '#5a2d6e', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Routine soir
              </p>
              {routine.soir.map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px', backgroundColor: '#f0eafc', fontSize: '18px', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: '13px', color: '#333' }}>{item.nom}</p>
                    <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Produits recommandés */}
        <div className="p-4 rounded-4 mb-4" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
          <p className="fw-bold mb-3" style={{ color: '#5a2d6e' }}>💰 Produits recommandés pour ton budget</p>
          <div className="row g-3">
            {produitsRecommandes.map((p, i) => (
              <div key={i} className="col-md-4">
                <div className="p-3 rounded-3 text-center" style={{ backgroundColor: '#fdf0f8' }}>
                  <p className="fw-bold mb-1" style={{ fontSize: '13px', color: '#5a2d6e' }}>{p.nom}</p>
                  <p className="mb-1" style={{ fontSize: '12px', color: '#888' }}>{p.type}</p>
                  <span className="badge" style={{ backgroundColor: '#d060a0', color: 'white' }}>{p.prix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conseil */}
        <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: '#fdf0f8', borderLeft: '3px solid #d060a0' }}>
          <p className="fw-bold mb-1" style={{ color: '#5a2d6e', fontSize: '13px' }}>Conseil Glow Care</p>
          <p className="mb-0" style={{ color: '#888', fontSize: '13px' }}>{routine.conseil}</p>
        </div>

        {/* Boutons */}
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => navigate('/quiz')}
            className="btn px-4"
            style={{ border: '1px solid #ccc', color: '#888', borderRadius: '999px' }}
          >
            ← Refaire le quiz
          </button>
        </div>

      </div>
    </div>
  );
}

export default Results;