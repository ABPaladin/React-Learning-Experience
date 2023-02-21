import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>Ai apasat de {count} ori</p>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      
    </div>
  );
}

export default App;
