import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from './home';
import thunk from 'redux-thunk';
let store = createStore(
  combineReducers({reducer}),
  applyMiddleware(thunk)
);

export default store;