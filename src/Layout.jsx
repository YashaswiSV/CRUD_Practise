
import { Link,Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


 const Layout=()=>{
    return(
        <>
             <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">CRUD-Practise</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="/display">Display</Nav.Link>
            <Nav.Link as={Link} to="/update">Update</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>


           
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        <hr size="3" color=""/>

        <Outlet/>
        
        <hr size="3" color="red"/>
         
          www.mycompany.com 2024
        </>
    )
 }
 export default Layout;