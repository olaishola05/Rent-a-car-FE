import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCarToApi } from '../../redux/reducers/AddCarReducer';
import style from './AddCar.module.css';

const AddCar = () => {
  const [state, setState] = useState({});
  const { error } = useSelector((state) => state.AddCar);
  const {
    user: { id },
  } = JSON.parse(localStorage.getItem('user'));
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
    <div className={style.container}>
      <div className="container-fluid">
        <div className="row">
          <div className="column">
            <div className="d-flex justify-content-center align-items-center flex-column shadow-lg rounded mx-auto">
              <h3 className="text-center">Add new car</h3>
              {error ? (
                <div>
                  {typeof error === 'string' ? (
                    <span>{error}</span>
                  ) : (
                    error.map((errorItem) => (
                      <span key={errorItem}>{errorItem}</span>
                    ))
                  )}
                </div>
              ) : (
                ''
              )}
              <br />
              <form className={style.addForm}>
                <div className={style.formSection}>
                  <div>
                    <label className="form-label" htmlFor="make">
                      Make
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Make"
                        onChange={onchange}
                        id="make"
                        name="make"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="model">
                      Model
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter model"
                        onChange={onchange}
                        id="model"
                        name="model"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="image">
                      Image
                      <input
                        className="form-control"
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

                  <div>
                    <label className="form-label" htmlFor="color">
                      Color
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter a color"
                        onChange={onchange}
                        id="color"
                        name="color"
                      />
                    </label>
                  </div>
                </div>
                <div className={style.formSection}>
                  <div>
                    <label className="form-label" htmlFor="year">
                      year
                      <input
                        className="form-control"
                        type="date"
                        onChange={onchange}
                        id="year"
                        name="year"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="engine">
                      Engine
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter engine"
                        onChange={onchange}
                        id="engine"
                        name="engine"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="seat">
                      Seat
                      <input
                        className="form-control"
                        type="number"
                        onChange={onchange}
                        id="seat"
                        name="seat"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="aircon">
                      Aircon
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter true or false"
                        onChange={onchange}
                        id="aircon"
                        name="aircon"
                      />
                    </label>
                  </div>
                </div>
                <div className={style.formBottom}>
                  <div>
                    <label className="form-label" htmlFor="price">
                      Price
                      <input
                        className="form-control"
                        type="number"
                        onChange={onchange}
                        id="price"
                        name="price"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="description">
                      Description
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter description"
                        onChange={onchange}
                        id="description"
                        name="description"
                      />
                    </label>
                  </div>
                </div>

                <button
                  className="btn btn-secondary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add car
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AddCar;
