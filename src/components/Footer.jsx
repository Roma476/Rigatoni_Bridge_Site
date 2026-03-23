import React from 'react';
import './Footer.css';

const Footer = () => {
  const teamMembers = [
    { name: 'Friciu Robert', role: 'Sviluppatore e Tester Strutturale' },
    { name: 'Arosio Lorenzo', role: 'Progettista e Costruttore' },
    { name: 'Falzetta Stefano', role: 'Documentatore e Costruttore' }
  ];

  const resources = [
    { name: 'Obiettivo del Progetto', link: '#objective' },
    { name: 'Svolgimento del progetto', link: '#process' },
    { name: 'Report test resistenza', link: '#testing' },
    { name: 'Documentazione fotografica del progetto', link: '#gallery' }
  ];

  // Email Outlook
  const contactEmails = [
    { 
      name: 'Robert', 
      email: 'robertgabriel.friciu@studenti.itsos-mariecurie.it', 
      label: 'Contatta Robert' 
    },
    { 
      name: 'Lorenzo', 
      email: 'lorenzoluigi.arosio@studenti.itsos-mariecurie.it', 
      label: 'Contatta Lorenzo' 
    },
    { 
      name: 'Stefano', 
      email: 'stefanofrancesco.falzetta@studenti.itsos-mariecurie.it', 
      label: 'Contatta Stefano' 
    }
  ];

  const currentYear = new Date().getFullYear();

  // Funzione per aprire l'email
  const handleEmailClick = (email, name) => {
    window.location.href = `mailto:${email}?subject=Contatto%20da%20sito%20Ponte%20di%20Pasta&body=Ciao%20${name},%0D%0A%0D%0A...`;
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Il Team</h3>
            <div className="team-list">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Progetto Ponte di Pasta</h3>
            <p className="project-description">
              Un progetto svolto dalla classe 3A Info divisa in terzetti, ognuno ha dovuto
              progettare e costruire il proprio ponte utilizzando solo pasta e colla.
            </p>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Anno Scolastico:</span>
                <span className="meta-value">2025/2026</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Materia:</span>
                <span className="meta-value">Matematica</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Risorse</h3>
            <ul className="resources-list">
              {resources.map((resource, index) => (
                <li key={index} className="resource-item">
                  <a href={resource.link} className="resource-link">
                    <span className="link-icon">→</span>
                    <span>{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-icon">🍝</div>
          <div className="divider-line"></div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} Rigatoni Bridge - Progetto Scolastico. Tutti i diritti riservati.
          </div>
          
          <div className="credits">
            <div className="teacher-credit">
              Progetto assegnato dalla Prof.ssa Nicoletti
            </div>
            <div className="tech-stack">
              Realizzato con React JS + Vite | Sviluppato da Friciu Robert
            </div>
          </div>
          
          <div className="contact-links">
            {contactEmails.map((contact, index) => (
              <button
                key={index}
                className="contact-link"
                onClick={() => handleEmailClick(contact.email, contact.name)}
                title={`Invia email a ${contact.email}`}
                aria-label={contact.label}
              >
                <svg className="email-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="contact-name">{contact.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;