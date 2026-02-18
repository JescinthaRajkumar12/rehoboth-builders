// Introduction.js
import React from 'react';
import './Introduction.css'; 

function Introduction() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-text">
          <span className="subtitle">Who We Are</span>
          <h2>Building Dreams on a <br/> Foundation of Trust</h2>
          <p>
            <strong>Rehoboth Builders</strong> is a premier Civil Engineering and Construction firm rooted in <strong>Chennai</strong>. 
            As second-generation builders carrying a <strong>50-year legacy</strong> and over 30 years of direct industry leadership, 
            we blend traditional integrity with modern precision.
          </p>
          <p>
            We don't just build structures; we bring visions to life. Our reputation is built on uncompromised quality, 
            transparent communication, and an unwavering commitment to timely delivery. When you build with Rehoboth, 
            you build with family.
          </p>
        </div>
        
        <div className="intro-stats">
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Years of Legacy</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2nd</span>
            <span className="stat-label">Generation Builders</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Timely Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;