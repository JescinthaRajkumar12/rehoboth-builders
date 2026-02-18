import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      
      <img 
        src={process.env.PUBLIC_URL + "/images/hero.jpg"} 
        alt="Construction" 
      />

      <div className="hero-overlay">
        <h1>Crafting Spaces <br/> That Inspire</h1>
        <p>Premium Construction & Interior Solutions</p>
        
        <Link to="/gallery" className="hero-btn">
          View Our Work
        </Link>
      </div>
    </section>
  );
}

export default Hero;