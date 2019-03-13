import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import usersReducer from './users/usersReducer';


export default combineReducers({
  users: usersReducer,
  routing: routerReducer,
});
