import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/App.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1 className={styles.footerTitle}>Let&apos;s Connect!</h1>
      <div className={styles.linksContainer}>
        <Link href="/" passHref className={styles.links}>
          HOME
        </Link>
        <Link href="/portfolio" passHref className={styles.links}>
          PORTFOLIO
        </Link>
        <Link href="/about" passHref className={styles.links}>
          ABOUT
        </Link>
        <Link href="/contact_me" passHref className={styles.links}>
          CONTACT
        </Link>
      </div>
      <p className={styles.copyright}>&copy; 2021 David Kim. All rights reserved.</p>
      <div className={styles.iconsContainer}>
        <a href="https://www.instagram.com/davidkimhoon/" target="_blank" rel="noopener noreferrer" className={`${styles.iconContainer} ${styles.shrink}`}>
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
