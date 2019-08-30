import { SET_CURRENT_USER, LOGGING_IN, LOGOUT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    case LOGGING_IN:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
