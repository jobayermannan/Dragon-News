import React, { useContext, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

export default function Register() {
    const {createUser} =useContext(AuthContext)
    const [accept ,useAccept]=useState(false)


    const handleAccept = (event)=>{
      console.log(event.target.checked)
      useAccept(event.target.checked)
    }

    const handleCreateUser =(event) => {
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const name =form.name.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, password, photo,email)
        createUser(email,password).then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        }).catch ((err) => {
            console.error(err)
        })


    }
  return (
    <Container>
           <Form onSubmit={handleCreateUser} className='w-50 mx-auto'>
            <h3>Please Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder=" Photo Url"  required/>
    
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your Namel"  required/>
    
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  required/>
    
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password "  name="password"   placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" onClick={handleAccept} label={<>Accept <Link to="/terms">terms and condition</Link> </>} />
        </Form.Group>
        <Button variant="primary" disabled={!accept} type="submit">
          Login
        </Button>
        <br></br>
        <Form.Text className="text-blue">
           Already  Have an Account?<Link to="/login">Login</Link> 
          </Form.Text>
          <br></br>    
            <Form.Text className="text-danger">
          
          </Form.Text>  

           <Form.Text className="text-success">
          
          </Form.Text>
      </Form>
    </Container>
  )
}
