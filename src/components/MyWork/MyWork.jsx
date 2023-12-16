
import React from 'react';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { motion } from 'framer-motion';
import './myWork.css';

const MyWork = () => {
  return (
    <motion.div
      className="my-work-container"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Skills />
      <Projects />
    </motion.div>
  );
};

export default MyWork;
