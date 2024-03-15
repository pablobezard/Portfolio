import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import MyWork from './components/MyWork/MyWork';
import LanguageSelector from './components/LanguageSelector/LanguageSelector'; // Importa el componente LanguageSelector
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de hamburguesa
import './index.css';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <label htmlFor="menu-toggle" className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </label>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={showMenu} />
      <ul className={`nav-links ${showMenu ? 'open' : ''}`}>
        <li>
          <Link to="/home" className="nav-link" onClick={() => setShowMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to="/experience" className="nav-link" onClick={() => setShowMenu(false)}>Experience</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={() => setShowMenu(false)}>Contact</Link>
        </li>
        <li>
          <LanguageSelector />
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
     <p>&copy; 2023 All rights reserved. Designed and programmed by PabloBezard with React.</p>
    </footer>
  );
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
