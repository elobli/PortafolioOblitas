// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/components/Header';
import Footer from './components/components/Footer';
import './App.css';
import Tools from './components/Tools';
import Now from './components/Now';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/now" element={<Now />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

