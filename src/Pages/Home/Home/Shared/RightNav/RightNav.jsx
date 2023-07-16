import React from 'react';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaFacebookSquare, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "../../../../../assets/bg.png"
import "./RightNav.css"

const RightNav = () => {
    return (
        <div>
            <h4>  Login with </h4>
            <Button className='d-block mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button> 
            <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button> 
            <div className='mt-2'>
            <ListGroup variant="flush">
            <h4>Find Us On</h4>
            <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
            <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
            <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
            
              </ListGroup>

              <QZone></QZone>
              <div className='text-center'>
              <div className="image-container">
               <Image src={bg} fluid />
                <div className="text-over-image text-danger">This shit is gooing down</div>
                 </div>
      
              </div>
            
            </div>
        </div>
    );
};

export default RightNav;