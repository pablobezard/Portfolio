// Project.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import nucba from '../../assets/images/nucbafest.jpg';
import cofe from '../../assets/images/Coffe.jpg';
import page3 from '../../assets/images/page3.jpeg';
import page4 from '../../assets/images/page5.png';
import page5 from '../../assets/images/page6.png';
import page6 from '../../assets/images/page7.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Festival Nucba',
      description: 'Trabajo de integrador de nucba en HTML y CSS',
      image: nucba,
      link: 'https://festivalnucba.vercel.app/',
    },
    {
      id: 2,
      title: 'OffiCoffee',
      description: 'Trabajo integrador de Educacion IT HTML y CSS',
      image: cofe,
      link: 'https://pablobezard.github.io/coffee/',
    },
    {
      id: 3,
      title: 'Encriptador',
      description: 'Descripción del proyecto 3',
      image: page3,
      link: 'https://pablobezard.github.io/encriptador/',
    },
    {
      id: 4,
      title: 'Ecommerce',
      description: 'Descripción del proyecto 3',
      image: page6,
      link: '/proyecto3',
    },
    {
      id: 5,
      title: 'Proyecto 5',
      description: 'Descripción del proyecto 3',
      image: page5,
      link: '/proyecto3',
    },
    {
      id: 6,
      title: 'Proyecto 6',
      description: 'Descripción del proyecto 3',
      image: page4,
      link: '/proyecto3',
    },
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="titulo_card">
        <h2 className="titulo">My projects ( in development ) </h2>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleProjectClick(project.link)}
          >
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <img src={project.image} alt={project.title} />
                <div className="project-title">{project.title}</div>
              </div>
            </div>
            <div className="content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
