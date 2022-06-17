import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import MyReservations from '../../../components/reservations/MyReservations';
import store from '../../../redux/configureStore';

it('MyReservations renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <MyReservations />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
