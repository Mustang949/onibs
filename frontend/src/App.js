import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000') // Calls the backend
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Title</h1>
      <p>{message || 'Loading...'}</p>
      <button>Feature1</button>
      <button>Feature2</button>
    </div>
  );
}

export default App;

