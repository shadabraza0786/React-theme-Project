import { UPDATE_USER } from "../actions/type";

const initialState = {
    data : [],
};

//editUserReducer --------------------------------

const editUserReducer = (state = initialState, action) =>{
    switch (action.type){
        case UPDATE_USER:
            return {
                ...state,
                data: [...state.data.action.massage],
            };
        default:
            return state
    }
}
export default editUserReducer;

