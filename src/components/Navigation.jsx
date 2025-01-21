import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Accommodation in City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Seoul</Nav.Link>
            <Nav.Link href="#link">Incheon</Nav.Link>
            <Nav.Link href="#link">Daejeon</Nav.Link>
            <Nav.Link href="#link">Daegu</Nav.Link>
            <Nav.Link href="#link">Gwangju</Nav.Link>
            <Nav.Link href="#link">Busan</Nav.Link>
            <Nav.Link href="#link">Ulsan</Nav.Link>
            <Nav.Link href="#link">Sejong</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
