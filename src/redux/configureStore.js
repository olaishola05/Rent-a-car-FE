import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';
import AddCarReducer from './reducers/AddCarReducer';
import carsReducer from './reducers/cars/carsReducer';
import carReducer from './reducers/cars/carReducer';
import reservationReducer from './reducers/reserve';
import myReservationReducer from './reducers/myReservations';

const rootReducer = combineReducers({
  user: userReducer,
  cars: carsReducer,
  car: carReducer,
  AddCar: AddCarReducer,
  reserve: reservationReducer,
  reservation: myReservationReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
