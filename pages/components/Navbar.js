
import { Container } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
function Mynav() {
    return (
        <>
     <Navbar collapseOnSelect expand="lg" className='mynav' variant="dark">
  <Container>
  <Navbar.Brand href="#"><Link href="/">Next JS</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/Contactus">Contact Us</Link>
      <Link href="/blog">Blog</Link>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}

export default Mynav;
