import React from 'react';
import { motion } from 'framer-motion';
import Anime from '../../assets/images/animeBoyLaptop.jpeg';

const AnimatedCharacter = () => {
  return (
    <motion.div
      className="animated-character"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <motion.img
        src={Anime}
        alt="Animated Character"
        style={{ borderRadius: '50%', width: '200px', height: 'auto' }}
      />
    </motion.div>
  );
};

export default AnimatedCharacter;
