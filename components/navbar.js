import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export default function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  return (
    <div className={styles.navBarContainer}>
      <Navbar expand="md" variant={width > 767 ? 'dark' : 'light'} bg={width > 767 ? '' : 'light'}>
        <Navbar.Brand href="/" className={styles.brand}>
          David Kim
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navbar}>
          <Nav>
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
