import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const AnimatedCharacter = () => {
    return (
      <AnimatePresence>
        <motion.div
          className="animated-character"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <motion.img
            src="/images/animeBoyLaptop.jpeg"
            alt="Animated Character"
            style={{ borderRadius: '50%' }}
          />
        </motion.div>
      </AnimatePresence>
    );
  };
  
export default AnimatedCharacter;
