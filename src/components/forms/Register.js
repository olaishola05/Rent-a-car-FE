import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { registerUserToApi } from '../../redux/actions/userActions';

const Register = () => {
  const [state, setState] = useState({});
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

      <Form>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={onchange} name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicusername">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={onchange} name="username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={onchange} name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onchange} name="password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password Confirmation" onChange={onchange} name="password_confirmation" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

    </div>
  );
};

export default Register;
