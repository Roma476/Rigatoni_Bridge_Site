import React from 'react';
import './Testing.css';

const Testing = () => {
  const testObjects = [
    { name: 'Pinza', weight: '550g', image: '🗜️' },
    { name: 'Telefono', weight: '170g', image: '📱' },
    { name: 'Martello', weight: '1.5kg', image: '🔨' }
  ];

  const testResults = [
    { id: 1, test: 'Pinza', result: 'Superato', load: '550g', deformation: '0mm', notes: 'Nessuna deformazione visibile' },
    { id: 2, test: 'Pinza + Telefono', result: 'Superato', load: '720g', deformation: '0mm', notes: 'Nessuna deformazione visibile' },
    { id: 3, test: 'Pinza + Martello', result: 'Superato', load: '2kg', deformation: '2mm', notes: 'Leggerissima deformazione' }
  ];

  return (
    <section id="testing" className="testing">
      <div className="container">
        <h2 className="section-title">Testing di Resistenza</h2>
        
        <div className="testing-intro">
          <p className="intro-text">
            Il ponte è stato sottoposto a test di carico progressivi utilizzando oggetti di uso comune 
            per verificarne la resistenza in condizioni reali.
          </p>
        </div>
        
        <div className="testing-content">
          <div className="test-objects-section">
            <h3 className="results-title">Oggetti di Test</h3>
            
            <div className="test-objects">
              {testObjects.map((obj, index) => (
                <div key={index} className="object-card">
                  <div className="object-icon">{obj.image}</div>
                  <div className="object-info">
                    <div className="object-name">{obj.name}</div>
                    <div className="object-weight">{obj.weight}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="test-results">
            <h3 className="results-title">Risultati Dettagliati</h3>
            
            <div className="results-table-container">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Test</th>
                    <th>Risultato</th>
                    <th>Carico Totale</th>
                    <th>Deformazione</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {testResults.map((test) => (
                    <tr key={test.id}>
                      <td>{test.test}</td>
                      <td>
                        <span className="result-badge success">
                          {test.result}
                        </span>
                      </td>
                      <td>{test.load}</td>
                      <td>{test.deformation}</td>
                      <td className="test-notes">{test.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="performance-metrics">
              <div className="metric-card">
                <div className="metric-value">2kg</div>
                <div className="metric-label">Carico Massimo Testato</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">2mm</div>
                <div className="metric-label">Deformazione Max</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">3/3</div>
                <div className="metric-label">Test Superati</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="disclaimer-section">
          <div className="disclaimer-card">
            <div className="disclaimer-header">
              <div className="disclaimer-icon">⚠️</div>
              <h3 className="disclaimer-title">Disclaimer sui Test</h3>
            </div>
            <div className="disclaimer-content">
              <p>
                Prima di poter effettuare test che portino alla rottura completa del ponte (per determinare il carico massimo 
                effettivamente supportato), dobbiamo esporre il nostro progetto in classe per la presentazione e valutazione.
              </p>
              <p>
                Dopodiché, <strong>solo se ci sarà permesso dalla professoressa</strong>, procederemo con test più pesanti 
                per determinare il punto di rottura effettivo della struttura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;