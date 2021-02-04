import React from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <Navbar.Brand href="/" className={styles.brand}>
        David Kim
      </Navbar.Brand>
      <Navbar variant="dark">
        <Nav className={styles.navLinks}>
          <Link href="/" passHref>
            <a className={styles.navLink}>HOME</a>
          </Link>
          <Link href="/portfolio" passHref>
            <a className={styles.navLink}>PORTFOLIO</a>
          </Link>
          <Link href="/about" passHref>
            <a className={styles.navLink}>ABOUT</a>
          </Link>
        </Nav>
      </Navbar>
      <div className={styles.contactContainer}>
        <Link href="/contact_me" passHref>
          <a className={styles.navLink}>CONTACT</a>
        </Link>
      </div>
    </div>
  );
}
