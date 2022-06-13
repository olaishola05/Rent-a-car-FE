import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postReservationToApi } from '../../redux/reducers/reserve';
import { getCarsFromApi } from '../../redux/reducers/cars/carsReducer';

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
  const [car, setCar] = useState('');

  const selectCar = () => {
    if (currentState.car.id === undefined) {
      return (
        <>
          <select onChange={(event) => setCar(event.target.value)}>
            {currentState.cars.data.map((car, index) => (
              <option key={car.id} value={index}>{car.model}</option>
            ))}
          </select>
        </>
      );
    }
  };

  const handleSubmit = (event) => {
    const data = {
      reservation: {
        pick_up_date: pickDate,
        pick_up_city: pickCity,
        drop_off_date: dropDate,
        return_city: dropCity,
        car_id: currentState.car.id < 0 ? currentState.car.id : car.id,
        user_id: currentUser.user.id,
      },
    };
    event.preventDefault();
    dispatch(postReservationToApi(data));
    navigate('/reservation')
  };
  return (
    <>
      <div>Reserve a car</div>

      <form onSubmit={handleSubmit}>
        {selectCar()}
        <label htmlFor="pick_up_date">
          <input type="date" name="pick_up_date" onChange={(e) => setPickDate(e.target.value)} />
        </label>

        <label htmlFor="drop_off_date">
          <input type="date" name="drop_off_date" onChange={(e) => setDropDate(e.target.value)} />
        </label>

        <label htmlFor="pick_up_city">
          <input type="text" name="pick_up_city" placeholder="pick up city" onChange={(e) => setPickCity(e.target.value)} />
        </label>

        <label htmlFor="return_city">
          <input type="text" name="return_city" placeholder="drop off city" onChange={(e) => setDropCity(e.target.value)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Reserve;
