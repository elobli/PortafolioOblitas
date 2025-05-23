import React from 'react';
import './Now.css';

function Now() {
  return (
    <div className="now-container">
      <aside className="now-sidebar">
        <h2>NOW PAGE</h2>
        <h4>What is this page?</h4>
        <p>The answer to “what are you up to lately?”</p>
        <p>Part of the <a href="#">Now Now Now project</a>.</p>
      </aside>

      <section className="now-content">
        <article className="now-entry">
          <h3>OCTOBER 9TH, 2024</h3>
          <p>This weekend, I pushed a big update to my website's homepage...</p>
          <p><a href="#">Read about it here</a>.</p>
        </article>

        <article className="now-entry">
          <h3>MAY 23RD, 2024</h3>
          <p>I used ChatGPT + 5 hours to make a Chrome extension...</p>
          <img src="/image/now-extension.png" alt="Chrome extension preview" />
        </article>
        
        {/* Puedes seguir agregando artículos aquí */}
      </section>
    </div>
  );
}

export default Now;
