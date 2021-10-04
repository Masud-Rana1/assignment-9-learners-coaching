import React from 'react';
import './Header.css';
import logo from '../../images/coahing.jpg';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
          <div className="navigation">
            <Navbar bg="dark" variant="dark">
    <Container>
    <NavbarBrand to="/home">Learner`s Point</NavbarBrand>
    <Nav className="me-auto">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/service">Service</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/footer">Footer</NavLink>
      <NavLink to="/notes">Notes</NavLink>
    </Nav>
    </Container>
  </Navbar>
  </div>
             <div>
            <img src={logo} alt="" /> 
             </div>        
        </div>
    );
};

export default Header;