import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
// import { IoLogoInstagram } from 'react-icons/io';
import styles from '../styles/App.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1 className={styles.footerTitle}>Let&apos;s Connect!</h1>
      <Nav>
        <Link href="/" passHref>
          <Nav.Link className={styles.links}>HOME</Nav.Link>
        </Link>
        <Link href="/portfolio" passHref>
          <Nav.Link className={styles.links}>PORTFOLIO</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link className={styles.links}>ABOUT</Nav.Link>
        </Link>
        <Link href="/contact_me" passHref>
          <Nav.Link className={styles.links}>CONTACT</Nav.Link>
        </Link>
      </Nav>
      <p className={styles.copyright}>&copy; 2021 David Kim. All rights reserved.</p>
      <a className={styles.instagramContainer}>
        <FontAwesomeIcon icon={['fab', 'instagram']} className={styles.instagram} />
      </a>
    </div>
  );
}
