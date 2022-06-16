import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import SideNav from '../../../components/navs/SideNav';
import store from '../../../redux/configureStore';

it('Cars renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <SideNav />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
