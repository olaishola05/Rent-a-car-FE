import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCarToApi } from '../../redux/reducers/AddCarReducer';

const AddCar = () => {
  const [state, setState] = useState({});
  const { error } = useSelector((state) => state.AddCar);
  const { user: { id } } = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newState = { ...state, user_id: id };
    dispatch(AddCarToApi(newState));
  };

  return (
    <div>

      <h3>Add new car</h3>
      {error ? (
        <div>
          {typeof error === 'string'
            ? (<span>{error}</span>)
            : (error.map((errorItem) => (
              <span key={errorItem}>{errorItem}</span>
            ))
            )}
        </div>
      ) : ''}
      <form>
        <div className="mb-3">
          <label htmlFor="make">
            Make
            <input type="text" placeholder="Enter Make" onChange={onchange} id="make" name="make" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="model">
            Model
            <input type="text" placeholder="Enter model" onChange={onchange} id="model" name="model" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="image">
            Image
            <input
              type="url"
              onChange={onchange}
              id="image"
              name="image"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
              required
            />

          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="color">
            Color
            <input type="text" placeholder="Enter a color" onChange={onchange} id="color" name="color" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="year">
            year
            <input type="date" onChange={onchange} id="year" name="year" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="engine">
            Engine
            <input type="text" placeholder="Enter engine" onChange={onchange} id="engine" name="engine" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="seat">
            Seat
            <input type="number" onChange={onchange} id="seat" name="seat" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="aircon">
            Aircon
            <input type="text" placeholder="Enter true or false" onChange={onchange} id="aircon" name="aircon" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="price">
            Price
            <input type="number" onChange={onchange} id="price" name="price" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="description">
            Description
            <input type="text" placeholder="Enter description" onChange={onchange} id="description" name="description" />
          </label>
        </div>

        <button type="submit" onClick={handleSubmit}>
        Add car
        </button>
      </form>

    </div>
  );
};

export default AddCar;
