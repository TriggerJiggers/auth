import { GET_ERRORS, SET_CURRENT_USER, LOGGING_IN, LOGOUT_USER } from "./types";

// Login - get user token
export const verifyLogin = () => dispatch => {
  console.log('verify login')
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
    console.log(responseJson)
    dispatch(setCurrentUser(responseJson.user))
  })
  .catch(error => {
    console.log(`general error ${error}`)
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
  console.log('setCurrentUser')
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

// logout
export const logoutUser = user => {
  console.log('logging out user')
  return {
    type: LOGOUT_USER
  };
};
