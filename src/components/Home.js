import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import profileImage from './image/Foto.jpeg';
import More from './components/More.jsx';
import './components/More.css';
import './components/Card.css';

function Home() {
    return (
      <div >
        <div className="home-container">
          <img src={profileImage} alt="Kevin_Oblitas_Estrada" className='profile-image'/>
          <h1>Kevin Christian Oblitas Estrada</h1>
          <p>Software Engineer & Web Developer.</p>
          <p>Welcome to my personal website! Here you can find information about my projects, skills, and experience.</p>
        </div>
        
        <More />
      </div>
      );
}

export default Home;
