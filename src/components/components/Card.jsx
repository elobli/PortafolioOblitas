import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, subtitle, image, href }) => {
  return (
    <Link to={href} className="card">
      <div className="card-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {image && <img src={image} alt={title} className="card-image" />}
    </Link>
  );
};

export default Card;
