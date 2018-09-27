import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    dashboardReducer,
    loginReducer
});

export default rootReducer;