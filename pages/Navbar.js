
import { Container } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

function Mynav() {
    return (
        <>
     <Navbar collapseOnSelect expand="lg" className={styles.mynav}>
  <Container>
  <Link className="text-white" href="/"><span className={styles.itemmains}>Next Js</span></Link>
  <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto pl-2">
      <Link className="text-white" href="/"><span className={styles.itemclick}>Home</span></Link>
      <Link className="text-white" href="/about"><span  className={styles.itemclick}>About</span></Link>
      <Link className="text-white" href="/Contactus"><span  className={styles.itemclick}>Contact Us</span></Link>
      <Link className="text-white" href="/blog"><span  className={styles.itemclick}>Blog</span></Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}

export default Mynav;
