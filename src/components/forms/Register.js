import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserToApi } from '../../redux/reducers/userReducer';

const Register = () => {
  const [state, setState] = useState({});
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUserToApi(state));
  };

  return (
    <div>

      <h3>Register user</h3>
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
          <label htmlFor="name">
            Name
            <input type="text" placeholder="Enter name" onChange={onchange} id="name" name="name" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="username">
            username
            <input type="text" placeholder="Enter username" onChange={onchange} id="username" name="username" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="email">
            Email address
            <input type="email" placeholder="Enter email" onChange={onchange} id="email" name="email" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="password">
            Password
            <input type="password" placeholder="Password" onChange={onchange} id="password" name="password" />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="password_confirmation">
            Password confirmation
            <input type="password" placeholder="Password Confirmation" onChange={onchange} id="password_confirmation" name="password_confirmation" />
          </label>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

    </div>
  );
};

export default Register;
