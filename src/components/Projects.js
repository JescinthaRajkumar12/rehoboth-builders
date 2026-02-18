import React from 'react';

function Projects() {
  const projectList = [
    // FIX: Add process.env.PUBLIC_URL to all paths (images AND videos)
    { 
      id: 1, 
      title: "The Grand Villa", 
      category: "Residential", 
      img: process.env.PUBLIC_URL + "/images/project1.jpg" 
    },
    { 
      id: 2, 
      title: "Gallery", 
      category: "Commercial", 
      img: process.env.PUBLIC_URL + "/images/project2.mp4" 
    },
    { 
      id: 3, 
      title: "Minimalist Loft", 
      category: "Interior", 
      img: process.env.PUBLIC_URL + "/images/project3.jpg" 
    },
  ];

  return (
    <section id="projects" className="section dark">
      <h2>Selected Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-item" key={project.id}>
            {/* The logic here stays the same, it just uses the fixed path now */}
            {project.img.endsWith(".mp4") ? (
              <video src={project.img} controls width="100%" height="100%" style={{ objectFit: 'cover' }} />
            ) : (
              <img src={project.img} alt={project.title} />
            )}
            
            <div className="project-info">
              <span style={{ color: '#ffcc00', fontWeight: 'bold' }}>{project.category}</span>
              <h3 style={{ margin: '5px 0 0 0' }}>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;