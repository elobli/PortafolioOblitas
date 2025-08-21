import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import AboutCarousel from './AboutCarousel';
import profileImage from './image/Foto.jpeg';
import More from './components/More';
import about from './image/About_mi.png';
import tools from './image/tools.png';

function About() {
  const homeMoreItems = [
    {
      title: "HOME PAGE",
      subtitle: "Principal page",
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
      image: tools,
      href: "/tools"
    }
  ];

  const textRef = useRef(null);
  const photoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simular carga y luego mostrar animaciones
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-wrapper">
      <div className="animated-background">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 7}s`,
              width: `${8 + Math.random() * 15}px`,
              height: `${8 + Math.random() * 15}px`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="about-container">
        <section className="about-section">
          <div className="about-top">
            <div className={`about-text ${isVisible ? 'animate-in' : ''}`} ref={textRef}>
              <h2 className="text-reveal">Who am I?</h2>
              <p className="fade-in">I'm Kevin, a software engineer passionate about education and technology. I focus on creating innovative and functional solutions to improve educational, pedagogical, and business processes through software.</p>

              <h2 className="text-reveal">What do I do professionally?</h2>
              <p className="fade-in">I develop applications using modern technologies such as React, Python, PHP, C#, C++, CSS, Node.js, and databases like Oracle, MongoDB, and also SQL. I specialize in Back-End development but also work on the Front-End, aiming to stay proficient in both areas.</p>
              
              <h2 className="text-reveal">What motivates me?</h2>
              <p className="fade-in">Challenges that push me to rise to the occasion and test my existing knowledge. I enjoy all types of projects, but I always like to learn something new and to teach what I learn.</p>
              
              <h2 className="text-reveal">What else?</h2>
              <p className="fade-in">I love keeping up with new app features and taking on more challenges to push my skills further. I really enjoy playing video games and strategy board games.</p>
            </div>

            <div className={`about-photo ${isVisible ? 'animate-in' : ''}`} ref={photoRef}>
              <div className="photo-container">
                <div className="photo-frame">
                  <div className="frame-decoration frame-1"></div>
                  <div className="frame-decoration frame-2"></div>
                  <div className="frame-decoration frame-3"></div>
                  <img src={profileImage} alt="Kevin Oblitas" className="profile-img" />
                </div>
                <div className="floating-elements">
                  <div className="floating-element element-1">⚡</div>
                  <div className="floating-element element-2">🚀</div>
                  <div className="floating-element element-3">💻</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carrusel */}
        <div className={`carousel-container ${isVisible ? 'animate-in' : ''}`}>
          <AboutCarousel />
        </div>
      </div>
      
      <div className={`about-more-section ${isVisible ? 'animate-in' : ''}`}>
        <More items={homeMoreItems} sectionTitle="EXPLORE MORE" />
      </div>
    </div>
  );
}

export default About;