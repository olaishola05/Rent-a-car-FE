import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logUserToApi } from '../../redux/reducers/userReducer';

const Login = () => {
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

    dispatch(logUserToApi(state));
  };

  return (
    <div>
      <h3>SIGN IN </h3>
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

        <div className="mb-3 form-control">
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

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

    </div>
  );
};

export default Login;
