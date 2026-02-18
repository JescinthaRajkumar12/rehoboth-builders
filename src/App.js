import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Team from './components/Team';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import GalleryPage from './pages/GalleryPage'; 

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Team />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;