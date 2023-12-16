import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './index.css';
import MyWork from './components/MyWork/MyWork';

function Navigation() {
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
}

function Footer() {
  return (
    <footer className="footer">
      {/* Contenido del footer */}
      <p>&copy; 2023 PabloBezard. All rights reserved.</p>
    </footer>
  );
}


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
        <div className="content">
          <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Projects" element={<MyWork />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
