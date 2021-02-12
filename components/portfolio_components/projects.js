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
            <p>Homents, a listings page for a real estate website, is a full stack application that I built along with 3 other engineers using Service Oriented Architecture. For my own module, I used React for the front-end, a Node.js and Express server, and MongoDB to persist my data. In order to provide an excellent user interface and experience, I utilized different layout systems such as CSS Grid and Flexbox and integrated the stylings into the React components using Styled-Components in order to provide simple dynamic styling. See Github Link for preview of the application in the README.md.</p>
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
            <p>For this application, I was tasked to redesign and scale the backend of a retail marketplace website to handle more than 75 million records while measuring performance improvements in different metrics such as latency, throughout, and error rate. Using different stress testing tools such as Artillery.io, Loader.io, and New Relic, I stress tested the application at different RPS (requests per second) levels. I made optimizations in query speeds by testing different databases and using indexing for quicker reads, ultimately reducing query speeds by 89.4%. In addition, I implemented a load balancer and caching using NGINX on both the service and proxy level. As a result, I was able to improve latency by 97%, throughput by 61%, while maintaining a 0% error rate.</p>
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
            <p>Pluck is a cross-platform mobile application built using React-Native in order to help users increase productivity while helping them reach their financial goals. The application uses a task completion system that is built to help users to &quot;learn by doing&quot;. The user will be able to gauge performance using the data visualization tools implemented using Victory.js. Most people know the word &quot;Pluck&quot; as a verb which means &quot;to take hold of or remove from its place&quot;; however, it&apos;s noun definition means &quot;spirited and determined courage&quot;. I created this application in hopes to give users the courage to achieve their goals, whether they are financial, professional, or personal.</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
