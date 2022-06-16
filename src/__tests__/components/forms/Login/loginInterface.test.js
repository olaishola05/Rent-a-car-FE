import { Provider } from 'react-redux';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../../../redux/configureStore';

import Login from '../../../../components/forms/Login';

const LoginProvider = () => (
  <Provider store={store}>
    <Router>
      <Login />
    </Router>
  </Provider>
);

afterEach(() => {
  cleanup();
});

describe('Test login screen functionality', () => {
  test('response with invalid email', async () => {
    render(<LoginProvider />);
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'johndoe@microverse.com' },
    });
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: 'password' },
    });
    userEvent.click(screen.getByText('sign in'));
    const result = await screen.findByText('unauthorized');
    expect(result).toBeInTheDocument();
  });

  test('response with invalid password', async () => {
    render(<LoginProvider />);
    fireEvent.change(screen.getByTestId('email-input'), {
      target: { value: 'admin@gmail.com' },
    });
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: 'wrongpassword' },
    });
    userEvent.click(screen.getByText('sign in'));
    const result = await screen.findByText('unauthorized');
    expect(result).toBeInTheDocument();
  });
});
