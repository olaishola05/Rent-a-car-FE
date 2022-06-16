import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../../../redux/configureStore';

import Login from '../../../../components/forms/Login';

it('Login renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
