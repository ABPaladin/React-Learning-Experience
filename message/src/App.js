import './App.css';
import {useState} from 'react';
function App() {
  const [message, setMessage] = useState('');
  
  const ScimbScris = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={ScimbScris}
        value={message}
      />
    <h2>Message: {message}</h2>
    </div>
  );
}

export default App;
