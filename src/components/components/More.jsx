// src/components/More.jsx
import React from 'react';
import Card from './Card';
import './More.css';

import avatar from '../image/Foto.jpeg';
import now from '../image/Foto.jpeg';
import tools from '../image/Foto.jpeg';

const More = () => {
  return (
    <section className="more-section">
      <h2 className="more-title">MORE</h2>
      <div className="more-grid">
        <Card
          title="ABOUT ME"
          subtitle="Personality & Experience"
          image={avatar}
          href="/about"         // ✅ esto redirige a /about
        />
        <Card
          title="NOW"
          subtitle="What I'm doing now"
          image={now}
          href="/now"
        />
        <Card
          title="TOOLS"
          subtitle="Software I use and recommend"
          image={tools}
          href="/tools"
        />
        <Card
          title="TOOLS"
          subtitle="Software I use and recommend"
          image={tools}
          href="/tools"
        />
      </div>
    </section>
  );
};

export default More;
