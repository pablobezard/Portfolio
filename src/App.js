import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './index.css';
import MyWork from './components/MyWork/MyWork';

// Cambia la función Navigation a un componente funcional
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/home" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">My work</Link>
        </li>
        <li>
          <Link to="/experience" className="nav-link">Experience</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

// Cambia la función Footer a un componente funcional
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 PabloBezard. All rights reserved.</p>
    </footer>
  );
};

// Cambia la función App a un componente funcional
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
            <Route path="/projects" element={<MyWork />} />
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