import React, { useEffect, useRef } from 'react';
import './Tools.css';
import copilot from './image/github-copilot-icon.png';
import supabase from './image/supabase-seeklogo.svg';
import firebase from './image/FIREBASE.png';
import canva from './image/Canva-Logo-PNG-Picture.png';
import auth from './image/auth0-seeklogo.svg';
import vercel from './image/vercel-seeklogo.svg';
import profileImage from './image/Foto.jpeg';
import about from './image/About_mi.png';
import tool from './image/tools.png';
import git  from "./image/git.png"
import android  from "./image/android.png"
import github  from "./image/github-mark-white.png"
import MORE from './components/More';

const ToolsMoreItems = [
  {
    title: "ABOUT ME",
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
    title: "HOME PAGE",
    subtitle: "Principal page",
    image: profileImage,
    href: "/"
  }
];

const tools = [
  {
    name: "Visual Studio Code",
    description: "A lightweight, fast, and highly customizable editor. With a wide range of extensions, it supports multiple languages and UI design, making it a great choice for developers and designers alike.",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    link: "https://code.visualstudio.com/",
    category: "Development"
  },
  {
    name: "Figma",
    description: "A powerful, intuitive, and real-time collaborative design tool, ideal for teams seeking efficiency and smooth communication in creating interfaces and prototypes, all stored in the cloud.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    link: "https://figma.com",
    category: "Design"
  },
  {
    name: "GitHub",
    description: "A powerful platform for version control and collaboration. It makes it easy to manage code, track changes, and work with teams, becoming essential for modern software development.",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    link: "https://github.com",
    category: "Development"
  },
  {
    name: "Notion",
    description: "A versatile and intuitive productivity tool. It combines notes, tasks, databases, and collaboration features in one place, making it ideal for organizing both personal and team projects.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    link: "https://www.notion.so/",
    category: "Productivity"
  },
  {
    name: "Vercel",
    description: "A fast and developer-friendly platform for deploying web applications. It offers seamless integration with modern frameworks, automatic deployments, and a great developer experience focused on speed and simplicity.",
    icon: vercel,
    link: "https://vercel.com/",
    category: "Deployment"
  },
  {
    name: "Auth0",
    description: "A flexible and secure authentication platform. It simplifies user login, authorization, and identity management, making it easy to integrate robust security features into any application.",
    icon: auth,
    link: "https://auth0.com/",
    category: "Development"
  },
  {
    name: "Canva",
    description: "A user-friendly graphic design platform. It offers a wide range of templates and tools, making it easy for anyone to create professional-quality visuals, from social media posts to presentations.",
    icon: canva,
    link: "https://www.canva.com/",
    category: "Design"
  },
  {
    name: "ChatGPT",
    description: "An AI language model designed to assist with a wide range of tasks. It can answer questions, generate content, help with coding, and support creative or professional projects through natural, conversational interaction.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    link: "https://chat.openai.com/",
    category: "AI"
  },
  {
    name: "GitHub Copilot",
    description: "An AI-powered coding assistant. It helps developers write code faster by suggesting lines or entire functions in real time, improving productivity and reducing repetitive tasks.",
    icon: copilot,
    link: "https://github.com/features/copilot",
    category: "AI"
  },
  {
    name: "Netlify",
    description: "A powerful platform for deploying and hosting modern web applications. It offers continuous deployment, serverless functions, and an intuitive workflow, making it ideal for developers looking for speed and simplicity in web development.",
    icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    link: "https://www.netlify.com/",
    category: "Deployment"
  },
  {
    name: "Firebase",
    description: "A comprehensive app development platform by Google. It offers tools like real-time databases, authentication, hosting, and analytics, making it easy to build and scale modern web and mobile apps.",
    icon: firebase,
    link: "https://firebase.google.com/",
    category: "Development"
  },
  {
    name: "Postman",
    description: "A powerful API platform used for building, testing, and documenting APIs. It streamlines the development process with a user-friendly interface and collaboration features for teams.",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    link: "https://www.postman.com/",
    category: "Development"
  },
  {
    name: "Supabase",
    description: "An open-source backend-as-a-service. It provides a PostgreSQL database, authentication, storage, and real-time capabilities, making it a great alternative to Firebase for building modern apps.",
    icon: supabase,
    link: "https://supabase.com/",
    category: "Development"
  },
  {
    name: "Git",
    description: "An open-source distributed version control system. It tracks changes, supports branching and merging, and enables safe collaboration with a complete history—ideal for codebases of any size.",
    icon: git,
    link: "https://git-scm.com/",
    category: "Development"
  },
  {
    name: "Github",
    description: "A cloud platform for hosting Git repositories. It offers issues, pull requests, code reviews, Actions (CI/CD), and project boards—your central hub for collaboration and automation across the dev lifecycle.",
    icon: github,
    link: "https://github.com/",
    category: "Development"
  },
  {
    name: "Android Studio",
    description: "The official IDE for Android development. It includes a smart code editor, emulator, Gradle-based build tools, and profilers to design, build, test, and debug high-quality Android apps.",
    icon: android,
    link: "https://developer.android.com/studio?hl=es-419",
    category: "Development"
  }
];

// Obtener categorías únicas
const categories = [...new Set(tools.map(tool => tool.category))];

function Tools() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Animación de entrada para las tarjetas
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.tool-card');
      cards.forEach(card => observer.observe(card));
    }
    
    return () => observer.disconnect();
  }, [selectedCategory]);
  
  const filteredTools = selectedCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <div className="tools-wrapper">
      <div className="animated-background">
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="tools-container" ref={containerRef}>
        <div className="tools-header">
          <h1>My Toolkit</h1>
          <p>These are the digital tools I use daily to create, design, and develop amazing projects.</p>
          
          <div className="category-filter">
            <button 
              className={selectedCategory === 'All' ? 'active' : ''}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="tools-grid">
          {filteredTools.map((tool, index) => (
            <a 
              className="tool-card" 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tool-card-inner">
                <div className="tool-image-container">
                  <img src={tool.icon} alt={tool.name} className="tool-image" />
                  <div className="tool-overlay"></div>
                </div>
                <div className="tool-content">
                  <h3>{tool.name}</h3>
                  <span className="tool-category">{tool.category}</span>
                  <p>{tool.description}</p>
                </div>
                <div className="tool-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <MORE items={ToolsMoreItems} sectionTitle="EXPLORE MORE" />
    </div>
  );
}

export default Tools;