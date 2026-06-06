import React from 'react';
import { useNavigate } from 'react-router-dom';
import nivea from '../assets/nivea.jpg';
import garnier from '../assets/garnier.jpg';
import larochePosay from '../assets/larochePosay.jpg';
import cerave from '../assets/cerave.jpg';
import theOrdinary from '../assets/theOrdinary.jpg';
import avene from '../assets/avene.jpg';
import paulasChoice from '../assets/paulasChoice.jpg';
import drunkElephant from '../assets/drunkElephant.jpg';

function Home() {
  const navigate = useNavigate();

  const produits = [
    { image: nivea, nom: 'Nivea Soft', type: 'Creme hydratante' },
    { image: garnier, nom: 'Garnier Micellar Water', type: 'Eau micellaire' },
    { image: larochePosay, nom: 'La Roche-Posay', type: 'Nettoyant' },
    { image: cerave, nom: 'CeraVe', type: 'Nettoyant doux' },
    { image: theOrdinary, nom: 'The Ordinary', type: 'Serum hydratant' },
    { image: avene, nom: 'Avene', type: 'Creme legere' },
    { image: paulasChoice, nom: "Paula's Choice", type: 'Exfoliant' },
    { image: drunkElephant, nom: 'Drunk Elephant', type: 'Serum Vitamine C' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fd' }}>

      {/* Hero Section */}
      <div className="container text-center py-5">
        <div className="py-4">
          <h1 className="fw-bold mb-3" style={{ color: '#5a2d6e', fontSize: '2.8rem' }}>
            Trouve ta routine skincare ideale
          </h1>
          <p className="mb-4 mx-auto" style={{ color: '#888', fontSize: '1.1rem', maxWidth: '500px' }}>
            Reponds a quelques questions sur ta peau et recois une routine personnalisee adaptee a ton budget.
          </p>
          <button
            className="btn btn-lg px-5 py-3 fw-bold"
            style={{ backgroundColor: '#d060a0', color: 'white', borderRadius: '999px', border: 'none' }}
            onClick={() => navigate('/quiz')}
          >
            Commencer le quiz
          </button>
        </div>
      </div>

      {/* Defilement infini */}
      <div className="mb-5">
        <p className="fw-bold text-center mb-4" style={{ color: '#5a2d6e' }}>
          Produits recommandes par Glow Care
        </p>

        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <style>{`
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scroll-track {
              display: flex;
              width: max-content;
              animation: scrollLeft 20s linear infinite;
            }
            .scroll-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="scroll-track">
            {[...produits, ...produits].map((p, i) => (
              <div key={i} style={{
                minWidth: '160px',
                margin: '0 12px',
                padding: '16px',
                backgroundColor: '#fdf0f8',
                borderRadius: '16px',
                border: '1px solid #e8c0e0',
                textAlign: 'center',
                flexShrink: 0
              }}>
                <img
                  src={p.image}
                  alt={p.nom}
                  style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '10px' }}
                />
                <p className="fw-bold mb-1" style={{ fontSize: '12px', color: '#5a2d6e' }}>{p.nom}</p>
                <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>{p.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards des etapes */}
      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
              <h5 className="mt-3 fw-bold" style={{ color: '#5a2d6e' }}>Reponds au quiz</h5>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Quelques questions sur ton type de peau et tes problemes</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
              <h5 className="mt-3 fw-bold" style={{ color: '#5a2d6e' }}>Indique ton budget</h5>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>On adapte les recommandations a ton budget</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
              <h5 className="mt-3 fw-bold" style={{ color: '#5a2d6e' }}>Ta routine personnalisee</h5>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Recois ta routine matin et soir sur mesure</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;