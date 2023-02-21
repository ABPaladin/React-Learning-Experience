import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Catalog from './components/Catalog';
import Navbar from './components/Navbar';
import ItemPage from './components/ItemPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ItemPage />} />
          <Route path="*" element={<h1>components not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
