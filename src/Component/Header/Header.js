import React from 'react';
import { ButtonGroup, Container, Nav, Navbar, Button } from 'react-bootstrap';
// import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../Hook/useAuth';


import './Header.css';
// import { Link } from 'react-router-hash-link';

const Header = () => {


  const { user, logOut } = useAuth();
  return (


    <Navbar collapseOnSelect expand="lg" className="header-container bg-color-design" sticky="top">
      <Container >
        <Navbar.Brand href="#home"><img style={{ width: '60px' }} src="https://i.postimg.cc/1zfprb1H/Mobile-Hunter-logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">

            <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/topbanner">Top Banner</Nav.Link>


            <Nav.Link className="text-light" as={Link} to="/purchase">Purchase</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/review">Review </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/contactus">Dashboard</Nav.Link>
          </Nav>
          <Nav>

            {
              !user?.email ?
                <div className="d-flex">
                  <Nav.Link className="text-light-custom btn-color " as={Link} to="/login"> Login </Nav.Link>
                  <Nav.Link className="text-light-custom btn-login px-3 btn-color signup-right" as={Link} to="/signup"> Signup </Nav.Link>

                </div>
                :
                <div className="d-flex">
                  <img src={user?.photoURL} className="profile-image" alt="profile" />
                  <p className="text-light-name mx-2">{user?.displayName}</p>
                  <Button onClick={logOut} className="btn-login px-3 me-3 btn-color">Logout</Button>

                </div>
            }






          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >





  );
};

export default Header;