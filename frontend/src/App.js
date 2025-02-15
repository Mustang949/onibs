import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <h1>Oxygen Not Included - Balance Sheet</h1>
        </nav>
      </header>
      
      <main>
        <div className="description">
          <p>
            A balance sheet for Oxygen Not Included.
          </p>
        </div>
        
        <div className="buttons">
          <button>Feature 1</button>
          <button>Feature 2</button>
        </div>
      </main>
    </div>
  );
}

export default App;
