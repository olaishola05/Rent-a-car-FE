import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../../../redux/configureStore';

import Register from '../../../../components/forms/Register';

const RegisterProvider = () => (
  <Provider store={store}>
    <Router>
      <Register />
    </Router>
  </Provider>
);

describe('Register', () => {
  test('renders Register component', () => {
    render(<RegisterProvider />);

    screen.getByText('sign up');
    expect(screen.getByText('sign up')).toBeInTheDocument();
  });

  test('Fill the form', () => {
    render(<RegisterProvider />);

    userEvent.type(screen.getByPlaceholderText('Enter name'), 'My name');
    expect(screen.getByPlaceholderText('Enter name')).toHaveValue('My name');

    userEvent.type(screen.getByPlaceholderText('Enter username'), 'My username');
    expect(screen.getByPlaceholderText('Enter username')).toHaveValue('My username');

    userEvent.type(screen.getByPlaceholderText('Enter email'), 'Myemail');
    expect(screen.getByPlaceholderText('Enter email')).toHaveValue('Myemail');

    userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    expect(screen.getByPlaceholderText('Password')).toHaveValue('password');

    userEvent.type(screen.getByPlaceholderText('Password Confirmation'), 'password');
    expect(screen.getByPlaceholderText('Password Confirmation')).toHaveValue('password');
  });

  test('Email has already been taken', async () => {
    render(<RegisterProvider />);

    userEvent.type(screen.getByPlaceholderText('Enter name'), 'My name');
    userEvent.type(screen.getByPlaceholderText('Enter username'), 'My username');
    userEvent.type(screen.getByPlaceholderText('Enter email'), 'admin@gmail.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.type(screen.getByPlaceholderText('Password Confirmation'), 'password');
    userEvent.click(screen.getByText('sign up'));
    const result = await screen.findByText('Email has already been taken');
    expect(result).toBeInTheDocument();
  });

  test('Username has already been taken', async () => {
    render(<RegisterProvider />);
    userEvent.type(screen.getByPlaceholderText('Enter name'), 'My name');
    userEvent.type(screen.getByPlaceholderText('Enter username'), 'admin');
    userEvent.type(screen.getByPlaceholderText('Enter email'), 'adhuon@gmail.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.type(screen.getByPlaceholderText('Password Confirmation'), 'password');
    userEvent.click(screen.getByText('sign up'));
    const result = await screen.findByText('Username has already been taken');
    expect(result).toBeInTheDocument();
  });

  test('Password is too short (minimum is 6 characters)', async () => {
    render(<RegisterProvider />);
    userEvent.type(screen.getByPlaceholderText('Enter name'), 'My name');
    userEvent.type(screen.getByPlaceholderText('Enter username'), 'adminaz');
    userEvent.type(screen.getByPlaceholderText('Enter email'), 'adhtruon@gmail.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'pas');
    userEvent.type(screen.getByPlaceholderText('Password Confirmation'), 'pas');
    userEvent.click(screen.getByText('sign up'));
    const result = await screen.findByText('Password is too short (minimum is 6 characters)');
    expect(result).toBeInTheDocument();
  });

  test('Create new user', async () => {
    render(<RegisterProvider />);

    userEvent.type(screen.getByPlaceholderText('Enter name'), 'My name');
    userEvent.type(screen.getByPlaceholderText('Enter username'), 'adinaz');
    userEvent.type(screen.getByPlaceholderText('Enter email'), 'jfgdhuyud@gmail.com');
    userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.type(screen.getByPlaceholderText('Password Confirmation'), 'password');
    userEvent.click(screen.getByText('sign up'));
    const result = await screen.queryByText('Sign up');
    expect(result).toBeNull();
  });
});
