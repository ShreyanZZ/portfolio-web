import React from 'react';
import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.description}>
      I am Shreyan Sharma. I am from Faridabad. I am currently pursuing B.Tech in Chemical Engineering at IIT Kanpur. I love playing basketball and chess in my free time. "some more info about my life journey"...
      </p>
      <p className={styles.description}>
      You may contact me at - shreyans21@iitk.ac.in
      </p>
    </div>
  );
};

export default AboutPage;

