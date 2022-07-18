import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/NavBar';
import Index from './pages/Index';
import List from './pages/List';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
