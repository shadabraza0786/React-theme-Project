import { FETCH_USER } from "../actions/type";

const initialState = {
        data : [],
};

const fetchUserReducer = (state = initialState, action) =>{
    console.log('ddddddd', action.payload)
    switch(action.type){
        case FETCH_USER:
            return {
                ...state,
                data : action.payload
            };
        default :
            return  state;
    }
}

export default fetchUserReducer;