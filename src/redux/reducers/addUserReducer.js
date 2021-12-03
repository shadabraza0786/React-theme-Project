import { ADD_USER } from "../actions/type";

const initialState = {
    users : [],
};

// addUserReducer --------------------------------

const addUserReducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.massage],
            };
        default:
            return state
    }
}
export default addUserReducer;
