import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <h1>Title</h1>
        </nav>
      </header>
      
      <main>
        <div className="description">
          <p>
            Welcome to our sci-fi inspired app! Experience an interface influenced by Oxygen Not Included’s unique aesthetic.
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
