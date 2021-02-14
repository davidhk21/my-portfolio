import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
    // <div className={styles.navBarContainer}>
    //   <Navbar.Brand href="/" className={styles.brand}>
    //     David Kim
    //   </Navbar.Brand>
    //   <Navbar variant="dark">
    //     <Nav className={styles.navLinks}>
    //       <Link href="/" passHref>
    //         <a className={styles.navLink}>HOME</a>
    //       </Link>
    //       <Link href="/portfolio" passHref>
    //         <a className={styles.navLink}>PORTFOLIO</a>
    //       </Link>
    //       <Link href="/about" passHref>
    //         <a className={styles.navLink}>ABOUT</a>
    //       </Link>
    //     </Nav>
    //   </Navbar>
    //   <div className={styles.contactContainer}>
    //     <Link href="/contact_me" passHref>
    //       <a className={styles.navLink}>CONTACT</a>
    //     </Link>
    //   </div>
    // </div>

    <div className={styles.navBarContainer}>
      <Navbar expand="md" variant={width > 767 ? 'dark' : 'light'} bg={width > 767 ? '' : 'light'}>
        <Navbar.Brand href="/" className={styles.brand}>
          David Kim
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navbar}>
          <Nav className="ml-auto">
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
