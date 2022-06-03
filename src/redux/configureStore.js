import {
  legacy_createStore as createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  // reducers
});

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk)));

export default store;
