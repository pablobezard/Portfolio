import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';
import freenlace from '../../assets/images/Freenlace.jpeg';
import oracle from '../../assets/images/oracle.png';
import educacionIt from '../../assets/images/educacionIt.png'
import ies21 from '../../assets/images/ies21.png';

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

      <div className="experience-item">
          <div className="experience-image">
            <img src={ies21} alt="Ies" />
          </div>
          <div className="experience-details">
            <h3>IES21 University - Systems Analysis </h3>
            <p className="experience-details"></p>
            <p className="experience-details">Duration: January 2022 - Present</p>
            <p className="experience-description">
             
During my academic journey, I acquired a comprehensive skill set in programming and computer science. I delved into various areas,
 such as programming logic utilizing pseudocode, hands-on experience with C#, development of web pages and applications using HTML, CSS, and JavaScript, 
 database management with SQL Server and phpMyAdmin, and comprehensive knowledge of data structures. Additionally, I engaged in rigorous studies in mathematical analysis,
  probability, statistics, and ethical principles.
 These educational experiences have equipped me with a solid foundation and a professional approach to problem-solving in the field of technology. 📚📈
            </p>
          </div>
        </div>

      <div className="experience-item">
          <div className="experience-image">
            <img src={oracle} alt="Oracle" />
          </div>
          <div className="experience-details">
            <h3> G5 ONE oracle course - FrontEnd React </h3>
            <p className="experience-details">Duration: March 2023 - Present</p>
            <p className="experience-description">
            As part of my commitment to professional growth, I am taking an online course on the Alura LATAM platform sponsored by ONE Oracle.
             This course focuses on web development using technologies such as HTML, CSS, JavaScript, and also covers additional topics like Business Model Canvas, 
             Lean Startup, and Responsive Layouts. Through this training, I have gained knowledge in creating modern websites and have also learned about agile methodologies and business approaches to digital product development. 
            This course has allowed me to broaden my perspective and acquire both technical and business skills to effectively tackle web projects.🚀 👨‍💻
            </p>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-image">
            <img src={educacionIt} alt="Educacion" />
          </div>
          <div className="experience-details">
            <h3>Educación IT course - FrontEnd React</h3>
            <p className="experience-details">Duration: March 2023 - Present</p>
            <p className="experience-description">
            In my continuous pursuit of improving my programming skills,
             I decided to enroll in an online course provided by Telecom Digitalers Argentina in collaboration with Educación IT. 
             This course focuses on FrontEnd development using React and has been a valuable opportunity to acquire knowledge and skills in building modern web applications.
              Through this training, I have learned to build interactive and dynamic user interfaces using technologies like React, HTML, and CSS. 
              This course has been instrumental in deepening my understanding of React's core principles and enhancing my ability to create reusable components and optimize the performance of my applications.
            </p>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-image">
            <img src={freenlace} alt="freelance" />
          </div>
          <div className="experience-details">
            <h3>Independent Web Developer | Seeking Collaborative Team Opportunities</h3>
            <p className="experience-details">Position: Software Developer</p>
            <p className="experience-details">Duration: January 2022 - Present</p>
            <p className="experience-description">
              I currently work as a freelancer, creating web solutions and mobile applications.
              However, I am highly interested in becoming part of a dynamic and collaborative team, where I can contribute my skills and learn from other professionals.
              I seek to build professional relationships and establish good friendships within the development field, with the aim of collaborating on challenging and rewarding projects.
              I am open to new opportunities and excited to be part of a dedicated and motivated team. 💻 🌐
            </p>
          </div>
        </div>
    

        {/* Agrega más elementos de experiencia según sea necesario */}
      </div>
    </motion.div>
  );
};

export default Experience;