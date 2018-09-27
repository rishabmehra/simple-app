import * as ActionConstants from '../actions/actionTypes';

export default(state = { isErrorMessage : false , isAuthenticated : false }, action) => {
    switch(action.type) {
        case ActionConstants.GET_LOGIN_SUCCESS:
        return {...state, isErrorMessage : action.isError, isAuthenticated : true };
        
        case ActionConstants.GET_LOGIN_FAILURE:
        return {...state, isErrorMessage : action.isError, isAuthenticated : false };
        default:
        return state;
    }
}