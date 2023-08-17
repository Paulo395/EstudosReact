import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Preview from './pages/preview';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/pages/home.js' element={<Home />} />
        <Route path='/pages/preview.js' element={<Preview />} />
      </Routes>
    </Router>

  );
}

export default App;
