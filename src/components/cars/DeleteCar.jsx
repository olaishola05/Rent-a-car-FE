import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarsFromApi } from '../../redux/reducers/cars/carsReducer';
import { deleteCarFromAPI } from '../../redux/reducers/cars/deleteCar';

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
    <div>
      <h1>DeleteCar</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quasi
        mollitia quam nesciunt, in obcaecati voluptatem! Odit quo pariatur
        dolorem.
      </p>
      {cars.map((car) => (
        <div key={car.id}>
          <img
            style={{ width: '100px' }}
            src={car.image}
            alt={`${car.make} ${car.model}`}
          />
          <div>{car.model}</div>
          <button onClick={() => handleDelete(car.id)} type="button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteCar;
