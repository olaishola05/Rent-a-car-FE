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

  const handleClick = (e) => {
    navigate(`/cars/${e.target.id}`);
  };
  return (
    <>
      <ul className={styles.reservations}>
        {currentReservations.length === 0 ? (
          <div className={styles.noReservations}>
            <p className="text-center">No cars reserved</p>
          </div>
        ) : (
          <table className={styles.tableSucess}>
            <thead>
              <tr>
                <th scope="col">Reservation Id</th>
                <th scope="col">Pick up date</th>
                <th scope="col">Drop off date</th>
                <th scope="col">Pick up city</th>
                <th scope="col">Drop off city</th>
                <th scope="col">Car details</th>
              </tr>
            </thead>
            <tbody>
              {currentReservations.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.pick_up_date}</td>
                  <td>{item.drop_off_date}</td>
                  <td>{item.pick_up_city}</td>
                  <td>{item.return_city}</td>
                  <td>
                    <button
                      type="button"
                      className={styles.reserveBtn}
                      id={item.car_id}
                      onClick={(e) => {
                        handleClick(e);
                      }}
                    >
                      Car details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ul>
    </>
  );
};

export default MyReservations;
