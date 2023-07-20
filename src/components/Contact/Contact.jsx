import React from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import AnimatedCharacter from '../AnimatedCharacter/AnimatedCharacter';


const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact (Page not available, no data entered)</h2>
      <div className="contact-info">
        <p>Email: Pablobezard@gmail.com</p>
        <p>Teléfono: +54 3534789688</p>
        <p>Linkedin: linkedin.com/in/pablo-bezard-33b017164</p>
      </div>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Nombre " />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div className="contact-animation">
          <AnimatedCharacter />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
