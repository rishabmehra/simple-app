import * as ActionConstants from '../actions/actionTypes';

export const getLogin  = (apiKey) => {
    return {
        type : ActionConstants.GET_LOGIN,
        apiKey        
    }
}