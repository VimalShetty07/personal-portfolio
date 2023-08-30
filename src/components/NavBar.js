import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
  const [activeLink , SetactiveLink] = useState('Home');
  const [scrolled , Setscrolled] = useState(false)


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY>50) {
        Setscrolled(true)
    } else{
      Setscrolled(false)
    }
    window.addEventListener('scroll', onScroll)

    return ()=> window.removeEventListener('scroll', onScroll)
    
 } },[])

 const onUpdateActiveLink =(value) =>{
  SetactiveLink(value)
 }
  
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="nabvar-toggler-icon"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='Home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('Home')}>Home</Nav.Link>
            <Nav.Link href="#Experience" className={activeLink==='Experience' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('Experience')}>Experience</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink==='Projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('Projects')} >Projects</Nav.Link>            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><img src={navIcon1} alt=""/></a>
                <a href="#"><img src={navIcon2} alt=""/></a>
                <a href="#"><img src={navIcon3} alt=""/></a>
            </div>
            <button className='vvd' onClick={()=>console.log('Connect')}><span>Connect</span></button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
