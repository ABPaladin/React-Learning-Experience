import './App.css';
import Main from './Main';
import Todo from './Todo';
import Time from './Time';
import Rugaciune from './Rugaciune';
function App() {
  return (
    <div className="App">
      <Todo>
      <Main />
      <Time />
      <Rugaciune />
      </Todo>
    </div>
  );
}

export default App;
