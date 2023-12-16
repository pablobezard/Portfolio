import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';
import freenlace from '../../assets/images/Freenlace.jpeg';
import oracle from '../../assets/images/alura.png';
import educacionIt from '../../assets/images/educacionIt.png'
import ies21 from '../../assets/images/ies21.png';
import Forage from '../../assets/Forage.png';
import nucba from '../../assets/images/nucba.png';

// Definición del objeto JSON con las experiencias
const experiences = [
  {
    id: 1,
    image: Forage,
    title: 'Simulation of Walmart USA\'s Advanced Software Engineering - Forage',
    duration: 'November 2023- December 2023',
    description: 
      '-Completed the Advanced Software Engineering Job Simulation where I solved ' +
      'difficult technical projects for a variety of teams at Walmart. ' +
      '-Developed a novel version of a heap data structure in Java for Walmart’s ' +
      'shipping department, showcasing strong problem-solving and algorithmic ' +
      'skills. ' +
      '-Designed a UML class diagram for a data processor, considering different ' +
      'operating modes and database connections. ' +
      '-Created an entity relationship diagram to design a new database accounting ' +
      'for all requirements provided by Walmart\'s pet department.',
  },
  {
    id: 2,
    image: oracle,
    title: ' FrontEnd React - G5 ONE oracle course ',
    duration: 'March 2023 - November 2023',
    description: "As part of my commitment to professional growth, I am currently undertaking an online course on the Alura LATAM platform, sponsored by ONE Oracle. This course focuses on web development using technologies such as HTML, CSS, JavaScript, and also covers additional topics like Business Model Canvas, Lean Startup, and Responsive Layouts. Throughout this training, I've gained insights into crafting modern websites and delved into agile methodologies and business approaches for digital product development. This course has allowed me to broaden my perspective and acquire technical and business skills to effectively tackle web projects. 🚀 👨‍💻",
  },
  {
    id: 3,
    image: educacionIt,
    title: 'FrontEnd React - Educación IT course ',
    duration: 'March 2023 - November 2023',
    description: "In my continuous pursuit to enhance my programming skills, I decided to enroll in an online course provided by Telecom Digitalers Argentina in collaboration with Educación IT. This course focuses on FrontEnd development using React and has been a valuable opportunity to gain knowledge and skills in creating modern web applications. Through this training, I've learned to build interactive and dynamic user interfaces using technologies like React, HTML, and CSS. This course has been instrumental in deepening my understanding of React's fundamental principles and enhancing my ability to create reusable components and optimize the performance of my applications.",
  },
  {
    id: 4,
    image: ies21,
    title: ' Systems Analysis - IES21 University ',
    duration: 'January 2022 - Present',
    description: "Throughout my academic journey, I acquired a comprehensive set of skills in programming and computer science. I delved into various areas, such as programming logic using pseudocode, hands-on experience with C#, web page and application development using HTML, CSS, and JavaScript, database management with SQL Server and phpMyAdmin, and a comprehensive understanding of data structures. Additionally, I engaged in rigorous studies in mathematical analysis, probability, statistics, and ethical principles. These educational experiences have provided me with a solid foundation and a professional approach to problem-solving in the field of technology. 📚📈",
  },
  {
    id: 5,
    image: nucba,
    title: ' FullStack - Nucba Course ',
    duration: 'March 2022 - 2023',
    description: "During my course at Nucba, I explored web development in the FullStack program. I learned from the basics of HTML, CSS, and JavaScript to advanced technologies such as TypeScript, Redux, Axios, i18next, and DOM Router. I also gained experience in databases with Firebase and MongoDB, and worked with APIs to create dynamic pages. However, my true passion lies in Frontend development, and I will continue to focus on improving my skills in this area. Leveraging opportunities at my university, I continue to expand my education in other technologies and explore new areas of web development. I am excited about the future and the possibilities that this constantly evolving industry offers. 🚀🌐",
  },
  {
    id: 6,
    image: freenlace,
    title: 'Independent Web Developer | Seeking Collaborative Team Opportunities',
    position: 'Software Developer',
    duration: 'January 2022 - Present',
    description: "Currently, I work as an independent web developer, crafting web solutions and mobile applications. Nevertheless, I am keenly interested in joining a dynamic and collaborative team where I can contribute my skills and learn from other professionals. I aim to build professional relationships and form good friendships within the development field, with the goal of collaborating on challenging and rewarding projects. I am open to new opportunities and excited to be part of a dedicated and motivated team.",
  },

];

const Experience = () => {
  return (
    <motion.div
      className="experience"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Experience</h2>
      <div className="experience-items">
      
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-item">
            <div className="experience-image">
              <img src={experience.image} alt={experience.title} />
            </div>
            <div className="experience-details">
              <h3>{experience.title}</h3>
              {experience.position && <p className="experience-details"> Position: {experience.position}</p>}
              <p className="experience-details">Duration: {experience.duration}</p>
              <p className="experience-description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
