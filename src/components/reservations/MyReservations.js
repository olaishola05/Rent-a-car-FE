/* eslint-disable no-tabs */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMyResevationsFromApi } from '../../redux/reducers/myReservations';

const MyReservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentReservations = useSelector((state) => state.reservation);

  useEffect(() => {
    dispatch(getMyResevationsFromApi());
  }, []);

  const handleClick = ((e) => {
    navigate(`/cars/${e.target.id}`);
  });
  return (
    <>
      <ul>
        {
				currentReservations.map((item) => (
  <li key={item.id}>
    <span>
      Pick up date:
      {item.pick_up_date}
    </span>
    <span>
      Pick up city:
      {item.pick_up_city}
    </span>
    <span>
      Drop off date:
      {item.drop_off_date}
    </span>
    <span>
      Drop up city:
      {item.return_city}
    </span>
    <button type="button" id={item.car_id} onClick={((e) => { handleClick(e); })}>Car details</button>
  </li>
				))
			}
      </ul>
    </>
  );
};

export default MyReservations;
