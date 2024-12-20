import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/App.module.css';
import useScreenWidthContext from '../hooks/useScreenWidthContext';

export default function NavBar() {
  const screenWidth = useScreenWidthContext();

  return (
    <div className={styles.navBarContainer}>
      <Navbar expand="md" variant={screenWidth > 767 ? 'dark' : 'light'} bg={screenWidth > 767 ? '' : 'light'}>
        <Navbar.Brand href="/" className={styles.brand}>
          David Kim
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navbarToggle} />
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navbarCollapse}>
          <Nav className={styles.navbar}>
            <Nav.Link href="/">
              <p className={styles.navLink}>HOME</p>
            </Nav.Link>
            <Nav.Link href="/portfolio">
              <p className={styles.navLink}>PORTFOLIO</p>
            </Nav.Link>
            <Nav.Link href="/about">
              <p className={styles.navLink}>ABOUT</p>
            </Nav.Link>
            <Nav.Link href="/contact_me">
              <p className={styles.navLink}>CONTACT</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
