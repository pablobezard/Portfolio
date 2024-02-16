import React from 'react';
import './home.css';
import { motion } from 'framer-motion';
import gatoImage from '../../assets/images/Gato.jpeg';
import pc from '../../assets/images/pc.jpeg';
import myPhoto from '../../assets/images/myPhoto.png';

const Home = () => {
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
            Frontend Developer and Backend Enthusiast
          </motion.h1>
          <p className="description">
            I specialize in creating modern and engaging web applications with a focus on usability and user experience.
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
          <h2>About me</h2>
          <div className="card-content">
            <p>
              Greetings, I'm Pablo Bezard, a seasoned web and mobile developer with a keen focus on elevating user interface design. My expertise lies in translating ideas into seamless digital experiences through meticulous coding and design practices.
            </p>

            <p>
              Beyond the digital realm, I value meaningful connections and enjoy socializing with peers. Whether it's exploring the outdoors or maintaining an active lifestyle at the gym, I find inspiration in a balanced life. 🌳
            </p>

            <p>
              My dedication to crafting exceptional applications is matched only by my enthusiasm for staying abreast of the latest technological trends. As a developer, I thrive on the challenges inherent in the ever-evolving landscape of web and mobile development.
            </p>

            <p>
              Join me in the pursuit of excellence as I continue to learn, adapt, and grow in the dynamic world of technology. 🚀🌐
            </p>
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