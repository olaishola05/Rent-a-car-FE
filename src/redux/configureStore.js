import {
  legacy_createStore as createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';
import carsReducer from './reducers/cars/carsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  cars: carsReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
