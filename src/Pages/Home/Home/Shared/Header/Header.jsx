import React, { useContext } from 'react';
import logo  from "../../../../../assets/logo.png"
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Providers/AuthProviders';
import { FaUser } from 'react-icons/fa';

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

     
          
        </Container>
    );
};

export default Header;