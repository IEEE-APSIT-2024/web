import m from '../img/m.svg'
import v from '../img/v.svg'
import '../Styles/aboutUs.css'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bg from '../img/bg4.jpg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faCoffee);



const AboutSection = () => {
  return (
    <div className="about-section" style={{ backgroundImage: `url(${bg})` }}>
      <Container>
      <section id="about"></section>
        <Row>
          <Col>
            <div className="about-text">
              <h2 className='text-center'>About Us</h2>
              <p>Welcome to the IEEE Committee at A. P. Shah Institute of Technology (APSIT), where innovation meets excellence! Established with the vision of fostering technological advancement and nurturing future leaders in the field of engineering, our IEEE committee is at the forefront of empowering students with knowledge, skills, and opportunities that extend beyond the classroom.</p>
              <p>At APSIT, we believe in the power of collaboration, creativity, and continuous learning. Our IEEE committee serves as a dynamic platform where passionate individuals come together to explore the latest trends in technology, participate in hands-on projects, and engage in meaningful discussions that shape the future of our rapidly evolving world.</p>
              <p>Driven by a dedicated team of faculty advisors and enthusiastic student members, our committee organizes a wide range of activities throughout the year. From technical workshops and seminars to hackathons and competitions, we strive to provide our members with a holistic learning experience that enhances their academic journey and prepares them for the challenges of tomorrow.</p>
              <p>Whether you're a student eager to expand your knowledge, an aspiring innovator looking to make a difference, or a technology enthusiast seeking to connect with like-minded individuals, the IEEE Committee at APSIT welcomes you to join us on this exciting journey of exploration and discovery. Together, let's explore the endless possibilities of technology and inspire the world with our ingenuity and passion. Join us, and let's shape the future together!</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="logo-container">
                
              <img src={m} alt="Mission" className="mission-logo" />
              <FontAwesomeIcon icon="fa-solid fa-bullseye" />
              <div className="mission-text">IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.</div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="logo-container">
              <img src={v} alt="Vision" className="vision-logo" />
              <div className="vision-text">IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;


