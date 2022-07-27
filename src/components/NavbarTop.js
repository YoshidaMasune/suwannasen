import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'

import React from 'react'

function NavbarTop() {
  return (
   <Navbar bg="dark" variant="dark" expand="md">
      <Container>  
        <Navbar.Brand href="#home">ss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">หน้าเเรก</Nav.Link>
            <Nav.Link as={Link} to="/adduser">adduser</Nav.Link>
            <Nav.Link as={Link} to="/manage">manage</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop