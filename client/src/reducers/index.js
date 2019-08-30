import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const allReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer
});

export default allReducer;
