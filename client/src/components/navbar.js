import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../img/logo.png';
import '../Styles/nav.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top"> {/* Add 'sticky-top' class */}
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="" height="40px" width="130px" href="#home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#cards">Council Members</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>

            
          </Nav>
          <Button variant="primary">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;