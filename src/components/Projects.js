// En src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import './Proyects.css';

function Projects() {
  const projects = [
    {
      id: 1,  // Añade un identificador único para cada proyecto.
      name: "Mi Primer Proyecto Profesional",
      description: "Un proyecto simple para demostrar habilidades.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://osdav-bolivia.com/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FEmTGMIGOHtIS9sYgrFxTfAwY43P6EbVlg&s"
    },
    {
      id: 2,
      name: "Mi Segundo Proyecto Profesional",
      description: "Un proyecto simple para demostrar habilidades React.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://sistema-ambiental.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7ePl2OB0g9N1E4JqYsRV8_0YmfY2igJtYA&s"
    },
    {
      id: 3,
      name: "Portafolio Propio",
      description: "Un proyecto simple para demostrar habilidades React.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://portafolio-oblitas-dxjz1dhr0.vercel.app/",
      image: "https://cdn-icons-png.flaticon.com/512/3616/3616770.png"
    },
    {
      id: 3,
      name: "Realizandose Mas",
      description: "Un proyecto simple para demostrar habilidades React.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "SQL"],
      link: "",
      image: "https://png.pngtree.com/png-vector/20211022/ourmid/pngtree-coming-soon-banner-design-with-speaker-png-image_3999559.png"
    },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="projects-section">
      <h1>Proyectos Realizados</h1>
      <div className="projects-container">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;