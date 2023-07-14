import React from 'react';
import { motion } from 'framer-motion';
import './projects.css';
import nucba from '../../assets/images/nucbafest.png'
import cofe from '../../assets/images/Coffe.png'
import page3 from '../../assets/images/page3.png'
import page4 from '../../assets/images/page5.png'
import page5 from '../../assets/images/page6.png'
import page6 from '../../assets/images/page7.png'


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
      link: 'https://pablobezard.github.io/',
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: page3,
      link: '/proyecto3',
    },
    {
      id: 4,
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: page6,
      link: '/proyecto3',
    },
    {
      id: 5,
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: page5,
      link: '/proyecto3',
    },
    {
      id: 6,
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: page4,
      link: '/proyecto3',
    },
  ];

  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="titulo_card">
        <h2 className="titulo">Mis proyectos</h2>
      </div>
      <div className="projects">
        <ul className="container">
          {projects.map((project) => (
            <li key={project.id} className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="imbx"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
                <div className="content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Projects;
