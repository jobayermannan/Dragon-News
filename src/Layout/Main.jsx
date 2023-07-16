import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Home/Home/Shared/Header/Header';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Home/Home/Shared/LeftNav.jsx/LeftNav';
import RightNav from '../Pages/Home/Home/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
          <Header></Header>
          <Container>
    
      <Row>
        <Col  lg={3}><LeftNav></LeftNav></Col>
        <Col  lg={6}>  <h2>Main Content</h2> </Col>
        <Col  lg={3}><RightNav></RightNav></Col>
      </Row>
    </Container>
          
          <Footer></Footer>
            
        </div>
    );
};

export default Main;