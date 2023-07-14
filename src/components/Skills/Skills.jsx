import React from 'react';
import './skills.css';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Problem-solving', 'Teamwork', 'C#', 'phpMyAdmin'];
  const colors = ['#FF6384', '#36A2EB', '#FFCE56','#009688', '#8BC34A', '#FF9F40', '#5919BD', '#FF4081',  '#4BC0C0', '#9966FF', '#FF5722'];

  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="skill-item"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
