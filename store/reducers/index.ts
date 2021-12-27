import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { globalReducer } from "store/global";

export default combineReducers({
  auth: authReducer,
  global: globalReducer,
});
