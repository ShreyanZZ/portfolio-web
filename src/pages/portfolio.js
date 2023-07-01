import React from 'react';
import styles from '../styles/Portfolio.module.css';

const PortfolioPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <p className={styles.description}>
       My academic projects and achievements that I have till now are here.<br></br><br></br>
       Project 1 - "here lies the description of my project respective project."<br></br><br></br>
       Project 2 - "here lies the description of my project respective project."<br></br><br></br>
       Project 3 - "here lies the description of my project respective project."<br></br><br></br>
      Academic achievements-<br></br>
      1. secured xyz...<br></br>
      2. received abc...<br></br>
      3. ranked xy...
      </p>
    </div>
  );
};

export default PortfolioPage;

