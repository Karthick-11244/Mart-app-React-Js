import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#" className="fw-bold">
          <i className="fas fa-shopping-bag"></i> MART
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="fw-semibold">Home</Nav.Link>
            <Nav.Link href="#" className="fw-semibold">Shop</Nav.Link>
            <Nav.Link href="#" className="fw-semibold">Cart</Nav.Link>

            {/* User Icon */}
            <Nav.Link href="#">
              <i className="fas fa-user"></i>
            </Nav.Link>

            {/* Cart Icon with Notification */}
            <Nav.Link href="#" className="position-relative">
              <i className="fas fa-shopping-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                0
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;