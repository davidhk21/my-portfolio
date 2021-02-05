import React from 'react';

import styles from '../../styles/Portfolio.module.css';

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsListContainer}>
        <div>
          <h4>TECHNOLOGIES</h4>
        </div>
        <div>
          <p>FRONT-END</p>
          <ul>
            <li>JavaScript (ES5, ES6+)</li>
            <li>React.js</li>
            <li>React-Native</li>
            <li>Babel</li>
            <li>Webpack</li>
            <li>jQuery</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>Victory.js</li>
          </ul>
        </div>
        <div>
          <p>BACK-END</p>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
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
          <ul>
            <li>AWS EC2/S3</li>
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
    </div>
  );
}
