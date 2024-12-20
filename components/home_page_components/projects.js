import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import imageLoader from '../../utils/imageLoader';
import useScreenWidthContext from '../../hooks/useScreenWidthContext';

export default function Projects() {
  const screenWidth = useScreenWidthContext();

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <Fade cascade direction="up" delay triggerOnce fraction={screenWidth > 767 ? 0.75 : 0}>
        <div className={styles.cardContainer}>
          <Card className={styles.card}>
            <Image
              src="homents.JPG"
              loader={imageLoader}
              alt="Homents"
              className={styles.cardImage}
              width={100}
              height={300}
            />
            <Card.Body>
              <Card.Title>Homents</Card.Title>
              <Card.Text>
                A dynamic listing page of a real estate e-platform, built with the MERN stack.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.card}>
            <Image
              src="nearmiss.jpeg"
              loader={imageLoader}
              alt="NearMiss"
              className={styles.cardImage}
              width={100}
              height={300}
            />
            <Card.Body>
              <Card.Title>NearMiss</Card.Title>
              <Card.Text>
                Scaled and redesigned the backend of a digital retail marketplace for users to search, purchase, and review products.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className={styles.card}>
            <Image
              src="pluck-logo.png"
              loader={imageLoader}
              alt="Pluck"
              className={styles.cardImage}
              width={100}
              height={300}
            />
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
        <a className={styles.buttonSeeProjects}>
          SEE PROJECTS
        </a>
      </Link>
    </div>
  );
}
