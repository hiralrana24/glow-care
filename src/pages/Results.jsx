import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const routines = {
  seche: {
    matin: [
      { nom: 'Nettoyant doux', detail: 'Sans savon, hydratant' },
      { nom: 'Serum hydratant', detail: 'Acide hyaluronique' },
      { nom: 'Creme nourrissante', detail: 'Riche en lipides' },
      { nom: 'SPF 50+', detail: 'Protection solaire' },
    ],
    soir: [
      { nom: 'Double nettoyage', detail: 'Huile + gel doux' },
      { nom: 'Serum nuit', detail: 'Reparateur, retinol doux' },
      { nom: 'Creme de nuit', detail: 'Beurre de karite' },
    ],
    conseil: 'Pour une peau seche, bois au moins 1,5L d\'eau par jour et evite les douches trop chaudes.',
  },
  grasse: {
    matin: [
      { nom: 'Nettoyant purifiant', detail: 'Controle du sebum' },
      { nom: 'Serum matifiant', detail: 'Niacinamide' },
      { nom: 'Gel hydratant leger', detail: 'Sans huile' },
      { nom: 'SPF 50+ mat', detail: 'Texture legere' },
    ],
    soir: [
      { nom: 'Nettoyant moussant', detail: 'Elimine l\'exces de sebum' },
      { nom: 'Serum anti-imperfections', detail: 'Acide salicylique' },
      { nom: 'Creme legere', detail: 'Non comedogene' },
    ],
    conseil: 'Pour une peau grasse, evite de te toucher le visage et nettoie ta peau 2 fois par jour.',
  },
  mixte: {
    matin: [
      { nom: 'Nettoyant equilibrant', detail: 'Doux pour les joues' },
      { nom: 'Serum equilibrant', detail: 'Zone T et joues' },
      { nom: 'Creme legere', detail: 'Hydratation ciblee' },
      { nom: 'SPF 50+', detail: 'Protection solaire' },
    ],
    soir: [
      { nom: 'Nettoyant doux', detail: 'Sans agresser la peau' },
      { nom: 'Serum nuit', detail: 'Reequilibrant' },
      { nom: 'Creme hydratante', detail: 'Legere sur la zone T' },
    ],
    conseil: 'Pour une peau mixte, utilise des produits differents selon les zones si necessaire.',
  },
  sensible: {
    matin: [
      { nom: 'Nettoyant apaisant', detail: 'Sans parfum, hypoallergenique' },
      { nom: 'Serum calmant', detail: 'Aloe vera, centella' },
      { nom: 'Creme apaisante', detail: 'Texture douce' },
      { nom: 'SPF 50+ mineral', detail: 'Pour peaux sensibles' },
    ],
    soir: [
      { nom: 'Eau micellaire', detail: 'Demaquillage doux' },
      { nom: 'Serum reparateur', detail: 'Panthenol, ceramides' },
      { nom: 'Creme barriere', detail: 'Renforce la peau' },
    ],
    conseil: 'Pour une peau sensible, teste toujours les nouveaux produits sur une petite zone avant.',
  },
  normale: {
    matin: [
      { nom: 'Nettoyant doux', detail: 'Pour maintenir l\'equilibre' },
      { nom: 'Serum antioxydant', detail: 'Vitamine C' },
      { nom: 'Creme hydratante', detail: 'Legere et confortable' },
      { nom: 'SPF 50+', detail: 'Protection solaire' },
    ],
    soir: [
      { nom: 'Nettoyant doux', detail: 'Elimine les impuretes' },
      { nom: 'Serum nuit', detail: 'Retinol leger' },
      { nom: 'Creme de nuit', detail: 'Nourrissante' },
    ],
    conseil: 'Pour une peau normale, maintiens ta routine et protege-toi du soleil chaque jour.',
  },
};

const produits = {
  petit: [
    { nom: 'Nivea Soft', prix: '3€', type: 'Creme hydratante' },
    { nom: 'Garnier Micellar Water', prix: '5€', type: 'Eau micellaire' },
    { nom: 'La Roche-Posay Toleriane', prix: '12€', type: 'Nettoyant' },
  ],
  moyen: [
    { nom: 'CeraVe Hydrating Cleanser', prix: '15€', type: 'Nettoyant' },
    { nom: 'The Ordinary Hyaluronic Acid', prix: '8€', type: 'Serum' },
    { nom: 'Avene Creme Legere', prix: '18€', type: 'Hydratant' },
  ],
  confort: [
    { nom: 'Paula\'s Choice BHA', prix: '35€', type: 'Exfoliant' },
    { nom: 'Drunk Elephant Serum C', prix: '45€', type: 'Serum Vitamine C' },
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
    seche: 'Seche', grasse: 'Grasse', mixte: 'Mixte',
    sensible: 'Sensible', normale: 'Normale'
  };
  const budgetLabel = {
    petit: 'Moins de 20 euros', moyen: '20 - 50 euros', confort: 'Plus de 50 euros'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fd' }}>
      <div className="container py-5" style={{ maxWidth: '700px' }}>

        <div className="text-center mb-4">
          <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: '#fdf0f8', color: '#d060a0', fontSize: '13px' }}>
            Resultats personnalises
          </span>
          <h3 className="fw-bold" style={{ color: '#5a2d6e' }}>Ta routine Glow Care</h3>
          <p style={{ color: '#888', fontSize: '14px' }}>
            Peau <strong style={{ color: '#5a2d6e' }}>{typeLabel[typePeau]}</strong> · Budget <strong style={{ color: '#5a2d6e' }}>{budgetLabel[budget]}</strong>
          </p>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="p-4 rounded-4 h-100" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
              <p className="fw-bold mb-3" style={{ color: '#d060a0', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Routine matin
              </p>
              {routine.matin.map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px', backgroundColor: '#fdf0f8', fontSize: '13px', fontWeight: 'bold', color: '#d060a0', flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="mb-0 fw-bold" style={{ fontSize: '13px', color: '#333' }}>{item.nom}</p>
                    <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 rounded-4 h-100" style={{ border: '1px solid #e0d0f0', backgroundColor: 'white' }}>
              <p className="fw-bold mb-3" style={{ color: '#5a2d6e', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Routine soir
              </p>
              {routine.soir.map((item, i) => (
                <div key={i} className="d-flex align-items-center gap-3 mb-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{ width: '38px', height: '38px', backgroundColor: '#f0eafc', fontSize: '13px', fontWeight: 'bold', color: '#5a2d6e', flexShrink: 0 }}>
                    {i + 1}
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

        <div className="p-4 rounded-4 mb-4" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
          <p className="fw-bold mb-3" style={{ color: '#5a2d6e' }}>Produits recommandes pour ton budget</p>
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

        <div className="p-4 rounded-4 mb-4" style={{ backgroundColor: '#fdf0f8', borderLeft: '3px solid #d060a0' }}>
          <p className="fw-bold mb-1" style={{ color: '#5a2d6e', fontSize: '13px' }}>Conseil Glow Care</p>
          <p className="mb-0" style={{ color: '#888', fontSize: '13px' }}>{routine.conseil}</p>
        </div>

        {/* Conseils bien-etre */}
<div className="p-4 rounded-4 mb-4" style={{ border: '1px solid #e8c0e0', backgroundColor: 'white' }}>
  <p className="fw-bold mb-3" style={{ color: '#5a2d6e' }}>Conseils bien-etre</p>
  <div className="row g-3">
    <div className="col-md-4">
      <div className="p-3 rounded-3 text-center" style={{ backgroundColor: '#fdf0f8' }}>
        <p className="fw-bold mb-1" style={{ fontSize: '13px', color: '#5a2d6e' }}>Sommeil</p>
        <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>Dors au moins 7 a 8 heures par nuit. Le sommeil repare ta peau en profondeur pendant la nuit.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-3 rounded-3 text-center" style={{ backgroundColor: '#fdf0f8' }}>
        <p className="fw-bold mb-1" style={{ fontSize: '13px', color: '#5a2d6e' }}>Hydratation</p>
        <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>Bois au moins 1,5L d'eau par jour. Une bonne hydratation se voit directement sur ta peau.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-3 rounded-3 text-center" style={{ backgroundColor: '#fdf0f8' }}>
        <p className="fw-bold mb-1" style={{ fontSize: '13px', color: '#5a2d6e' }}>Sport</p>
        <p className="mb-0" style={{ fontSize: '12px', color: '#888' }}>Fais 30 minutes d'activite physique par jour. Le sport ameliore la circulation et l'eclat de la peau.</p>
      </div>
    </div>
  </div>
</div>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => navigate('/quiz')}
            className="btn px-4"
            style={{ border: '1px solid #ccc', color: '#888', borderRadius: '999px' }}
          >
            Refaire le quiz
          </button>
        </div>

      </div>
    </div>
  );
}

export default Results;