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
                <th></th>
                <th>People and Things</th>
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
                <td>Total</td>
                <td></td>
                <td>-2 kg/cycle</td>
                <td>300 g/cycle</td>
                <td>2000</td>
                <td>1</td>
                <td></td>
                <td></td>
                <td>3 kg/cycle</td>
              </tr>
              <tr>
                <td>Life Forms</td>
                <td>Dupe 3</td>
                <td>-2 kg/cycle</td>
                <td>300 g/cycle</td>
                <td>2000</td>
                <td>1</td>
                <td></td>
                <td></td>
                <td>3 kg/cycle</td>
              </tr>
              <tr>
                <td></td>
                <td>Add Trait</td>
                <td>-</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Add Critter</td>
                <td>-</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Add Plant</td>
                <td>-</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Buildings</td>
                <td>Add Building</td>
                <td>-</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><Geysers</td>
                <td>Add Geyser</td>
                <td>-</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
