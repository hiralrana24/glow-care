import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions.json';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = { ...answers, [currentQuestion]: selected };
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      navigate('/results', { state: { answers: newAnswers } });
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelected(answers[currentQuestion - 1] || null);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fd' }}>
      <div className="container py-5" style={{ maxWidth: '600px' }}>

        {/* Progression */}
        <div className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <span style={{ color: '#888', fontSize: '13px' }}>
              Étape {currentQuestion + 1} sur {questions.length}
            </span>
            <span style={{ color: '#d060a0', fontSize: '13px', fontWeight: '500' }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div className="progress" style={{ height: '6px', borderRadius: '999px' }}>
            <div
              className="progress-bar"
              style={{ width: `${progress}%`, backgroundColor: '#d060a0', borderRadius: '999px' }}
            />
          </div>
        </div>

        {/* Question */}
        <h4 className="fw-bold mb-2" style={{ color: '#5a2d6e' }}>
          {question.question}
        </h4>
        <p style={{ color: '#888', fontSize: '14px' }} className="mb-4">
          Choisis l'option qui te correspond le mieux.
        </p>

        {/* Options */}
        <div className="d-flex flex-column gap-3 mb-4">
          {question.options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="p-3 rounded-4"
              style={{
                border: selected === option.value
                  ? '2px solid #d060a0'
                  : '1px solid #e0e0e0',
                backgroundColor: selected === option.value ? '#fdf0f8' : 'white',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: selected === option.value ? '500' : 'normal',
                color: selected === option.value ? '#5a2d6e' : '#333',
                transition: 'all 0.2s'
              }}
            >
              {option.label}
            </div>
          ))}
        </div>

        {/* Boutons */}
        <div className="d-flex justify-content-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="btn px-4"
            style={{ border: '1px solid #ccc', color: '#888', borderRadius: '999px' }}
          >
            ← Précédent
          </button>
          <button
            onClick={handleNext}
            disabled={!selected}
            className="btn px-4 fw-bold"
            style={{
              backgroundColor: selected ? '#d060a0' : '#f0c0e0',
              color: 'white',
              borderRadius: '999px',
              border: 'none'
            }}
          >
            {currentQuestion + 1 === questions.length ? 'Voir mes résultats 🌸' : 'Suivant →'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Quiz;