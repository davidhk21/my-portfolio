import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from '../../styles/Portfolio.module.css';

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <Fade delay={500} bottom cascade>
        <div className={styles.skillsListContainer}>
          <div>
            <h4>TECHNOLOGIES</h4>
          </div>
          <div>
            <p>FRONT-END</p>
            <ul>
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
            <ul>
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
            <ul>
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
