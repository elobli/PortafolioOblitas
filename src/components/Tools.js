import React from 'react';
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
import MORE from './components/More';
const ToolsMoreItems = [
    {
      title: "ABOUT MY",
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
      href: "/tools"
    }
  ];
const tools = [
  {
    name: "Visual Studio Code",
    description: "this is a lightweight, fast, and highly customizable editor. With a wide range of extensions, it supports multiple languages and UI design, making it a great choice for developers and designers alike.",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    link: "https://code.visualstudio.com/"
  },
  {
    name: "Figma",
    description: "Figma is a powerful, intuitive, and real-time collaborative design tool, ideal for teams seeking efficiency and smooth communication in creating interfaces and prototypes, all stored in the cloud.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    link: "https://figma.com"
  },
  {
    name: "GitHub",
    description: "is a powerful platform for version control and collaboration. It makes it easy to manage code, track changes, and work with teams, becoming essential for modern software development.",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    link: "https://github.com"
  },
  {
  name: "Notion",
  description: " is a versatile and intuitive productivity tool. It combines notes, tasks, databases, and collaboration features in one place, making it ideal for organizing both personal and team projects.",
  icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
  link: "https://www.notion.so/"
},
{
  name: "Vercel",
  description: "is a fast and developer-friendly platform for deploying web applications. It offers seamless integration with modern frameworks, automatic deployments, and a great developer experience focused on speed and simplicity.",
  icon: vercel,
  link: "https://vercel.com/"
},
{
  name: "Auth0",
  description: "is a flexible and secure authentication platform. It simplifies user login, authorization, and identity management, making it easy to integrate robust security features into any application.",
  icon: auth,
  link: "https://auth0.com/"
},
{
  name: "Canva",
  description: "is a user-friendly graphic design platform. It offers a wide range of templates and tools, making it easy for anyone to create professional-quality visuals, from social media posts to presentations.",
  icon: canva,
  link: "https://www.canva.com/"
},
{
  name: "ChatGPT",
  description: "is an AI language model designed to assist with a wide range of tasks. It can answer questions, generate content, help with coding, and support creative or professional projects through natural, conversational interaction.",
  icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  link: "https://chat.openai.com/"
},
{
  name: "GitHub Copilot",
  description: "is an AI-powered coding assistant. It helps developers write code faster by suggesting lines or entire functions in real time, improving productivity and reducing repetitive tasks.",
  icon: copilot,
  link: "https://github.com/features/copilot"
},
{
  name: "Netlify",
  description: "is a powerful platform for deploying and hosting modern web applications. It offers continuous deployment, serverless functions, and an intuitive workflow, making it ideal for developers looking for speed and simplicity in web development.",
  icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  link: "https://www.netlify.com/"
},
{
  name: "Firebase",
  description: "is a comprehensive app development platform by Google. It offers tools like real-time databases, authentication, hosting, and analytics, making it easy to build and scale modern web and mobile apps.",
  icon: firebase,
  link: "https://firebase.google.com/"
},
{
  name: "Postman",
  description: " is a powerful API platform used for building, testing, and documenting APIs. It streamlines the development process with a user-friendly interface and collaboration features for teams.",
  icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  link: "https://www.postman.com/"
},
{
  name: "Supabase",
  description: "is an open-source backend-as-a-service. It provides a PostgreSQL database, authentication, storage, and real-time capabilities, making it a great alternative to Firebase for building modern apps.",
  icon: supabase,
  link: "https://supabase.com/"
}
];

function Tools() {
  return (
    <div className="tools-wrapper"> {/* <- fondo unificado aquí */}
      <div className="tools-container">
        <aside className="tools-sidebar">
          <h2>TOOLS</h2>
          <p>Mis herramientas digitales favoritas</p>
        </aside>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <a className="tool-card" href={tool.link} target="_blank" rel="noopener noreferrer" key={index}>
              <img src={tool.icon} alt={tool.name} className="tool-image" />
              <div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <MORE items={ToolsMoreItems} sectionTitle="MORE" />

      {/* more debe estar dentro del mismo fondo */}
      
    </div>
  );
}

export default Tools;
