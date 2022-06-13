import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';
import carsReducer from './reducers/cars/carsReducer';
import carReducer from './reducers/cars/carReducer';
import reservationReducer from './reducers/reserve';

const rootReducer = combineReducers({
  user: userReducer,
  cars: carsReducer,
  car: carReducer,
  reserve: reservationReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
