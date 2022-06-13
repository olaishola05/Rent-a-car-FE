import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarSlides from './CarSlides';
import styles from './Home.module.css';

const HomeContainer = () => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/cars/${id}`);
  };

  return (
    <div className={styles.homecontainer}>
      <div className={styles.info}>
        <h1>Latest Models</h1>
        <span>Please select a car</span>
      </div>
      <CarSlides navigate={handleNavigation} />
    </div>
  );
};

export default HomeContainer;
