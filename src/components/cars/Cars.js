/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaTwitter, FaFacebookF, FaPinterestP,
} from 'react-icons/fa';
import styles from './Home.module.css';

function Car(props) {
  const { item, navigate } = props;
  const carColor = {
    backgroundColor: item.color,
    opacity: 1,
    borderRadius: '50%',
  };

  return (
    <div className={styles.slideItem} onClick={() => navigate(item.id)}>
      <div className={styles.imgbg} style={carColor}>
        <div className={styles.imageContainer}>
          <img src={item.image} alt={item.model} />
        </div>
      </div>
      <br />
      <br />
      <h4>{item.model}</h4>
      <p className={styles.carDescription}>{item.description}</p>
      <br />
      <div className={styles.icons}>
        <FaTwitter className={styles.icons} />
        <FaFacebookF className={styles.icons} />
        <FaPinterestP className={styles.icons} />
      </div>
    </div>
  );
}

Car.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    model: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default Car;
