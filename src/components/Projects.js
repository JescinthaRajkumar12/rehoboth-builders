function Projects() {
  const projectList = [
    { id: 1, title: "The Grand Villa", category: "Residential", img: "/images/project1.jpg" },
    { id: 2, title: "Gallery", category: "Commercial", img: "/images/project2.mp4" },
    { id: 3, title: "Minimalist Loft", category: "Interior", img: "/images/project3.jpg" },
  ];

  return (
    <section id="projects" className="section dark">
      <h2>Selected Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-item" key={project.id}>
            {project.img.endsWith(".mp4") ? (
              <video src={project.img} controls />
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