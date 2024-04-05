import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/About.module.css';
import imageLoader from '../../utils/imageLoader';

export default function MoreFacts() {
  return (
    <div className={styles.funFactsContainer}>
      <Fade distance="200px" delay={500} left>
        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Sports</h4>
            <p>My favorite sport is Volleyball and one of my favorite things to do is gathering a group of friends to play the sport. One of my lifetime goals is to coach volleyball for a high school or club team. My favorite NBA player is Steph Curry (yes, the greatest shooter of all time) because I look up to him both on and off the court.</p>
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
      </Fade>
      <Fade distance="200px" delay={500} right>
        <div className={styles.funFactContainer}>
          <div className={`${styles.description} ${styles.descriptionRight}`}>
            <h4>Food</h4>
            <p>I love and appreciate all kinds of food from different cultures, but here are some food that have a special place in my heart: korean food (too many to name specifically), wings, tacos, and crunchy green grapes (yes, it has to be crunchy and green). It would feel wrong to not mention my favorite boba drink as well: Classic Milk Tea. Pretty unique, right?</p>
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
      </Fade>
      <Fade distance="200px" delay={500} left>
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
      </Fade>
      <Fade distance="200px" delay={500} right>
        <div className={styles.funFactContainer}>
          <div className={`${styles.description} ${styles.descriptionRight}`}>
            <h4>Reading/Writing</h4>
            <p>
              I try to maintain the goal of becoming 1% better everyday, and a great way of doing so is through reading and writing.
              I don&apos;t consider myself a reader (yet), but I do enjoy reading in my spare time.
              I&apos;ve also made it a habit to journal everyday, as it is important to reflect and take life day by day.
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
      </Fade>
    </div>
  );
}
