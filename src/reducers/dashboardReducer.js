import * as ActionConstants from '../actions/actionTypes';

export default(state = { list : []}, action) => {
    switch(action.type) {
        case ActionConstants.GET_PROJECT_DETAILS_SUCCESS:
        return {...state, list : action.payload };
        
        case ActionConstants.GET_SEARCH_PROJECT_DETAILS_SUCCESS:
        return {...state, list : [action.payload] };
        default:
        return state;
    }
}