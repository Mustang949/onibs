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

        {/* Table Section */}
        <div className="data-table">
          <h2>Resource Levels</h2>
          <table>
            <thead>
              <tr>
                <th>O₂</th>
                <th>CO₂</th>
                <th>kcal</th>
                <th>Heat</th>
                <th>Power</th>
                <th>Polluted Water</th>
                <th>Polluted Dirt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20%</td>
                <td>5%</td>
                <td>2000</td>
                <td>75°C</td>
                <td>1200W</td>
                <td>30L</td>
                <td>15kg</td>
              </tr>
              <tr>
                <td>18%</td>
                <td>6%</td>
                <td>1800</td>
                <td>70°C</td>
                <td>1100W</td>
                <td>25L</td>
                <td>12kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
