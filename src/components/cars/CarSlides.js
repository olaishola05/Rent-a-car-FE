import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import PuffLoader from 'react-spinners/PuffLoader';
import styles from './Home.module.css';
import Car from './Cars';
import { getCarsFromApi } from '../../redux/reducers/cars/carsReducer';

function CarSlides({ navigate }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cars);
  const { data: cars, loading } = state;
  const loaderColor = '#97bf0e';

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const cssOverride = `
  display: block;
  margin: 100px auto;
  border-color: red;
`;

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getCarsFromApi());
    }
  }, []);

  const sliderItems = cars.length > 3 ? 3 : cars.length;
  const mobileItems = cars.length > 1 ? 1 : cars.length;
  const carLists = [];

  for (let i = 0; i < cars.length; i += sliderItems) {
    if (i % sliderItems === 0 && i % mobileItems === 0) {
      carLists.push(
        <div className={styles.banners} key={i.toString()}>
          <div className={styles.BannerGrid}>
            {isMobile ? cars.slice(i, i + mobileItems).map((da) => (
              <Car key={da.id} item={da} navigate={navigate} />
            )) : cars.slice(i, i + sliderItems).map((da) => (
              <Car key={da.id} item={da} navigate={navigate} />
            ))}
          </div>
        </div>,
      );
    }
  }

  return (
    <div>
      {loading ? (
        <PuffLoader
          color={loaderColor}
          css={cssOverride}
          size={100}
          loading={loading}
        />
      ) : (
        <Carousel
          animation="slide"
          autoPlay
          cycleNavigation
          timeout={3000}
          indicators={false}
        >
          {carLists}
        </Carousel>
      )}
    </div>
  );
}

CarSlides.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default CarSlides;
