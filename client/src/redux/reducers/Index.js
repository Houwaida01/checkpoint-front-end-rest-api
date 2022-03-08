import { combineReducers } from "redux";
import personReducer from "./Person";
const rootReducers = combineReducers({ personReducer });
export default rootReducers;
