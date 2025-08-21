// src/components/Projects.js
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Proyects.css';

function Projects() {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      name: "Mi Primer Proyecto Profesional",
      description: "Este proyecto fue desarrollado para satisfacer la necesidad de una empresa de proporcionar información clara y accesible a través de su página web.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://osdav-bolivia.com/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FEmTGMIGOHtIS9sYgrFxTfAwY43P6EbVlg&s",
      category: "Web Development"
    },
    {
      id: 2,
      name: "Mi Segundo Proyecto Profesional",
      description: "Este proyecto consistió en el desarrollo de un análisis inteligente aplicado a un sistema IoT para monitorear y mejorar y monitorear en tiempo real la calidad del aire.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "NOSQL", "Python"],
      link: "https://sistema-ambiental.vercel.app/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7ePl2OB0g9N1E4JqYsRV8_0YmfY2igJtYA&s",
      category: "IoT & Analytics"
    },
    {
      id: 3,
      name: "Portafolio Propio",
      description: "Portafolio personal para muestra de mis habilidades con las herramientas de desarrollo frontend y diseño moderno.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://portafolio-oblitas.vercel.app/",
      image: "https://cdn-icons-png.flaticon.com/512/3616/3616770.png",
      category: "Web Development"
    },
    {
      id: 4,
      name: "Proyectos Kaypikani",
      description: "Plataforma web diseñada para operar en paralelo con una app móvil de delivery como tambien informacion de la misma.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Supabase","Android Studio"],
      link: "https://www.kaypikani.com/",
      image: "https://www.kaypikani.com/assets/logo-DBIOM7Vs.png",
      category: "Web Development"
    },
    {
      id: 5,
      name: "Proyecto TAC-MENTE",
      description: "Página informativa sobre una empresa de soluciones organizacionales en el ámbito empresarial y Horizon-te en el ámbito psicológico con reservacion de citas.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Gmail"],
      link: "https://tacmente.com/",
      image: "https://tacmente.com/assets/sinfondo-QzkXd_NE.png",
      category: "Web Development"
    },
    {
      id: 6,
      name: "Proyecto Wiltech",
      description: "Actualmente trabajando en nuevos proyectos con tecnologías modernas y frameworks avanzados.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "SQL"],
      link: "https://wiltech-web-front-olu2.vercel.app//",
      image: "https://png.pngtree.com/png-vector/20211022/ourmid/pngtree-coming-soon-banner-design-with-speaker-png-image_3999559.png",
      category: "Upcoming"
    },
  ];

  // Obtener categorías únicas
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filtrar proyectos
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    // Animación de entrada para las tarjetas
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.project-card');
      cards.forEach(card => observer.observe(card));
    }
    
    return () => observer.disconnect();
  }, [filter]);

  return (
    <div className="projects-wrapper">
      <div className="animated-background">
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="projects-container" ref={containerRef}>
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">A collection of my work and professional projects</p>
          
          <div className="projects-filter">
            {categories.map(category => (
              <button
                key={category}
                className={filter === category ? 'active' : ''}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;