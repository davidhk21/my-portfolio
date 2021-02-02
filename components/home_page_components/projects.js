import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from '../../styles/Home.module.css';

export default function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.cardContainer}>
        <Card className={styles.card}>
          <Card.Img variant="top" src="prof_pic.jpg" />
          <Card.Body>
            <Card.Title>Homents</Card.Title>
            <Card.Text>
              A dynamic listing page of a real estate e-platform, built with the MERN stack.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img variant="top" src="prof_pic.jpg" />
          <Card.Body>
            <Card.Title>NearMiss</Card.Title>
            <Card.Text>
              Scaled and redesigned the backend of a digital retail marketplace for users to search, purchase, and review products
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Img variant="top" src="prof_pic.jpg" />
          <Card.Body>
            <Card.Title>Pluck</Card.Title>
            <Card.Text>
              A cross-platform mobile application built with React-Native to help users increase productivity while helping them reach personal financial goals.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
