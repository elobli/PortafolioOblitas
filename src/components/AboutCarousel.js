// AboutCarousel.jsx
import React from 'react';
import './AboutCarousel.css';

import foto1 from './image/Foto1.png';
import foto2 from './image/Foto2.jpg';
import foto3 from './image/Foto3.jpg';
import foto4 from './image/Foto4.jpg';
import foto5 from './image/Foto5.jpg';
import foto6 from './image/Foto6.jpg';
import foto7 from './image/Foto7.png';
import foto8 from './image/Foto8.png';
import foto9 from './image/Foto9.jpg';
import foto10 from './image/Foto10.jpeg';


const photos = [foto1, foto2, foto3, foto4, foto5, foto6,foto7,foto8,foto9,foto10];

function AboutCarousel() {
  return (
    <section className="carousel" style={{
      '--no-of-slides': photos.length,
      '--slide-width': '220px',
      '--slide-width-small': '160px',
      '--iteration-time': '40s',
    }}>
      <div className="carousel__wrapper">
        {photos.concat(photos).map((photo, index) => (
          <div className="carousel__slide" key={index}>
            <div className="carousel__image-wrapper">
              <img src={photo} alt={`Foto ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutCarousel;