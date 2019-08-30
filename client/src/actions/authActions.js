import { GET_ERRORS, SET_CURRENT_USER, LOGGING_IN, LOGOUT_USER } from "./types";
import history from '../history'

// Login - get user token
export const verifyLogin = () => dispatch => {
  fetch("http://localhost:4000/auth/login/success", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })
  .then(response => {
  if (response.status === 200) return response.json();
    dispatch({
      type: GET_ERRORS,
      payload: response
    })
  })
  .then(responseJson => {
    dispatch(setCurrentUser(responseJson.user))
  })
  .catch(error => {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  });
};

export const loggingIn = () => {
  return {
    type: LOGGING_IN
  }
}

// Set logged in user
export const setCurrentUser = user => {
  history.push('/dashboard')
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

// logout
export const logoutUser = user => {
  window.open("http://localhost:4000/auth/logout", "_self");
  return {
    type: LOGOUT_USER
  };
};
