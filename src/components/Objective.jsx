import React from 'react';
import './Objective.css';

const Objective = () => {
  const objectives = [
    {
      id: 1,
      icon: '📐',
      title: 'Progettazione su GeoGebra',
      description: 'Creare un ponte con struttura parabolica ottimizzata per la distribuzione dei carichi su GeoGebra'
    },
    {
      id: 2,
      icon: '🍝',
      title: '100% Pasta',
      description: 'Utilizzare esclusivamente pasta e colla per la costruzione'
    },
    {
      id: 3,
      icon: '🏗️',
      title: 'Resistenza ai Carichi',
      description: 'Sostenere il massimo peso possibile senza cadere a pezzi'
    },
    {
      id: 4,
      icon: '🧮',
      title: 'Utilizzare la matematica',
      description: 'Applicare principi matematici per calcolare la parabola ottimale'
    }
  ];

  return (
    <section id="objective" className="objective">
      <div className="container">
        <h2 className="section-title">Obiettivo</h2>
        
        <div className="objective-content">
          <div className="objective-main">
            <div className="objective-card">
              <div className="card-header">
                <h3 className="card-title">Missione del Progetto</h3>
              </div>
              <div className="card-body">
                <p className="objective-description">
                  Il nostro obiettivo è progettare e costruire un ponte fatto interamente di pasta che segua una forma parabolica, 
                  in grado di resistere a carichi progressivamente crescenti. Abbiamo scelto la parabola come conica per il nostro
                  ponte poiché molte strutture nel mondo la utilizzano (Golden Gate Bridge, San Francisco; Sidney Harbour Bridge, Sidney; Ponte della Costituzione, Venezia). 
                </p>
                
                <div className="technical-specs">
                  <div className="spec-item">
                    <span className="spec-label">Materiale Principale:</span>
                    <span className="spec-value">Rigatoni n.88 del Viaggiator Goloso</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Legante:</span>
                    <span className="spec-value">Colla a Caldo</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Lunghezza del Ponte:</span>
                    <span className="spec-value">40 cm</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Altezza Massima:</span>
                    <span className="spec-value">15 cm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="objectives-grid">
            {objectives.map((obj) => (
              <div key={obj.id} className="objective-item">
                <div className="objective-item-icon">{obj.icon}</div>
                <h4 className="objective-item-title">{obj.title}</h4>
                <p className="objective-item-desc">{obj.description}</p>
                <div className="objective-item-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;