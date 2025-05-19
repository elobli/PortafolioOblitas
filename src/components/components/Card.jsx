// Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, subtitle, image, href }) => {
  const content = (
    <div className="card">
      <div className="card-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {image && <img src={image} alt={title} className="card-image" />}
    </div>
  );

  if (typeof href !== 'string') return content;

  if (href.startsWith('http')) {
    return (
      <a href={href} className="card-link" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className="card-link">
      {content}
    </Link>
  );
};

export default Card;