import React from 'react';
import './About.css'; // Tu CSS general del About
import AboutCarousel from './AboutCarousel'; // 👈 Importamos el carrusel

function About() {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>Sobre Mí</h1>
        <p>
          Soy Kevin Oblitas, un profesional apasionado por la tecnología y la educación superior.
          A lo largo de mi carrera he impulsado proyectos educativos y tecnológicos, destacando por
          mi compromiso con la innovación y la mejora continua.
        </p>
      </section>

      {/* 👇 Aquí va el carrusel de imágenes */}
      <AboutCarousel />

      <section className="about-interests">
        <h2>Aficiones e Intereses</h2>
        <ul>
          <li>📚 Lectura</li>
          <li>💻 Desarrollo de software</li>
          <li>🎮 Videojuegos</li>
          <li>🎵 Música</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
