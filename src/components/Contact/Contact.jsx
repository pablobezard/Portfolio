import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCharacter from '../AnimatedCharacter/AnimatedCharacter';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'; // Importa el archivo CSS

const Contact = () => {
  const [state, handleSubmit] = useForm("xdorpzyn");

  if (state.succeeded) {
    return (
      <motion.div
        className="contact"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contacto (¡Gracias por tu mensaje!)</h2>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contacto</h2>
      <div className="contact-info">
        <p>Email: Pablobezard@gmail.com</p>
        <p>Teléfono: +54 3534789688</p>
        <p>Linkedin: linkedin.com/in/pablo-bezard-33b017164</p>
      </div>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo electrónico" name="email" required />
          <textarea placeholder="Mensaje" name="message" required></textarea>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
        <div className="contact-animation">
          <AnimatedCharacter />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;