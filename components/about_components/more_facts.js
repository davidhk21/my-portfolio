import React from 'react';
import styles from '../../styles/About.module.css';
import FunFactGallery from './FunFactGallery';

const sportsImages = [{
  id: 0,
  src: 'volleyball_intramurals.JPG',
}, {
  id: 1,
  src: 'beach_volleyball.png',
}, {
  id: 2,
  src: 'grass_volleyball_la.png',
}, {
  id: 3,
  src: 'grass_volleyball_ny.png',
}, {
  id: 4,
  src: 'half_marathon.JPG',
}, {
  id: 5,
  src: 'golf_swing.png',
}];
const travelImages = [{
  id: 0,
  src: 'huangshan.jpg',
}, {
  id: 1,
  src: 'barcelona.png',
}, {
  id: 2,
  src: 'tokyo.JPG',
}, {
  id: 3,
  src: 'tokyo_sunset.png',
}, {
  id: 4,
  src: 'jeju_field.png',
}, {
  id: 5,
  src: 'busan.JPG',
}];
const learningImages = [{
  id: 0,
  src: 'devocion.JPEG',
}, {
  id: 1,
  src: 'coffee_check.png',
}, {
  id: 2,
  src: 'lately_cafe.png',
}, {
  id: 3,
  src: 'partners_coffee.png',
}];

export default function MoreFacts() {
  return (
    <div className={styles.funFactsContainer}>
      <FunFactGallery
        images={sportsImages}
        title="Sports"
        description="My favorite sport is Volleyball and one of my favorite things to do is gathering a group of friends to play the sport. One of my bucket list items is to coach volleyball for a high school or club team. My favorite NBA player is Steph Curry (yes, the greatest shooter of all time). I enjoy running leisurely, which led me to sign up for my first (and hopefully last) marathon. Although it is difficult to play golf in NY, I enjoy learning the sport whenever I visit home in the bay (don&apos;t judge my form it&apos;s an old photo..)."
      />

      <FunFactGallery
        images={travelImages}
        title="Travel"
        description="Not to be one of those people who say &quot;studying abroad changed my life&quot;, but it wasn&apos;t until I studied abroad in Shanghai, China did I have any urge to travel around the world. With this newfound love for traveling, I&apos;ve journeyed to places like Hong Kong, Tibet, Japan, Indonesia, Thailand, England, the Netherlands, and France. It is a lifelong goal to expand upon this list!"
        backgroundColor="#f0f0f0"
      />

      <FunFactGallery
        images={learningImages}
        title="Learning"
        description="A daily goal of mine is becoming 1% better everyday, and a great way of doing so is through reading and writing.
            I don&apos;t consider myself a true reader, but I do enjoy reading when I have the time (..and the discipline).
            I&apos;ve also made it a habit to journal everyday, as it is important to reflect and take life day by day.
            One of my favorite things to do is going to a cafe to read, journal, learn new web technologies, or work on new projects."
        backgroundColor="#D6D6D6"
      />
    </div>
  );
}
