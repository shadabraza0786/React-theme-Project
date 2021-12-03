import { combineReducers } from "redux";
import fetchUserReducer from "./fetchUserReducer";
import addUserReducer from "./addUserReducer";
import editUserReducer from "./editUserReducer";
import deleteUserReducer from "./deleteUserReducer";

const rootReducer = combineReducers({ 
    allUsersData: fetchUserReducer, addUserReducer, editUserReducer, deleteUserReducer });
export default rootReducer;