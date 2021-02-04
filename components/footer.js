import React from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/App.module.css';

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
      <div className={styles.iconsContainer}>
        <a href="https://www.instagram.com/davidhk21/" target="_blank" rel="noopener noreferrer" className={`${styles.iconContainer} ${styles.shrink}`}>
          <FontAwesomeIcon icon={['fab', 'instagram']} className={styles.icon} />
        </a>
        <a href="https://www.facebook.com/david.kim.503092/" target="_blank" rel="noopener noreferrer" className={`${styles.iconContainer} ${styles.shrink}`}>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} className={`${styles.icon} ${styles.smallerIcon}`} />
        </a>
        <a href="https://www.linkedin.com/in/davidhk21/" target="_blank" rel="noopener noreferrer" className={`${styles.iconContainer} ${styles.shrink}`}>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} className={`${styles.icon} ${styles.smallerIcon}`} />
        </a>
        <a href="https://github.com/davidhk21" target="_blank" rel="noopener noreferrer" className={`${styles.iconContainer} ${styles.shrink}`}>
          <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon} />
        </a>
        <a href="mailto:davidhk21@gmail.com" className={`${styles.iconContainer} ${styles.shrink}`}>
          <FontAwesomeIcon icon={['far', 'envelope']} className={`${styles.icon} ${styles.smallerIcon}`} />
        </a>
      </div>
    </div>
  );
}
