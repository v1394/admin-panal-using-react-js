// src/ContactUs.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import {  FaFacebook,FaTwitter, FaLinkedin,FaHome } from 'react-icons/fa'; 


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}`);
   
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '50px 0' }}>
       
         <Container>
         <a href="/home" className="text-black text-decoration-none text-start fs-3"><FaHome /> Home</a> 
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h2 className="text-center mb-4">Contact Us</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mb-3"
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mb-3"
                    />
                  </Form.Group>

                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mb-3"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" block>
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container><br /><br />

      <div>
                 <footer className="bg-dark text-white py-3 mt-auto">
                    <Container fluid>
                      <Row>
                        <Col md={4}>
                          <h5>About Us</h5>
                          <p>We are a team of passionate developers creating awesome applications!</p>
                        </Col>
                        <Col md={4}>
                          <h5>Contact</h5>
                          <p>Email: contact@example.com</p>
                          <p>Phone: +1234567890</p>
                        </Col>
                        <Col md={4}>
                          <h5>Follow Us</h5>
                          <p><FaTwitter/> Twitter | <FaFacebook/> Facebook | <FaLinkedin/> LinkedIn</p>
                        </Col>
                      </Row>
                    </Container>
                  </footer>
                  </div>
    </div>
  );
};

export default ContactUs;
