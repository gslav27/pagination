import { PaginationLimits } from '_Utils_/constants/constants';


export const getUsersList = (state, page = 1) => {
  const { usersPerPage } = PaginationLimits;
  return (
    state.users.allUsers.length
      ? state.users.allUsers.slice((page - 1) * usersPerPage, page * usersPerPage)
      : Array(usersPerPage).fill(1).map((_, i) => ({ id: `temp${i}` }))
  );
};
export const getCurrentPage = state => state.users.currentPage;
export const getAllUsersLoadingStatus = state => state.users.loading.allUsers;
export const getAllUsersQty = state => state.users.allUsers.length;
