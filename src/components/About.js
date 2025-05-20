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
          <h2>Who am I?</h2>
          <p> I'm Kevin, a software engineer passionate about education and technology. I focus on creating innovative and functional solutions to improve educational, pedagogical, and business processes through software. </p>

          <h2>What do I do professionally?</h2>
          <p> I develop applications using modern technologies such as React, Python, PHP, C#, C++, CSS, Node.js, and databases like Oracle, MongoDB, and also SQL. I specialize in Back-End development but also work on the Front-End, aiming to stay proficient in both areas. I create both websites and desktop applications, being adaptable to any technology as well as any type of project. I enjoy learning new technologies and programming languages, as well as frameworks. </p>
          <h2>What motivates me?</h2>
          <p> Challenges that push me to rise to the occasion and test my existing knowledge. I enjoy all types of projects, but I always like to learn something new and to teach what I learn — whether it's in classes or sharing knowledge with friends. </p>
          <h2>What else?</h2>
          <p> I love keeping up with new app features and taking on more challenges to push my skills further. I really enjoy playing video games such as League of Legends, Valorant, Call of Duty, and others, as well as strategy board games. I also like watching classes or streams from other programmers. Outside the computer, I enjoy going for walks, traveling, and spending time with my pets and family. I also enjoy practicing my English. </p>
        </div>

        <div className="about-photo">
          <img src={profileImage} alt="Kevin Oblitas" />
        </div>
      </div>
    </section>

      {/* 👇 Aquí va el carrusel de imágenes */}
      <AboutCarousel />
      <More items={homeMoreItems} sectionTitle="MORE" />
    </div>
  );
}

export default About;
