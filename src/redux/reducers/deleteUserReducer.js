import { DELETE_USER } from "../actions/type";

const initialState = {
    data : [],
};

//editUserReducer ---------------------------------

const deleteUserReducer = (state = initialState, action) => {
    switch (action.type){
        case DELETE_USER:
            return {
                ...state,
                data: [...state.data.action.massage],
            };
        default:
            return state
    }
}
export default deleteUserReducer;