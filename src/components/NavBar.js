import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

export const NavBar = () => {
  const [activeLink , SetactiveLink] = useState('Home');
  const [scrolled , Setscrolled] = useState(false)


  useEffect(() => {
    
    
  },[])
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Vimal Shetty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>            
          </Nav>
          <span className='socials'>
            <div className='social-icons'>
                <a href="#"><img src={} alt=""/></a>
                <a href="#"><img src={} alt=""/></a>
                <a href="#"><img src={} alt=""/></a>
            </div>LinkedIN
            <button className='connect-btn' onClick={()=>console.log('Connect')}><span>Connect</span>></button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
