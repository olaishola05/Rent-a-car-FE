import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';
import { fetchCarFromDB } from '../../redux/reducers/cars/carReducer';
import styles from './Home.module.css';

const CarDetails = () => {
  const navigate = useNavigate();
  const loaderColor = '#97bf0e';
  const loading = false;
  const cssOverride = `
    display: block;
    margin: 100px auto;
    border-color: red;
  `;
  const car = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const param = useParams();
  const { id } = param;

  useEffect(() => {
    dispatch(fetchCarFromDB(id));
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {!Object.keys(car).length && (
        <PuffLoader
          color={loaderColor}
          css={cssOverride}
          size={100}
          loading={loading}
        />
      )}
      <div
        key={car.id}
        className={styles.carDetailsContainer}
      >
        <img
          className={styles.carDetailsImg}
          src={car.image}
          alt={car.make}
        />
        <div className={styles.carDetailsInfo}>
          <h2>
            {car.make}
            <span style={{ fontSize: '11px' }}>{car.model}</span>
          </h2>
          <p>{car.description}</p>
          <div>
            <h4>Other details</h4>
            <p>
              Car type:&nbsp;
              <b>{car.engine}</b>
            </p>
            <p>
              Seats:&nbsp;
              <b>{car.seat}</b>
            </p>
            <p>{car.aircon}</p>
            <p>{car.updated_at}</p>
            <p>
              Released year:&nbsp;
              <b>{car.year}</b>
            </p>
            <div className="d-flex">
              <p>Color:</p>
&nbsp;&nbsp;
              <div
                style={
                {
                  backgroundColor: car.color,
                  width: '30px',
                  height: '30px',
                  borderRadius: '100%',
                  borderColor: 'orange',
                }
}
              >
&nbsp;

              </div>
            </div>
            <button type="button" className={styles.btnReserve} onClick={() => { navigate('/reserve'); }}>Reserve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
