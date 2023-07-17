import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Providers/AuthProviders';
import { FaUser } from 'react-icons/fa';

const NavigationBar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut = () => {
      logOut().then(() => {}).cath((err) => {console.log(err)})
    }
    return (
        <Container>
                 <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-3 text-decoration-none">
         
                 
                   <Link className='text-decoration-none '
          style={{ cursor: 'pointer', color: 'black' }}
          onMouseOver={(e) => (e.target.style.color = 'red')}
          onMouseOut={(e) => (e.target.style.color = 'initial')} to="/category/0">Home</Link>
                   <Link className='text-decoration-none '
          style={{ cursor: 'pointer', color: 'black' }}
          onMouseOver={(e) => (e.target.style.color = 'red')}
          onMouseOut={(e) => (e.target.style.color = 'initial')} >Carrier</Link>
                   <Link className='text-decoration-none '
          style={{ cursor: 'pointer', color: 'black' }}
          onMouseOver={(e) => (e.target.style.color = 'red')}
          onMouseOut={(e) => (e.target.style.color = 'initial')} >About</Link>
               
          
          </Nav>
          <Nav>
            {user &&  <> {user.displayName}<FaUser></FaUser></>  }
            
           
              {
                user? <><Link onClick={handleLogOut}><Button variant="secondary">Logout</Button></Link></>: <><Link to="/login"> <Button variant="secondary">Login</Button></Link></> 
              }
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </Container>
    );
};

export default NavigationBar;