// src/components/ProjectCard.js (actualizado)
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project, style }) {
  return (
    <div className="project-card" style={style}>
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="technologies">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        ) : (
          <button className="btn" disabled>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;