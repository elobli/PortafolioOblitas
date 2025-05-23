// src/Home.jsx
import React from 'react';
import profileImage from './image/Foto.jpeg';
import More from './components/More';
import './Home.css';
import about from './image/About_mi.png';
import tools from './image/tools.png';

function Home() {
  const homeMoreItems = [
    {
      title: "ABOUT MY",
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

  return (
    <div className="home-wrapper">
      <section className="home-container">
        <img src={profileImage} alt="Kevin Oblitas" className="profile-image" />
        <h1>Kevin Christian Oblitas Estrada</h1>
        <p>Software Engineer & Web Developer.</p>
        <p>
          Welcome to my personal website! Here you can find information about my projects,
          skills, and experience.
        </p>
      </section>
        <More items={homeMoreItems} sectionTitle="MORE" />
    </div>
  );
}

export default Home;
