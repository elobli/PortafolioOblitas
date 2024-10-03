import React from 'react';
import './About.css'; // Asegúrate de tener un archivo CSS para estilos
import personalImage from './image/Foto.jpeg'; // Asegúrate de importar tu imagen

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={personalImage} alt="Your Name" />
      </div>
      <div className="about-text">
        <h2>Sobre Kevin Christian Oblitas Estrada</h2>
        <p>Soy Ingeniero en Sistemas, especializado en el desarrollo de páginas web, con amplia experiencia en programación tanto de Front-End como de Back-End</p>
        <p>Actualmente, trabajo como freelancer y estoy en búsqueda de oportunidades que me permitan aprender y desarrollarme profesionalmente en empresas o proyectos innovadores.</p>
        <p>Soy un apasionado de la tecnología, entusiasmado por adoptar y aprender sobre las innovaciones que continuamente emergen en el campo.</p>
        <p>Valoro profundamente el trabajo en equipo y soy adaptable a cambios tanto de entorno como de equipo. Me caracterizo por ser amable, calmado y amigable. </p>
      </div>
      <div className="about-competencies">
        <h3>Habilidades</h3>
        <ul>
          <li>Python- Intermedio</li>
          <li>React- intermedio</li>
          <li>C#- Intermedio</li>
          <li>JavaScript- Basico-Intermedio</li>
          <li>Microsoft Office- intermedio-avanzado</li>
          <li>Css- Intermedio</li>
          <li>HTML- Intermedio</li>
        </ul>
        <h3>Idiomas</h3>
        <ul>
          <li>Español- Nativo</li>
          <li>Ingles- intermedio-Avanzado</li>
        </ul>
      </div>
    </div>
  );
}

export default About;