import React from 'react';
import CarSlides from '../CarSlides';
import styles from '../Home.module.css';

const HomeContainer = () => (
  <div className={styles.homecontainer}>
    <div className={styles.info}>
      <h1>Latest Models</h1>
      <span>Please select a car</span>
    </div>
    <CarSlides />
  </div>
);

export default HomeContainer;
