import React from 'react'
import './RootLayout.css'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function RootLayout() {
    return (
        <div className='MainContainer'>

            <nav>
         <h2>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EARTH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Countries</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Flag
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Languages</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         </h2>
            </nav>
            <main>

            <Outlet/>   

            </main>
            <footer><h2>  <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer></h2></footer>
        </div>
    )
}

export default RootLayout