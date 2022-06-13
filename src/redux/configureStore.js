import {
  legacy_createStore as createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './reducers/userReducer';
import AddCarReducer from './reducers/AddCarReducer';

const rootReducer = combineReducers({
  user: userReducer,
  AddCar: AddCarReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
