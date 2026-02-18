import React from 'react';
import { Link } from 'react-router-dom'; 
function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
      
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/images/logo.jpg" alt="Logo" style={{ height: '45px', borderRadius: '4px' }} />
            <span className="brand-name">REHOBOTH BUILDERS</span>
        </Link>
      </div>

      <nav>
        
        <a href="/#services">Services</a>
        <a href="/#projects">Projects</a>
        
       
        <Link to="/gallery">Gallery</Link>
        
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;