import React from 'react';
import logo  from "../../../../../assets/logo.png"
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center'>  <img src={logo}></img>
            <p><small>Journalism Without Fear or Favour</small></p>
            <p>{moment().format("dddd, MMMM ,D YYYY,")}</p></div>
                
          <div className='d-flex'>
          <Button variant="danger">Danger</Button>
          <Marquee className='text-danger' speed={50}>
             <h5>Meta has also aggressively rolled out new features over the past year or two that could potentially change how WhatsApp is used. In particular, Communities allows organizations like HOAs and clubs to manage multiple groups in one place, and the recently-announced Channels allows for one-to-many broadcasts. Both features are basically lifted straight from Telegram and Viber, where they're incredibly popular, but I won't say no to a good thing. </h5> 
          </Marquee>
          </div>

          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
          
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Carrier</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
        </Container>
    );
};

export default Header;