import changeData from "./topic-reducer";
import changeSearch from "./search-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeData,
  changeSearch,
});

export default rootReducer;
