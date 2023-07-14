import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Experience</h2>
      <div className="experience-items">
        <div className="experience-item">
          <h3>Independent Web Developer | Seeking Collaborative Team Opportunities</h3>
          <p className="experience-details">Position: Software Developer</p>
          <p className="experience-details">Duration: January 2022 - Present</p>
          <p className="experience-description">
            I currently work as a freelancer, creating web solutions and mobile applications.
            However, I am highly interested in becoming part of a dynamic and collaborative team, where I can contribute my skills and learn from other professionals.
            I seek to build professional relationships and establish good friendships within the development field, with the aim of collaborating on challenging and rewarding projects.
            I am open to new opportunities and excited to be part of a dedicated and motivated team. 💻 🌐
          </p>
        </div>
        <div className="experience-item">
          <h3>ONE oracle course - FrontEnd React | Educación IT - FrontEnd React</h3>
          <p className="experience-details"></p>
          <p className="experience-details">Duration: March 2023 - Present</p>
          <p className="experience-description">
            In my constant search to improve my programming skills, I have decided to take two online courses.
            One of them, focused on FrontEnd using React, has been provided by Telecom Digitalers Argentina in collaboration with Educación IT.
            The other course, centered on BackEnd, I am taking on the Alura LATAM platform, sponsored by ONE Oracle.
            Both courses have been a valuable opportunity to polish my programming skills and update myself on the latest technological advances.
            I am committed to my professional growth and strive to stay up-to-date on market trends and changes 🚀 👨‍💻
          </p>
        </div>
        {/* Agrega más elementos de experiencia según sea necesario */}
      </div>
    </motion.div>
  );
};

export default Experience;
