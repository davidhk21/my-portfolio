import React from 'react';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';
import styles from '../../styles/About.module.css';
import imageLoader from '../../utils/imageLoader';

export default function MoreFacts() {
  return (
    <div className={styles.funFactsContainer}>
      <Slide direction="left" triggerOnce>
        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Sports</h4>
            <p>My favorite sport is Volleyball and one of my favorite things to do is gathering a group of friends to play the sport. One of my lifetime goals is to coach volleyball for a high school or club team. My favorite NBA player is Steph Curry (yes, the greatest shooter of all time).</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src="volleyball_intramurals.JPG"
              loader={imageLoader}
              alt="Picture of the author"
              layout="fill"
            />
          </div>
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className={styles.funFactContainer}>
          <div className={`${styles.description} ${styles.descriptionRight}`}>
            <h4>Food</h4>
            <p>I love and appreciate all kinds of food from different cultures, but here are some food that have a special place in my heart: korean food (too many to name specifically), wings, tacos, and crunchy green grapes (yes, it has to be crunchy and green).</p>
          </div>
          <div className={`${styles.circleImageContainer} ${styles.imageLeft}`}>
            <Image
              src="dumpings.jpg"
              loader={imageLoader}
              alt="Picture of the author"
              layout="fill"
            />
          </div>
        </div>
      </Slide>
      <Slide direction="left" triggerOnce>
        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Travel</h4>
            <p>Not to be one of those people who say &quot;studying abroad changed my life&quot;, but it wasn&apos;t until I studied abroad in Shanghai, China did I have any urge to travel around the world. With this newfound love for traveling, I&apos;ve journeyed to places like Hong Kong, Tibet, Japan, Indonesia, Thailand, England, the Netherlands, and France. It is a lifelong goal to expand upon this list!</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src="korea_selfportrait.jpg"
              loader={imageLoader}
              alt="Picture of the author"
              layout="fill"
            />
          </div>
        </div>
      </Slide>
      <Slide direction="right" triggerOnce>
        <div className={styles.funFactContainer}>
          <div className={`${styles.description} ${styles.descriptionRight}`}>
            <h4>Learning</h4>
            <p>
              A daily goal of mine is becoming 1% better everyday, and a great way of doing so is through reading and writing.
              I don&apos;t consider myself a reader, but I do enjoy reading when I have the time (and the motivation).
              I&apos;ve also made it a habit to journal everyday, as it is important to reflect and take life day by day.
              One of my favorite things to do is going to a cafe to read, journal, learn new web technologies, or work on new projects.
            </p>
          </div>
          <div className={`${styles.circleImageContainer} ${styles.imageLeft}`}>
            <Image
              src="journal.jpeg"
              loader={imageLoader}
              alt="Picture of the author"
              layout="fill"
            />
          </div>
        </div>
      </Slide>
    </div>
  );
}
