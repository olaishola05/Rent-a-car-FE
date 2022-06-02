import React from 'react';
import Button from '@mui/material/Button';
import styles from './TopNav.module.css';

const TopNav = () => (
  <div className={styles.topnav}>
    <h2>RentACar</h2>
    <div className={styles.auth}>
      <Button variant="contained">Login</Button>
      <Button type="button">Register</Button>
    </div>
  </div>
);

export default TopNav;
