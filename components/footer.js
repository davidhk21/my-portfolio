import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/App.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h1 className={styles.footerTitle}>Let&apos;s Connect!</h1>
      <div className={styles.linksContainer}>
        <Link href="/" passHref>
          <a className={styles.links}>
            HOME
          </a>
        </Link>
        <Link href="/portfolio" passHref>
          <a className={styles.links}>
            PORTFOLIO
          </a>
        </Link>
        <Link href="/about" passHref>
          <a className={styles.links}>
            ABOUT
          </a>
        </Link>
        <Link href="/contact_me" passHref>
          <a className={styles.links}>
            CONTACT
          </a>
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
