import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';
import { fetchCarFromDB } from '../../redux/reducers/cars/carReducer';

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
        style={{
          position: 'absolute',
        }}
      >
        <img
          style={{ width: '100%', border: '7px', zIndex: '-10' }}
          src={car.image}
          alt={car.make}
        />
        <h2>
          {car.make}
          <span style={{ fontSize: '11px' }}>{car.model}</span>
        </h2>
        
        <button type="button" onClick={() => {navigate('/reserve')}}>Reserve</button>
        <p>{car.description}</p>
        <div>
          <h4>Other details</h4>
          <p>{car.engine}</p>
          <p>{car.seat}</p>
          <p>{car.aircon}</p>
          <p>{car.updated_at}</p>
          <p>{car.year}</p>
          <p>{car.color}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
