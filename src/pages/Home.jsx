import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fd' }}>
      
      {/* Hero Section */}
      <div className="container text-center py-5">
        <div className="py-4">
          <h1 className="fw-bold mb-3" style={{ color: '#5a2d6e', fontSize: '2.8rem' }}>
            Trouve ta routine skincare idéale ✨
          </h1>
          <p className="mb-4 mx-auto" style={{ color: '#888', fontSize: '1.1rem', maxWidth: '500px' }}>
            Réponds à quelques questions sur ta peau et reçois une routine personnalisée adaptée à ton budget.
          </p>
          <button
            className="btn btn-lg px-5 py-3 fw-bold"
            style={{ backgroundColor: '#d060a0', color: 'white', borderRadius: '999px', border: 'none' }}
            onClick={() => navigate('/quiz')}
          >
            Commencer le quiz 🌸
          </button>
        </div>

        {/* Cards des étapes */}
        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
              <div style={{ fontSize: '2rem' }}>💬</div>
              <h5 className="mt-3 fw-bold" style={{ color: '#5a2d6e' }}>Réponds au quiz</h5>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Quelques questions sur ton type de peau et tes problèmes</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
              <div style={{ fontSize: '2rem' }}>💰</div>
              <h5 className="mt-3 fw-bold" style={{ color: '#5a2d6e' }}>Indique ton budget</h5>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>On adapte les recommandations à ton budget</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 h-100" style={{ backgroundColor: '#fdf0f8', border: '1px solid #e8c0e0' }}>
              <div style={{ fontSize: '2rem' }}>🌿</div>
              <h5 className="mt-3 fw-bold" style={{ color: '#5a2d6e' }}>Ta routine personnalisée</h5>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Reçois ta routine matin et soir sur mesure</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;