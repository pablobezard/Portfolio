import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCharacter from '../AnimatedCharacter/AnimatedCharacter';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import './contact.css'; // Importa el archivo CSS

const Contact = () => {
  const { t } = useTranslation('global'); // Usa la función useTranslation con el namespace 'global'
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
        <h2>{t('Contact.title')}</h2>
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
      <h2>{t('Contact.title')}</h2>
      <div className="contact-info">
        <p>{t('Contact.email')}: Pablobezard@gmail.com</p>
        <p>{t('Contact.phone')}: +54 3534789688</p>
        <p>{t('Contact.linkedin')}: linkedin.com/in/pablo-bezard-33b017164</p>
      </div>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder={t('Contact.name')} />
          <input type="email" placeholder={t('Contact.emailPlaceholder')} name="email" required />
          <textarea placeholder={t('Contact.messagePlaceholder')} name="message" required></textarea>
          <ValidationError 
            prefix={t('Contact.emailPrefix')} 
            field="email"
            errors={state.errors}
          />
          <ValidationError
            prefix={t('Contact.messagePrefix')}
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            {t('Contact.send')}
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
