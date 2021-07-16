import * as ActionConstants from '../actions/actionTypes';

export default(state = { list : [], city: {}}, action) => {
    switch(action.type) {
        case ActionConstants.LOAD_WEATHER_SUCCESS:
        return {...state, list : action.payload.list };
        
        case ActionConstants.SET_CITY_NAME:
        return {...state, city : action.payload };
        default:
        return state;
    }
}