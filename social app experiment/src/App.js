import './App.css';
import Create from './components/Create';
import Ctx from './context/Ctx'
import Posts from './components/Posts';
function App() {
  return (
    <div className="App">
    <Ctx>
    <Create /> 
    <hr></hr>     
    <Posts />
    </Ctx>
    </div>
  );
}

export default App;
