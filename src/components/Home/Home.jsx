import React from 'react';
import './home.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import gatoImage from '../../assets/images/Gato.jpeg';
import pc from '../../assets/images/pc.jpeg';
import myPhoto from '../../assets/images/myPhoto.png';

const Home = () => {
  const { t } = useTranslation('global');

  
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="showcase">
        <div className="title-container">
          <motion.h1
            className="title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('Home.title')}
          </motion.h1>
          <p className="description">
            {t('Home.description')}
          </p>
          <img src={pc} alt="Workstation" className="gallery-image" />
        </div>
        <div className="image-container">
          <motion.img
            src={myPhoto}
            alt="My Photo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>
      </div>

      <div className="about-container">
        <motion.div
          className="card"
          whileHover={{ scale: 1.1, boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.9 }}
        >
          <h2>{t('Home.aboutTitle')}</h2>
          <div className="card-content">
            <p>
              {t('Home.aboutText')}
            </p>
            {/* Aquí puedes continuar con más contenido traducible */}
          </div>
          <div className="image-gallery">
            <img src={gatoImage} alt="Cute Cat" className="gallery-image" />
            <img src={gatoImage} alt="Cute Cat" className="gallery-image" />
            <img src={gatoImage} alt="Cute Cat" className="gallery-image" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
