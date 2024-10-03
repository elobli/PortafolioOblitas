// En src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="technologies">
          {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">Ver Más</a>
      </div>
    </div>
  );
}

export default ProjectCard;
