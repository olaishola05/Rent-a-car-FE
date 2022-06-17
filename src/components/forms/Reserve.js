import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postReservationToApi } from '../../redux/reducers/reserve';
import { getCarsFromApi } from '../../redux/reducers/cars/carsReducer';
import styles from './AddCar.module.css';

const Reserve = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentState = useSelector((state) => state);
  const currentUser = JSON.parse(window.localStorage.getItem('user'));

  useEffect(() => {
    dispatch(getCarsFromApi());
  }, []);

  const [pickDate, setPickDate] = useState('');
  const [pickCity, setPickCity] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [dropCity, setDropCity] = useState('');
  const [carId, setCarId] = useState('');
  /* eslint consistent-return: off */

  const selectCar = () => {
    if (currentState.car.id === undefined) {
      return (
        <>
          <select className="form-control" onChange={(e) => setCarId(e.target.value)}>
            <option defaultValue={0} selected disabled>Pick a car</option>
            {currentState.cars.data.map((car) => (
              <option key={car.id} value={car.id}>{car.model}</option>
            ))}
          </select>
          <br />
        </>
      );
    }
  };

  const handleSubmit = (event) => {
    const data = {
      pick_up_date: pickDate,
      pick_up_city: pickCity,
      drop_off_date: dropDate,
      return_city: dropCity,
      user_id: currentUser.user.id,
    };
    if (currentState.car.id === undefined) {
      data.car_id = carId;
    } else if (currentState.car.id) {
      data.car_id = currentState.car.id;
    }
    event.preventDefault();
    dispatch(postReservationToApi(data));
    navigate('/reservation');
  };
  return (
    <div className={styles.reserveBg}>
      <div className={styles.reserveContainer}>
        <div className="container-fluid">
          <div className="row">
            <div className="column mt-5">
              <div className="d-flex justify-content-center align-items-center flex-column p-5 mx-auto">
                <h3 className="text-center">Reserve a car</h3>
                <br />
                <form onSubmit={handleSubmit}>
                  {selectCar()}
                  <label htmlFor="pick_up_date" className="form-label">
                    <input type="date" name="pick_up_date" onChange={(e) => setPickDate(e.target.value)} className="form-control border form-control-lg" />
                  </label>
                  <br />
                  <br />
                  <label htmlFor="drop_off_date" className="form-label">
                    <input type="date" name="drop_off_date" onChange={(e) => setDropDate(e.target.value)} className="form-control" />
                  </label>
                  <br />
                  <br />
                  <label htmlFor="pick_up_city" className="form-label">
                    <input type="text" name="pick_up_city" placeholder="pick up city" onChange={(e) => setPickCity(e.target.value)} className="form-control" />
                  </label>
                  <br />
                  <br />
                  <label htmlFor="return_city" className="form-label">
                    <input type="text" name="return_city" placeholder="drop off city" onChange={(e) => setDropCity(e.target.value)} className="form-control" />
                  </label>
                  <br />
                  <br />
                  <button type="submit" className="btn btn-dark">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
