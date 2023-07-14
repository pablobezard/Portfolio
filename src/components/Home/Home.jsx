import React from 'react';
import './home.css';
import { motion } from 'framer-motion';

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
        </div>
        <div className="image-container">
          <motion.img
            src="/images/myPhoto.png"
            alt="Mi Foto"
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
              I am Pablo Bezard, a passionate web and mobile developer with expertise in user interface design.
              Like the majority of developers, my favorite animal is the cat. I enjoy activities such as socializing with friends, spending time outdoors in parks,
              and staying fit at the gym. When it comes to food, my favorites include indulging in flavors like pizza 🍕 and ice cream 🍨. 
              My true passion lies in web and mobile development,
              as well as exploring new technologies and the fascinating field of artificial intelligence.
              My goal is to continue learning and growing in this exciting industry.
            </p>
          </div>
          <div className="image-gallery">
            <img src="/images/Gato.jpeg" alt="Image 2" className="gallery-image" />
            <img src="/images/pizza.jpeg" alt="Image 1" className="gallery-image" />
            <img src="/images/pc.jpeg" alt="Image 3" className="gallery-image" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
