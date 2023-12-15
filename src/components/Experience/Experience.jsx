import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';
import freenlace from '../../assets/images/Freenlace.jpeg';
import oracle from '../../assets/images/alura.png';
import educacionIt from '../../assets/images/educacionIt.png'
import ies21 from '../../assets/images/ies21.png';
import deeplearningAI from '../../assets/images/deeplearningAI.png';
import nucba from '../../assets/images/nucba.png';

// Definición del objeto JSON con las experiencias
const experiences = [
  {
    id: 1,
    image: deeplearningAI,
    title: 'Deeplearning.AI - LEARN GENERATIVE AI Short Courses',
    duration: 'July 2023 - Present',
    description: 'Es un curso donde adquirí habilidades avanzadas en el uso de modelos de lenguaje de aprendizaje profundo (LLMs) a través de la API ChatGPT. Aprendí a descomponer tareas complejas, automatizar flujos de trabajo, encadenar llamadas LLM y mejorar la calidad de las salidas generadas. Este curso también recomendaba tener conocimientos básicos de Python, lo que me permitió aprovechar las capacidades de la API y crear soluciones personalizadas. En general, adquirí la capacidad de diseñar y construir sistemas de chat eficientes y automatizados utilizando la API ChatGPT.',
  },
  {
    id: 2,
    image: oracle,
    title: 'G5 ONE oracle course - FrontEnd React',
    duration: 'March 2023 - Present',
    description: 'Como parte de mi compromiso con el crecimiento profesional, estoy tomando un curso en línea en la plataforma Alura LATAM patrocinado por ONE Oracle. Este curso se enfoca en el desarrollo web utilizando tecnologías como HTML, CSS, JavaScript, y también cubre temas adicionales como Business Model Canvas, Lean Startup y Responsive Layouts. A través de esta formación, he adquirido conocimientos en la creación de sitios web modernos y también he aprendido sobre metodologías ágiles y enfoques comerciales para el desarrollo de productos digitales. Este curso me ha permitido ampliar mi perspectiva y adquirir habilidades técnicas y de negocios para abordar proyectos web de manera efectiva. 🚀 👨‍💻',
  },
  {
    id: 3,
    image: educacionIt,
    title: 'Educación IT course - FrontEnd React',
    duration: 'March 2023 - Present',
    description: 'En mi búsqueda continua de mejorar mis habilidades de programación, decidí inscribirme en un curso en línea proporcionado por Telecom Digitalers Argentina en colaboración con Educación IT. Este curso se enfoca en el desarrollo FrontEnd utilizando React y ha sido una valiosa oportunidad para adquirir conocimientos y habilidades en la creación de aplicaciones web modernas. A través de esta formación, he aprendido a construir interfaces de usuario interactivas y dinámicas utilizando tecnologías como React, HTML y CSS. Este curso ha sido fundamental para profundizar en los principios fundamentales de React y mejorar mi capacidad para crear componentes reutilizables y optimizar el rendimiento de mis aplicaciones.',
  },
  {
    id: 4,
    image: ies21,
    title: 'IES21 University - Systems Analysis',
    duration: 'January 2022 - Present',
    description: 'Durante mi trayectoria académica, adquirí un conjunto completo de habilidades en programación y ciencias de la computación. Me adentré en diversas áreas, como la lógica de programación utilizando pseudocódigo, experiencia práctica con C#, desarrollo de páginas y aplicaciones web utilizando HTML, CSS y JavaScript, gestión de bases de datos con SQL Server y phpMyAdmin, y conocimiento integral de estructuras de datos. Además, me involucré en estudios rigurosos en análisis matemático, probabilidad, estadísticas y principios éticos. Estas experiencias educativas me han dotado de una base sólida y un enfoque profesional para la resolución de problemas en el campo de la tecnología. 📚📈',
  },
  {
    id: 5,
    image: nucba,
    title: 'Nucba Course - FullStack',
    duration: 'March 2022 - 2023',
    description: 'Durante mi curso en Nucba, exploré el desarrollo web en el programa de FullStack. Aprendí desde los fundamentos de HTML, CSS y JavaScript hasta tecnologías avanzadas como TypeScript, Redux, Axios, i18next y DOM Router. También adquirí experiencia en bases de datos con Firebase y MongoDB, y trabajé con APIs para crear páginas dinámicas. Sin embargo, mi verdadera pasión se encuentra en el desarrollo Frontend, y seguiré enfocándome en mejorar mis habilidades en esta área. Aprovechando las oportunidades en mi universidad, continúo ampliando mi formación en otras tecnologías y explorando nuevas áreas del desarrollo web. Estoy emocionado por el futuro y las posibilidades que ofrece esta industria en constante evolución.',
  },
  {
    id: 6,
    image: freenlace,
    title: 'Independent Web Developer | Seeking Collaborative Team Opportunities',
    position: 'Software Developer',
    duration: 'January 2022 - Present',
    description: 'Actualmente trabajo como desarrollador web independiente, creando soluciones web y aplicaciones móviles. Sin embargo, estoy muy interesado en formar parte de un equipo dinámico y colaborativo, donde pueda contribuir con mis habilidades y aprender de otros profesionales. Busco establecer relaciones profesionales y establecer buenas amistades dentro del campo del desarrollo, con el objetivo de colaborar en proyectos desafiantes y gratificantes. Estoy abierto a nuevas oportunidades y emocionado de formar parte de un equipo dedicado y motivado. 💻 🌐',
  },

];

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Experiencia</h2>
      <div className="experience-items">
        {/* Utiliza un map para recorrer el array de experiencias y mostrar cada una */}
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="experience-image">
              <img src={experience.image} alt={experience.title} />
            </div>
            <div className="experience-details">
              <h3>{experience.title}</h3>
              {experience.position && <p className="experience-details">Posición: {experience.position}</p>}
              <p className="experience-details">Duración: {experience.duration}</p>
              <p className="experience-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
