import React from 'react';
import { Fade } from 'react-awesome-reveal';

import styles from '../../styles/Portfolio.module.css';
import useScreenWidthContext from '../../hooks/useScreenWidthContext';

export default function Skills() {
  const screenWidth = useScreenWidthContext();

  return (
    <div className={styles.skillsContainer}>
      <Fade delay direction="up" triggerOnce fraction={screenWidth > 767 ? 0.75 : 0}>
        <div className={styles.skillsListContainer}>
          <div>
            <h4>TECHNOLOGIES</h4>
          </div>
          <div>
            <p>FRONT-END</p>
            <ul className={styles.skillsList}>
              <li>JavaScript/TypeScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Next.js</li>
              <li>Webpack/Babel</li>
              <li>jQuery</li>
              <li>React-Native</li>
            </ul>
          </div>
          <div>
            <p>BACK-END</p>
            <ul className={styles.skillsList}>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Java</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Cassandra</li>
              <li>Mongoose</li>
              <li>Sequelize</li>
              <li>NGINX</li>
            </ul>
          </div>
          <div>
            <p>DEV TOOLS & TECHNIQUES</p>
            <ul className={styles.skillsList}>
              <li>AWS (Lambda, DynamoDB, API Gateway, etc.)</li>
              <li>Terraform</li>
              <li>Jest</li>
              <li>Chai</li>
              <li>Mocha</li>
              <li>Git</li>
              <li>SOA</li>
              <li>Agile Workflow</li>
              <li>Remote Pair Programming</li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
}
