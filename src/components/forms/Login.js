import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
      <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={onchange} name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onchange} name="password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

    </div>
  );
};

export default Login;
