import React from 'react';
// We import useLocation and useNavigate to check where we are and move around
import { Link, useLocation, useNavigate } from 'react-router-dom'; 

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  
  const scrollToSection = (sectionId) => {
    // 1. Check if we are currently on the Home page ('/')
    if (location.pathname === '/') {
      // If yes, just find the section and scroll to it
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on the Gallery page, go to Home first
      navigate('/');
      
      // Wait a tiny bit (100ms) for the Home page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src={process.env.PUBLIC_URL + "/images/logo.jpg"} 
              alt="Logo" 
              style={{ height: '45px', borderRadius: '4px' }} 
            />
            <span className="brand-name">REHOBOTH BUILDERS</span>
        </Link>
      </div>

      <nav>
        
        <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
        
        <Link to="/gallery">Gallery</Link>
        
        <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
      </nav>
    </header>
  );
}

export default Navbar;