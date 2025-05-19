// AboutCarousel.jsx
import React from 'react';
import './AboutCarousel.css';

import foto1 from './image/Foto.jpeg';
import foto2 from './image/Foto.jpeg';
import foto3 from './image/Foto.jpeg';
import foto4 from './image/Foto.jpeg';
import foto5 from './image/Foto.jpeg';
import foto6 from './image/Foto.jpeg';

const photos = [foto1, foto2, foto3, foto4, foto5, foto6];

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