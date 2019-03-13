import { DB } from '_Utils_/constants/constants';

import * as types from './usersActionTypes';


export const getUsers = () => ({
  type: types.GET_USERS,
  callAPI: `${DB.URL}/${DB.COLLECTIONS.users}`,
  options: { method: 'GET' },
});

export const setCurrentPage = page => ({
  type: types.SET_CURRENT_PAGE,
  payload: page,
});
