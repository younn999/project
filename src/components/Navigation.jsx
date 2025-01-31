import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Accommodation in City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/list/1" className="nav-item">
              Seoul
            </Link>
            <Link to="/list/2" className="nav-item">
              Incheon
            </Link>
            <Link to="/list/3" className="nav-item">
              Daejeon
            </Link>
            <Link to="/list/4" className="nav-item">
              Daegu
            </Link>
            <Link to="/list/5" className="nav-item">
              Gwangju
            </Link>
            <Link to="/list/6" className="nav-item">
              Busan
            </Link>
            <Link to="/list/7" className="nav-item">
              Ulsan
            </Link>
            <Link to="/list/8" className="nav-item">
              Sejong
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
