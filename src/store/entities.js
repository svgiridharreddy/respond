import { combineReducers } from "redux";
import customerGroupReducer from './customerGroup';
import customerReducer from "./customer";
import bugsReducer from './bugs';
// import projectsReducer from './projects';
// import usersReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  customerGroup: customerGroupReducer,
  customer: customerReducer
  // customer: projectsReducer,
  // users: usersReducer
})