import { FETCH_USERS_REQUEST, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from "../actions/users";

const initialState = {
  data: [],
  loading: false,
  error: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    default:
      break;
  }
  return state;
};

export default usersReducer;
