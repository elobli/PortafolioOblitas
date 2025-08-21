// src/Home.jsx (versión actualizada)
import React, { useEffect, useRef } from 'react';
import profileImage from './image/Foto.jpeg';
import More from './components/More';
import './Home.css';
import about from './image/About_mi.png';
import tools from './image/tools.png';

function Home() {
  const homeMoreItems = [
    {
      title: "ABOUT ME",
      subtitle: "Personality & Experience",
      image: about,
      href: "/about"
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
      image: tools,
      href: "/tools"
    }
  ];

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animación de entrada para la sección principal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Efecto parallax para la imagen de perfil
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.15;
        imageRef.current.style.transform = `translateY(${rate}px) scale(${1 - scrolled * 0.0002})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-wrapper">
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

      <section className="home-container" ref={sectionRef}>
        <div className="profile-image-container">
          <div className="image-border-animation">
            <img 
              src={profileImage} 
              alt="Kevin Oblitas" 
              className="profile-image" 
              ref={imageRef}
            />
          </div>
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
        
        <h1>Kevin Christian Oblitas Estrada</h1>
        <p className="typing-animation">Software Engineer & Web Developer.</p>
        <p>
          Welcome to my personal website! Here you can find information about my projects,
          skills, and experience.
        </p>
        
        <div className="scroll-indicator">
          <span>Scroll down</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>
      
      <More items={homeMoreItems} sectionTitle="MORE" />
    </div>
  );
}

export default Home;