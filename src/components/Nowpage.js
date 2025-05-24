import React from 'react';
import './Now.css';
import defensaPublica from './image/About.jpg'; // solo si tienes una imagen
import profileImage from './image/Foto.jpeg';
import More from './components/More';
import './Home.css';
import about from './image/About_mi.png';
import tools from './image/tools.png'
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
      title: "ABOUT MY",
      subtitle: "Personality & Experience",
      image: about,
      href: "/about"
    },
    {
      title: "HOME PAGE",
      subtitle: "Principal page",
      image: profileImage,
      href: "/now"
    },
    {
      title: "TOOLS",
      subtitle: "Software I use and recommend",
      image: tools,
      href: "/tools"
    }
  ];
  return (
    <div className="page-now-wrapper"> {/* <- Fondo general aquí */}
      <div className="now-container">
        <aside className="now-sidebar">
          <h2>NOW PAGE</h2>
          <h3>¿Qué estoy haciendo últimamente?</h3>
          <p>
            Este es un resumen cronológico de mis actividades profesionales, académicas y proyectos más recientes.
          </p>
        </aside>

        <div className="now-events">
          {eventos.map((evento, index) => (
            <div key={index} className="evento">
              <h4>{evento.fecha}</h4>
              <p>{evento.descripcion}</p>
              {evento.imagen && <img src={evento.imagen} alt="Evento relacionado" />}
            </div>
          ))}
        </div>
        
      </div>
      <div className="more-section">
          <More items={homeMoreItems} sectionTitle="MORE" />
      </div>
    </div>
  );
}
export default Now;
