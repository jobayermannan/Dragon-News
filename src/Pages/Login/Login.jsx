import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const  navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || "/category/0"
    console.log(location)
    const {signUser}=useContext(AuthContext)
    const handleSignIn=(event)=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email, password)
        signUser(email, password).then((result)=>{console.log(result) 
           form.reset(); navigate(from,{replace:true})}).catch((error)=>{console.log(error)})
    }
    return (
        <Container>
                 <Form  onSubmit={handleSignIn} className='w-50 mx-auto'>
                    <h3>Please Login</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  required/>
    
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password "  name="password"   placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br></br>
        <Form.Text className="text-blue">
            Don't Have an Account?<Link to="/register">Register</Link> 
          </Form.Text>
          <br></br>    
            <Form.Text className="text-danger">
           
          </Form.Text>  

           <Form.Text className="text-success">
           
          </Form.Text>
      </Form>
        </Container>
   
    );
};

export default Login;