import React from 'react';
import Card from './Card';
import './More.css';

const More = ({ items = [], sectionTitle = "MORE" }) => {
  return (
    <section className="more-section">
      <h2 className="more-title">{sectionTitle}</h2>
      <div className="more-grid">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default More;

