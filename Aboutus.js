// src/AboutUs.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {  FaFacebook,FaTwitter, FaLinkedin,FaHome } from 'react-icons/fa'; 

const AboutUs = () => {
  return (
    <div style={{ backgroundColor:'pink'}}>
      <Container className="my-5">
    
      <a href="/home" className="text-black text-decoration-none text-start fs-3"><FaHome /> Home</a> 
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="text-center mb-4">About Us</h2>
            <p>
              Welcome to our company! We are passionate about delivering innovative solutions that help businesses grow.
              Founded in 2025, our team consists of dedicated professionals committed to excellence in everything we do.
            </p>
          </Col>
        </Row>

        <Row className="my-4">
          <Col>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide cutting-edge solutions that empower businesses to excel in a fast-changing digital landscape. 
                  We strive to be a trusted partner for every client, offering personalized service and expert guidance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

    
        <Row className="my-4">
          <Col>
            <h3 className="text-center">Meet Our Team</h3>
            <Row>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Jane Doe</Card.Title>
                    <Card.Text>CEO & Founder</Card.Text>
                    <Button variant="primary">View Profile</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>John Smith</Card.Title>
                    <Card.Text>Chief Technology Officer</Card.Text>
                    <Button variant="primary">View Profile</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={12} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Mary Johnson</Card.Title>
                    <Card.Text>Marketing Director</Card.Text>
                    <Button variant="primary">View Profile</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
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

export default AboutUs;
