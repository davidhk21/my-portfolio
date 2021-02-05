import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/Portfolio.module.css';

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h4 className={styles.projectsTitle}>PROJECTS</h4>
      <Fade distance="100px" delay={500} left>
        <div className={styles.projectContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.projectsImageContainer}>
              <img src="PhotoGallery.png" alt="Homents" className={styles.image} />
            </div>
            <div className={styles.link}>
              <a href="https://github.com/davidhk21/Photos" target="_blank" rel="noopener noreferrer" className={styles.github}>
                <FontAwesomeIcon icon={['fab', 'github']} />
                {' Github Link'}
              </a>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h4>Homents</h4>
            <p>This is a description of the project that I am currently referring to. I am making this text long so I can see how it can look as I am developing this page.</p>
          </div>
        </div>
      </Fade>
      <Fade distance="100px" delay={500} right>
        <div className={styles.projectContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.projectsImageContainer}>
              <img src="system-design.jpg" alt="NearMiss" className={styles.image} />
            </div>
            <div className={styles.link}>
              <a href="https://github.com/davidhk21/about-this-item" target="_blank" rel="noopener noreferrer" className={styles.github}>
                <FontAwesomeIcon icon={['fab', 'github']} />
                {' Github Link'}
              </a>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h4>NearMiss</h4>
            <p>This is a description of the project that I am currently referring to. I am making this text long so I can see how it can look as I am developing this page.</p>
          </div>
        </div>
      </Fade>
      <Fade distance="100px" delay={500} left>
        <div className={styles.projectContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.projectsImageContainer}>
              <img src="pluck-logo.png" alt="Pluck" className={styles.image} />
            </div>
            <div className={styles.link}>
              <a href="https://github.com/davidhk21/Pluck" target="_blank" rel="noopener noreferrer" className={styles.github}>
                <FontAwesomeIcon icon={['fab', 'github']} />
                {' Github Link'}
              </a>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h4>Pluck</h4>
            <p>This is a description of the project that I am currently referring to. I am making this text long so I can see how it can look as I am developing this page.</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
