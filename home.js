// src/pages/Home.js

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaUserPlus,  FaFacebook, FaTwitter, FaLinkedin,FaInfoCircle,FaPhoneAlt,FaProjectDiagram, } from 'react-icons/fa'; 
import logo from '../images/img.png';
import { Card, Button, Row, Col } from 'react-bootstrap';

// import {  FaTwitter, FaLinkedin } from 'react-icons/fa'; 

function BasicExample() {
  return (
    <div style={{ display: 'flex' }}>
     
      <div style={{ marginLeft: '0px', width: '100%', padding: '5px' }}>
        <Navbar expand="lg" className="bg-dark" >
          <Container fluid>
            <Navbar.Brand href="#home" className="text-white">
            <img src={logo} alt="Logo" style={{ width: 100, height: 100 }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home" className="text-white fs-2">
                 <FaHome />Home
                </Nav.Link>
                <Nav.Link href="/register" className="text-white fs-2">
                 <FaHome />Register
                </Nav.Link>
                <Nav.Link href="#home" className="text-white fs-2">
                 
                  <FaProjectDiagram />  AddProjectInfo
                </Nav.Link>
                <Nav.Link href="/register" className="text-white fs-2">
                 <FaUserPlus />AddMembers
                </Nav.Link>
                <Nav.Link href="/Aboutus" className="text-white fs-2">
                 <FaInfoCircle/> Aboutus
                </Nav.Link>
                <Nav.Link href="contactus" className="text-white fs-2">
                 <FaPhoneAlt/> Contactus
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

   
        <div>
          <h2>Welcome to the Home page</h2>
          
        </div>
      

<div className="container mt-5">
<Row>
  
  <Col md={4}>
    <Card>
    
    <Card.Body>
        <Card.Title>Card Title 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

 
  <Col md={4}>
    <Card>
   
      <Card.Body>
        <Card.Title>Card Title 2</Card.Title>
        <Card.Text>
          Some more content to show in a second card. You can add different content to each card.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4}>
    <Card>
   
      <Card.Body>
        <Card.Title>Card Title 3</Card.Title>
        <Card.Text>
          Another card, with different content. This could be a description, links, etc.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
</Row>
</div>

<div className="container mt-5">
<Row>

  <Col md={4}>
    <Card>
      
      <Card.Body>
        <Card.Title>Card Title 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4}>
    <Card>
    
      <Card.Body>
        <Card.Title>Card Title 2</Card.Title>
        <Card.Text>
          Some more content to show in a second card. You can add different content to each card.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>

  
  <Col md={4}>
    <Card>
      <Card.Body>
        <Card.Title>Card Title 3</Card.Title>
        <Card.Text>
          Another card, with different content. This could be a description, links, etc.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
</Row><br/> <br/>

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
</div>
    </div>
  );
}

// src/pages/Home.js

export default BasicExample;