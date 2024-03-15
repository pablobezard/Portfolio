
import './experience.css';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Skills from '../Skills/Skills'; // Importa el componente Skills
import cognizantImage from '../../assets/images/cognizant.jpeg';
import imagesImage from '../../assets/images/images.png';
import aluraImage from '../../assets/images/alura.png';
import educacionItImage from '../../assets/images/educacionIt.png';
import ies21Image from '../../assets/images/ies21.png';
import nucbaImage from '../../assets/images/nucba.png';
import freenlaceImage from '../../assets/images/Freenlace.jpeg';

const images = {
  "../../assets/images/cognizant.jpeg": cognizantImage,
  "../../assets/images/images.png": imagesImage,
  "../../assets/images/alura.png": aluraImage,
  "../../assets/images/educacionIt.png": educacionItImage,
  "../../assets/images/ies21.png": ies21Image,
  "../../assets/images/nucba.png": nucbaImage,
  "../../assets/images/Freenlace.jpeg": freenlaceImage,
};

const Experience = () => {
  const { t } = useTranslation('global');

  const experiences = t('Experience.experiences', { returnObjects: true });

  return (
    <motion.div
    
      className="experience"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Skills /> {/* Aquí colocas el componente Skills */}
      <h2>{t('Experience.title')}</h2>
      <div className="experience-items">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="experience-image">
              <img src={images[experience.image]} alt={experience.title} />
            </div>
            <div className="experience-details">
              <h3>{t(experience.title)}</h3>
              {experience.position && <p className="experience-details"> Position: {experience.position}</p>}
              <p className="experience-details">{t('Experience.duration')}: {t(experience.duration)}</p>
              <p className="experience-description">{t(experience.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
    
  );
};

export default Experience;
