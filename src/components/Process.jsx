import React, { useState } from 'react';
import './Process.css';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Acquisto Materiali',
      description: 'Procura dei materiali necessari per la costruzione',
      details: [
        '1 kg di Rigatoni',
        '500 g di Spaghetti',
        'Pistola x Colla a caldo'
      ],
      icon: '🛒',
      image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      number: '02',
      title: 'Divisione dei Compiti',
      description: 'Organizzazione del lavoro di squadra',
      details: [
        'Friciu: Progettazione e sviluppo del sito web e responsabile strutturale del ponte.',
        'Arosio: Progettazione del ponte tramite GeoGebra e costruzione del ponte.',
        'Falzetta: Documentazione e costruzione del ponte.'
      ],
      icon: '👥',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      number: '03',
      title: 'Progettazione su Geogebra',
      description: 'Modellazione matematica del ponte parabolico',
      details: [
        'Disegno di una retta per il ponte',
        'Aggiunta di 2 parabole come sostegno',
        'Determinazione delle misure ottimali'
      ],
      icon: '📐',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      number: '04',
      title: 'Costruzione del Ponte',
      description: 'Assemblaggio della struttura in pasta',
      details: [
        'Stesura del ponte sul tavolo per costruirlo delle misure corrette',
        'Costruzione della struttura parabolica',
        'Costruzione della base del ponte',
        'Sostegni di Spaghetti aggiunti nella parte inferiore',
        'Abbellimento del ponte con aste che collegano le parabole tra loro'
      ],
      icon: '🔨',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      number: '05',
      title: 'Test di Resistenza',
      description: 'Verifica della capacità portante del ponte',
      details: [
        'Test a vuoto tra due sedie',
        'Aggiunta di una Pinza dal peso di 550g',
        'Aggiunta di un martello gommato dal peso di 1.5kg',
        'Documentazione dei risultati'
      ],
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop'
    }
  ];

  const activeStepData = steps.find(step => step.id === activeStep);

  const geogebraUrl = "https://www.geogebra.org/material/iframe/id/njmwb2uw/width/800/height/600/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false";

  const openGeogebra = () => {
    window.open('https://www.geogebra.org/calculator/njmwb2uw', '_blank');
  };

  return (
    <section id="process" className="process">
      <div className="container">
        <h2 className="section-title">Procedimento</h2>
        
        <div className="process-container">
          <div className="process-timeline">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`timeline-step ${activeStep === step.id ? 'active' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                <div className="step-connector"></div>
              </div>
            ))}
          </div>
          
          <div className="process-details-wrapper">
            <div className="process-details">
              <div className="details-header">
                <div className="details-icon">{activeStepData.icon}</div>
                <div>
                  <h3 className="details-title">{activeStepData.title}</h3>
                  <p className="details-subtitle">{activeStepData.description}</p>
                </div>
              </div>
              
              <div className="step-image-container">
                <img 
                  src={activeStepData.image} 
                  alt={activeStepData.title}
                  className="step-image"
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="details-content">
                <div className="details-list">
                  {activeStepData.details.map((detail, index) => (
                    <div key={index} className="detail-item">
                      <div className="detail-number">{index + 1}</div>
                      <span className="detail-text">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="process-navigation-fixed">
              <button 
                className="nav-btn prev"
                onClick={() => setActiveStep(prev => prev > 1 ? prev - 1 : 1)}
                disabled={activeStep === 1}
              >
                ← Passo Precedente
              </button>
              <div className="step-counter">
                Passo {activeStep} di {steps.length}
              </div>
              <button 
                className="nav-btn next"
                onClick={() => setActiveStep(prev => prev < steps.length ? prev + 1 : steps.length)}
                disabled={activeStep === steps.length}
              >
                Passo Successivo →
              </button>
            </div>
          </div>
        </div>
        
        <div className="geogebra-preview">
          <h3 className="preview-title">Modello Geogebra</h3>
          
          <div className="geogebra-model-container">
            <div className="model-wrapper">
              <div className="geogebra-embed">
                <div className="iframe-container">
                  <div className="iframe-wrapper">
                    <iframe 
                      src={geogebraUrl}
                      width="100%" 
                      height="450" 
                      frameBorder="0"
                      title="Modello Geogebra del Ponte di Pasta"
                      className="geogebra-frame"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
                    {/* Overlay trasparente che intercetta i click */}
                    <div className="iframe-overlay" onClick={openGeogebra}>
                      <div className="overlay-content">
                        <div className="overlay-icon">🖱️</div>
                        <div className="overlay-text">
                          <h4>Modello Interattivo</h4>
                          <p>Clicca per aprire il modello completo su GeoGebra</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="model-notes">
                  <p>Il modello non è interattivo per evitare modifiche accidentali al file originale</p>
                </div>
              </div>
              
              <div className="equations-sidebar">
                <div className="sidebar-content">
                  <h4>Specifiche Matematiche</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <div className="spec-icon">ƒ</div>
                      <div className="spec-info">
                        <div className="spec-label">Equazione</div>
                        <div className="spec-value">y = -0.116(x - 5.5)² + 5.5</div>
                      </div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-icon">•</div>
                      <div className="spec-info">
                        <div className="spec-label">Vertice</div>
                        <div className="spec-value">V(5.5, 5.5)</div>
                      </div>
                    </div>
                  </div>
                  <button className="open-model-btn" onClick={openGeogebra}>
                    <span className="btn-icon">↗</span>
                    Apri su GeoGebra
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;