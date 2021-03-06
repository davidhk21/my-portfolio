import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { imageUrl } from '../../pages/_app';

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <Fade distance="100px" delay={500} bottom cascade>
        <div className={styles.cardContainer}>
          <Card className={styles.card}>
            <Card.Img variant="top" src={`${imageUrl}/photo-gallery.png`} className={styles.cardImage} />
            <Card.Body>
              <Card.Title>Homents</Card.Title>
              <Card.Text>
                A dynamic listing page of a real estate e-platform, built with the MERN stack.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.card}>
            <Card.Img variant="top" src={`${imageUrl}/system-design.jpg`} className={styles.cardImage} />
            <Card.Body>
              <Card.Title>NearMiss</Card.Title>
              <Card.Text>
                Scaled and redesigned the backend of a digital retail marketplace for users to search, purchase, and review products.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.card}>
            <Card.Img variant="top" src={`${imageUrl}/pluck-logo.png`} className={`${styles.cardImage} ${styles.pluckImage}`} />
            <Card.Body>
              <Card.Title>Pluck</Card.Title>
              <Card.Text>
                A cross-platform mobile application built with React-Native to help users increase productivity while helping them reach personal financial goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Fade>
      <Link href="/portfolio">
        <a className={styles.buttonSeeProjects}>SEE PROJECTS</a>
      </Link>
    </div>
  );
}
