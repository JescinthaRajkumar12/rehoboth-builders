import React, { useEffect } from 'react';


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import '../pages/GalleryPage.css'; 

function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
    "/images/gallery10.jpg",
    "/images/gallery11.jpg",
    "/images/gallery12.jpg"
  ];

  return (
    <>
      <Navbar />
      <div className="gallery-page-container" style={{ paddingTop: '120px', background: '#111', minHeight: '100vh', paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px', color: 'white' }}>
          <h1 style={{ fontSize: '42px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Our Masterpieces</h1>
          <p style={{ color: '#ffcc00', fontStyle: 'italic' }}>A visual journey through our finest constructions</p>
        </div>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-item" key={index}>
              <img src={img} alt={`Project ${index + 1}`} />
              <div className="overlay">
                <span>View Project</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href="/" style={{ 
                color: '#111', 
                background: '#ffcc00',
                textDecoration: 'none', 
                fontWeight: 'bold',
                padding: '15px 30px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderRadius: '4px'
            }}>Back to Home</a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GalleryPage;