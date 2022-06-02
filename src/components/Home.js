import React from 'react';
import HomeContainer from './navs/HomeContainer';
import SideNav from './navs/SideNav';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <SideNav />
    <HomeContainer />
  </div>
);

export default Home;
