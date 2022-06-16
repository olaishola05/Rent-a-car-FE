/* eslint-disable react/jsx-key */
/* eslint-disable no-tabs */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMyResevationsFromApi } from '../../redux/reducers/myReservations';
import styles from './MyReservations.module.css';

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
          (currentReservations.length === 0)
            ? (
              <div className={styles.noReservations}>
                <p className="text-center">No cars reserved</p>
              </div>
            )
            : (
              <table className="table-success">
                <thead>
                  <tr>
                    <th scope="col">Pick up date</th>
                    <th scope="col">Drop off date</th>
                    <th scope="col">Pick up city</th>
                    <th scope="col">Drop off city</th>
                    <th scope="col">Car details</th>
                  </tr>
                </thead>
                <tbody>
                  {currentReservations.map((item) => (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.pick_up_date}</td>
                      <td>{item.drop_off_date}</td>
                      <td>{item.pick_up_city}</td>
                      <td>{item.return_city}</td>
                      <td><button type="button" id={item.car_id} onClick={((e) => { handleClick(e); })}>Car details</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
			}
      </ul>
    </>
  );
};

export default MyReservations;
