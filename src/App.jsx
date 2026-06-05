import React from 'react';
import dati from './vincitori.json';
import './App.css';

function App() {
  return (
    <div className="contenitore-principale">
      <header className="header-spettacolo">
        <h1>🏆 Albo d'Oro 🏆</h1>
        <p className="sottotitolo">I campioni dei game ufficiali.</p>
      </header>

      <main className="griglia-vincitori">
        {dati.stagioni.map((vincitore) => (
          <article 
            key={vincitore.id} 
            className="card-vincitore"
            style={{ '--colore-card': vincitore.colore_tema }}
          >
            <div className="card-header">
              <h2>{vincitore.titolo_stagione}</h2>
            </div>
            
            <div className="card-corpo">
              <div className="segnaposto-immagine">
                 <span>{vincitore.giocatore.charAt(0)}</span>
              </div>
              <h3 className="nome-giocatore">{vincitore.giocatore}</h3>
              
              <div className="statistiche">
                <div className="stat">
                  <span className="stat-label">Immunità:</span>
                  <span className="stat-valore">{vincitore.immunita_vinte}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Voti Ricevuti:</span>
                  <span className="stat-valore">{vincitore.voti_ricevuti}</span>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <blockquote className="sentenza">
                "{vincitore.sentenza_host}"
              </blockquote>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;