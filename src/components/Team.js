import React from 'react';
import './Team.css';

function Team() {
  return (
    <section className="section team-section">
      <div className="team-container">
        <span className="team-subtitle">The Visionary Behind Rehoboth</span>
        <h2>Founder & Managing Director</h2>
        
        <div className="founder-wrapper">
          <div className="founder-images">
            <div className="img-frame main-shot">
              
              <img 
                src={process.env.PUBLIC_URL + "/images/ceo.jpg"} 
                alt="Rajkumar Franklin - CEO" 
              />
            </div>
            <div className="img-frame award-shot">
             
              <img 
                src={process.env.PUBLIC_URL + "/images/award.jpg"} 
                alt="Rajkumar Franklin - Award Recognition" 
              />
              <div className="award-badge">Awarded Excellence</div>
            </div>
          </div>

          <div className="founder-bio">
            <h3>Rajkumar Franklin</h3>
            <span className="role">Founder & Managing Director</span>
            <p>
              As a second-generation builder, <strong>Rajkumar Franklin</strong> carries forward a 50-year 
              legacy of construction excellence in Chennai. His leadership is defined by a commitment 
              to Civil Engineering precision and a passion for turning customers' dreams into reality.
            </p>
            <p>
              Under his guidance, Rehoboth Builders has been recognized for quality and timely delivery. He personally ensures that every project 
              upholds the trust and reputation built over three decades of his personal 
              experience in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;