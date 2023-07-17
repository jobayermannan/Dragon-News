import React from 'react';
import { Container } from 'react-bootstrap';
import Register from './../Login/Register';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='text-danger'>
            <h3>Accept terms and condition</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloremque ut possimus temporibus, eligendi provident labore facere nam molestiae quis commodi aliquam dolores mollitia, cupiditate quibusdam. Eius nemo dolorem delectus?
            </p>
            <h5> Go Back to  <Link to="/register">Register</Link> </h5>
            
        </Container>
    );
};

export default Terms;