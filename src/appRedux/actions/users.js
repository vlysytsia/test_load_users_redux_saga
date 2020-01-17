export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";

export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: data
});

export const fetchUsersError = error => ({
  type: FETCH_USERS_ERROR,
  payload: error
});
