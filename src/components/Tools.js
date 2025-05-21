import React from 'react';
import './Tools.css';
import copilot from './image/github-copilot-icon.png';
import supabase from './image/supabase-seeklogo.svg';
import firebase from './image/FIREBASE.png';
import canva from './image/Canva-Logo-PNG-Picture.png';
import auth from './image/auth0-seeklogo.svg';
import vercel from './image/vercel-seeklogo.svg';
import profileImage from './image/Foto.jpeg';
import MORE from './components/More';
const ToolsMoreItems = [
    {
      title: "ABOUT MY",
      subtitle: "Personality & Experience",
      image: profileImage,
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
      subtitle: "Software I use and recommend",
      image: profileImage,
      href: "/tools"
    }
  ];
const tools = [
  {
    name: "Visual Studio Code",
    description: "Editor de código ligero y muy extensible para realizar codigo gratificantemente si si sssssssssssssssssssssssssssssssssssssssssssssssssssssssss.",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    link: "https://code.visualstudio.com/"
  },
  {
    name: "Figma",
    description: "Diseño UI/UX colaborativo en la nube.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    link: "https://figma.com"
  },
  {
    name: "GitHub",
    description: "Control de versiones y repositorios remotos.",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    link: "https://github.com"
  },
  {
  name: "Notion",
  description: "Organizador de tareas, notas y bases de datos todo en uno.",
  icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
  link: "https://www.notion.so/"
},
{
  name: "Vercel",
  description: "Plataforma para desplegar aplicaciones web JAMstack.",
  icon: vercel,
  link: "https://vercel.com/"
},
{
  name: "Auth0",
  description: "Autenticación y autorización para aplicaciones modernas.",
  icon: auth,
  link: "https://auth0.com/"
},
{
  name: "Canva",
  description: "Diseño gráfico para todos con facilidad.",
  icon: canva,
  link: "https://www.canva.com/"
},
{
  name: "ChatGPT",
  description: "Modelo de lenguaje conversacional inteligente.",
  icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  link: "https://chat.openai.com/"
},
{
  name: "GitHub Copilot",
  description: "Asistente de codificación basado en IA.",
  icon: copilot,
  link: "https://github.com/features/copilot"
},
{
  name: "Netlify",
  description: "Despliegue rápido de sitios y apps JAMstack.",
  icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  link: "https://www.netlify.com/"
},
{
  name: "Firebase",
  description: "Plataforma para desarrollar apps con backend.",
  icon: firebase,
  link: "https://firebase.google.com/"
},
{
  name: "Postman",
  description: "Plataforma para pruebas de APIs.",
  icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  link: "https://www.postman.com/"
},
{
  name: "Supabase",
  description: "Alternativa open-source a Firebase.",
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
