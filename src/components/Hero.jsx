import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-title-container">
          <h1 className="hero-title">
            <span className="title-main">RIGATONI BRIDGE</span>
            <span className="title-sub">Progetto di Matematica</span>
          </h1>
          
          <div className="team-names">
            <div className="name-item">
              <span className="name-first">Robert</span>
              <span className="name-last">Friciu</span>
            </div>
            <div className="name-item">
              <span className="name-first">Lorenzo</span>
              <span className="name-last">Arosio</span>
            </div>
            <div className="name-item">
              <span className="name-first">Stefano</span>
              <span className="name-last">Falzetta</span>
            </div>
          </div>
          
          <div className="project-info">
            <div className="info-card">
              <div className="info-content">
                <div className="info-label">Docente</div>
                <div className="info-value">Prof.ssa Nicoletti</div>
                <div className="info-sub">Matematica</div>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-content">
                <div className="info-label">Obiettivo</div>
                <div className="info-value">Costruire un ponte</div>
                <div className="info-sub">100% pasta, forma parabolica</div>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-content">
                <div className="info-label">Resistenza</div>
                <div className="info-value">Testato fino a 2kg</div>
                <div className="info-sub">Con deformazione minima</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scorri per scoprire di più</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;