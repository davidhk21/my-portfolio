import React from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';

export default function NavBar() {
  return (
    <div className={styles.navBarContainer}>
      <Navbar variant="dark">
        <Navbar.Brand href="/">
          David Kim
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/portfolio" passHref>
            <Nav.Link>Portfolio</Nav.Link>
          </Link>
          <Link href="/contact_me" passHref>
            <Nav.Link>Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
