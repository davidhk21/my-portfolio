import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1>Let&apos;s Connect!</h1>
      <Nav>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/portfolio" passHref>
          <Nav.Link>Portfolio</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
        <Link href="/contact_me" passHref>
          <Nav.Link>Contact</Nav.Link>
        </Link>
      </Nav>
      <p>&copy; 2021 David Kim. All rights reserved.</p>
    </div>
  );
}
