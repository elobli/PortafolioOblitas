import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import profileImage from './image/Foto.jpeg'; 

function Home() {
    return (
        <div className="home-container">
          <img src={profileImage} alt="Kevin_Oblitas_Estrada" className='profile-image'/>
          <h1>Kevin Christian Oblitas Estrada</h1>
          <p>Software Engineer & Web Developer.</p>
        </div>
      );
}

export default Home;
