import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsFromApi } from '../../redux/reducers/cars/carsReducer';
import { deleteCarFromAPI } from '../../redux/reducers/cars/deleteCar';
import style from './DeleteCar.module.css';

const DeleteCar = () => {
  const fetchedCars = useSelector((state) => state.cars);
  const cars = fetchedCars.data;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCarFromAPI(id));
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getCarsFromApi());
  }, []);

  return (
    <div className={style.deleteContainer}>
      {cars.map((car) => (
        <div key={car.id} className={style.container}>
          <img
            style={{ width: '100px' }}
            src={car.image}
            alt={`${car.make} ${car.model}`}
          />
          <div className={style.model}>{car.model}</div>
          <button
            className={style.button}
            onClick={() => handleDelete(car.id)}
            type="button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteCar;
