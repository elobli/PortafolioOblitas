import React, { useEffect, useRef } from 'react';
import './Now.css';
import defensaPublica from './image/About.jpg';
import profileImage from './image/Foto.jpeg';
import More from './components/More';
import about from './image/About_mi.png';
import tools from './image/tools.png';

const eventos = [
  {
    fecha: 'Abril 4, 2025',
    descripcion: 'Finalicé mi trabajo en Yape y actualmente estoy enfocado en realizar cursos de especialización en desarrollo web, mientras continúo con mi Maestría en Educación Superior.',
  },
  {
    fecha: 'Marzo 3, 2025',
    descripcion: 'Comencé un nuevo trabajo en Yape como promotor de servicios, fortaleciendo mis competencias en gestión digital y contacto con usuarios.',
  },
  {
    fecha: 'Marzo 1, 2025',
    descripcion: 'Finalicé mi etapa en Yango como operador de sistemas y project manager, donde estuve liderando tareas técnicas y operativas en equipo.',
  },
  {
    fecha: 'Octubre 10, 2024',
    descripcion: 'Iniciamos un proyecto IoT enfocado en un huerto automatizado. Trabajamos con sensores y bases de datos no relacionales para registrar el comportamiento del entorno.',
  },
  {
    fecha: 'Septiembre 10, 2024',
    descripcion: 'También comencé a trabajar en Yango como promotor de servicios.',
  },
  {
    fecha: 'Septiembre 10, 2024',
    descripcion: 'Concluyó el proyecto freelance para la empresa OSDAV.',
  },
  {
    fecha: 'Junio 20, 2024',
    descripcion: 'Comencé un proyecto freelance junto a un equipo para desarrollar la página web de la empresa OSDAV.',
  },
  {
    fecha: 'Junio 26, 2024',
    descripcion: 'Realicé mi defensa pública del proyecto de grado.',
    imagen: defensaPublica,
  },
  {
    fecha: 'Mayo 29, 2024',
    descripcion: 'Presenté mi defensa privada del proyecto de grado.',
  },
  {
    fecha: 'Marzo 3, 2024',
    descripcion: 'Me desempeñé como tutor apoyando a estudiantes en el aprendizaje de programación.',
  },
  {
    fecha: 'Octubre 9, 2023',
    descripcion: 'Inicié un trabajo en Yango como operador de sistemas y project manager.',
  },
  {
    fecha: 'Noviembre 10, 2023',
    descripcion: 'Empecé mi Maestría en Educación Superior.',
  },
];

function Now() {
  const homeMoreItems = [
    {
      title: "ABOUT ME",
      subtitle: "Personality & Experience",
      image: about,
      href: "/about"
    },
    {
      title: "HOME PAGE",
      subtitle: "Principal page",
      image: profileImage,
      href: "/"
    },
    {
      title: "TOOLS",
      subtitle: "Software I use and recommend",
      image: tools,
      href: "/tools"
    }
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (timelineRef.current) {
      const events = timelineRef.current.querySelectorAll('.timeline-event');
      events.forEach(event => observer.observe(event));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="now-wrapper">
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
      
      <div className="now-container">
        <div className="now-header">
          <h1 className="now-title">My Journey</h1>
          <p className="now-subtitle">
            A chronological timeline of my professional and academic experiences
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>
          {eventos.map((evento, index) => (
            <div 
              key={index} 
              className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="event-content">
                <div className="event-date">{evento.fecha}</div>
                <div className="event-description">
                  <p>{evento.descripcion}</p>
                </div>
                {evento.imagen && (
                  <div className="event-image">
                    <img src={evento.imagen} alt="Event related" />
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
      
      <div className="now-more-section">
        <More items={homeMoreItems} sectionTitle="EXPLORE MORE" />
      </div>
    </div>
  );
}

export default Now;