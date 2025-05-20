import React from 'react';
import './About.css'; // Tu CSS general del About
import AboutCarousel from './AboutCarousel'; // 👈 Importamos el carrusel
import profileImage from './image/Foto.jpeg';
import More from './components/More';

function About() {
  const homeMoreItems = [
    {
      title: "HOME PAGE",
      subtitle: "My personal website",
      image: profileImage,
      href: "/"
    },
    {
      title: "NOW",
      subtitle: "What I'm doing now",
      image: profileImage,
      href: "/now"
    },
    {
      title: "TOOLS",
      subtitle: "Software I use and recommend",
      image: profileImage,
      href: "/tools"
    }
  ];

  return (
    <div className="about-container">
      <section className="about-section">
      <div className="about-top">
        <div className="about-text">
          <h2>¿Quién soy?</h2>
          <p>
            Soy Kevin, ingeniero de software apasionado por la educación y la tecnología. Me enfoco en crear
            soluciones innovadoras y funcionales para mejorar procesos educativos y empresariales.
          </p>

          <h2>¿Qué hago profesionalmente?</h2>
          <p>
            Desarrollo aplicaciones con tecnologías modernas como React, Node.js y bases de datos Oracle. Me especializo en
            optimizar interfaces y estructuras que brinden una experiencia fluida al usuario.
          </p>
        </div>

        <div className="about-photo">
          <img src={profileImage} alt="Kevin Oblitas" />
        </div>
      </div>
    </section>

      {/* 👇 Aquí va el carrusel de imágenes */}
      <AboutCarousel />

      <section className="about-interests">
        <h2>Aficiones e Intereses</h2>
        <ul>
          <li> Lectura</li>
          <li> Desarrollo de software</li>
          <li> Videojuegos</li>
          <li> Música</li>
        </ul>
      </section>
      <More items={homeMoreItems} sectionTitle="MORE" />
    </div>
  );
}

export default About;
