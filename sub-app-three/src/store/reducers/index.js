import { combineReducers } from "redux";
import user from "./user";
import app from "./app";
import common from "./common";

export default combineReducers({
  user,
  app,
  common
})
