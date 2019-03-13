import { PaginationLimits } from '_Utils_/constants/constants';

import * as types from './usersActionTypes';
import { SUCCESS, START, FAIL } from '../actionTypes';



const initialState = {
  allUsers: [],
  currentPage: 1,
  loading: { allUsers: false },
};



export default function (state = initialState, { type, payload }) {
  switch (type) {
    // START REQUEST----------------------------------------------
    case (types.GET_USERS + START):
      return {
        ...state,
        loading: { ...state.loading, allUsers: true },
      };

    // SUCCESS REQUEST----------------------------------------------
    case (types.GET_USERS + SUCCESS):
      return {
        ...state,
        allUsers: payload,
        currentPage: (
          payload.length < ((state.currentPage - 1) * PaginationLimits.usersPerPage)
            ? (Math.ceil(payload.length / PaginationLimits.usersPerPage))
            : state.currentPage
        ),
        loading: { ...state.loading, allUsers: false },
      };

    // FAIL REQUEST------------------------------------------------
    case (types.GET_USERS + FAIL):
      return {
        ...state,
        loading: { ...state.loading, userallU: false },
      };

    // OTHER ACTIONS -----------------------------------------------
    case (types.SET_CURRENT_PAGE):
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
}
