import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import contactImage from '../img/cbg.png'; // Import contact image
import cbg2 from '../img/cbg2.jpg'
import '../Styles/contactUs.css'; // Import CSS file for additional styling

const ContactUsSection = () => {
  return (
    <div className="contact-us-section">
      <Container>
      <section id="contact"></section>
        <Row>
          {/* Image Section */}
          <Col md={6}>
            <img src={contactImage} alt="Contact" className="contact-image" />
          </Col>
          {/* Form and Contact Information Section */}
          <Col md={6}>
            <Row>
              {/* Contact Form */}
              <Col md={6}>
                <div className="contact-form" style={{ backgroundImage: `url(${cbg2})` }}>
                  <h2>Contact Us</h2>
                  <Form >
                    <Form.Group controlId="formName">
                      
                      <Form.Control type="text" placeholder="Enter your name" className="dashed-input" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      
                      <Form.Control type="email" placeholder="Enter email" className="dashed-input" />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                      
                      <Form.Control as="textarea" rows={5} placeholder="Enter your message" className="dashed-input" />
                    </Form.Group>

                    <button className="btn btn-primary" type="submit">Submit</button>
                  </Form>
                </div>
              </Col>
              {/* Contact Information */}
              <Col md={6}>
                <div className="contact-info" style={{ backgroundImage: `url(${cbg2})` }}>
                  <h2>Contact Information</h2>
                  <br />
                  <p><strong>Email:</strong> example@example.com</p>
                  <br />
                  <p><strong>Address:</strong> Ghodbunder Rd, opp. Hypercity Mall Kasarvadavali, Thane, Maharashtra 400615</p>
                  <br />
                 
                  <br />
                  {/* Add social media icons here */}
                  <div className="social-icons">
                    {/* Add social media icons as needed */}
                    <i className="fab fa-facebook-f" ></i>
                    <i className="fab fa-twitter"></i>
                    <a href='https://www.instagram.com/ieeeapsit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    <i className="fab fa-instagram" ></i>
                    </a>
                    {/* Add more social media icons as needed */}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsSection;
