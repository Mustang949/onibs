import React, { useState, useEffect } from 'react';

function Content() {
  // State for dupe count, loaded from local storage if available
  const [dupeCount, setDupeCount] = useState(() => {
    return localStorage.getItem('dupeCount') || 3; // Default to 3
  });

  // Update local storage when dupeCount changes
  useEffect(() => {
    localStorage.setItem('dupeCount', dupeCount);
  }, [dupeCount]);

  return (
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
                <td>Dupe
                  <input 
                    type="number" 
                    value={dupeCount} 
                    onChange={(e) => setDupeCount(e.target.value)} 
                    min="1" 
                    style={{ width: "50px", marginLeft: "5px" }} 
                  />
                </td>
                <td>thing["Duplicant"]["O2"] kg/cycle</td>
                <td>thing["Duplicant"]["CO2"] kg/cycle</td>
                <td>thing["Duplicant"]["kcal"] kg/cycle</td>
                <td>thing["Duplicant"]["Heat"] kg/cycle</td>
                <td>thing["Duplicant"]["Power"] kg/cycle</td>
                <td>thing["Duplicant"]["Polluted Water"] kg/cycle</td>
                <td>thing["Duplicant"]["Polluted Dirt"] kg/cycle</td>
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
                <td>Geysers</td>
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
  );
}

export default Content;