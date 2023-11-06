import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/About.module.css';
import { imageUrl } from '../../pages/_app';

export default function MoreFacts() {
  return (
    <div className={styles.funFactsContainer}>
      <Fade distance="200px" delay={500} left>
        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Sports</h4>
            <p>My favorite sports are Volleyball and Basketball and one of my favorite things to do is gathering a group of friends to play either sport. One of my lifetime goals is to coach volleyball for a high school or club team. My favorite NBA player is Steph Curry (yes, the greatest shooter of all time) because I look up to him both on and off the court.</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src={`${imageUrl}/volleyball.JPG`}
              alt="Picture of the author"
              className={styles.circleImage}
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
              src={`${imageUrl}/food.JPG`}
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>
      </Fade>
      <Fade distance="200px" delay={500} left>
        <div className={styles.funFactContainer}>
          <div className={styles.description}>
            <h4>Travel</h4>
            <p>Not to be one of those people who say &quot;studying abroad changed my life&quot;, but I actually did not have any urge to travel around the world until I studied abroad in Shanghai, China. With this newfound love for traveling, I&apos;ve journeyed to places like Hong Kong, Tibet, Japan, Indonesia, Thailand, England, the Netherlands, and France. It is a lifelong goal to expand upon this list!</p>
          </div>
          <div className={styles.circleImageContainer}>
            <Image
              src={`${imageUrl}/travel.JPG`}
              alt="Picture of the author"
              className={`${styles.circleImage} ${styles.travel}`}
            />
          </div>
        </div>
      </Fade>
      <Fade distance="200px" delay={500} right>
        <div className={styles.funFactContainer}>
          <div className={`${styles.description} ${styles.descriptionRight}`}>
            <h4>Reading/Writing</h4>
            <p>I&apos;m a big advocate for using physical planners, as I&apos;ve been using them on a daily basis ever since the beginning of high school. For the past couple of years, I&apos;ve also made the effort to journal everyday (definitely missed some days but it&apos;s okay!) to make sure I reflect and take life day by day.</p>
          </div>
          <div className={`${styles.circleImageContainer} ${styles.imageLeft}`}>
            <Image
              src={`${imageUrl}/read-write.jpg`}
              alt="Picture of the author"
              className={styles.circleImage}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
