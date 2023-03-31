import { combineReducers } from "redux";
import thoughtReducer from "./thoughtReducer";
const rootReducer = combineReducers({ thoughts: thoughtReducer });
export default rootReducer;
