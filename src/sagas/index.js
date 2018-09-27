import { put, takeLatest, all } from 'redux-saga/effects';
import * as ActionConstants from '../actions/actionTypes';
import { PROJECT_DETAILS_URL, API_KEY, BASIC_URL,PROJECT_DETAILS_FIELDS,BASE_PATH,API_KEY_AUTHORIZATION } from '../constants/constants';

/*
Sagas for fetching projectDetails
*/
function* fetchProjectDetails() {
    console.log('in fetchProjectDetails');
    const apiResponse = yield fetch(`${BASE_PATH}?apiKey=${API_KEY}&${PROJECT_DETAILS_FIELDS}`,{
        method : 'GET',
        headers: {
           'Content-Type': 'application/json',
           'Authorization' : API_KEY_AUTHORIZATION
        },
    }).then(response => response.json());
    console.log('apiResponse',apiResponse);
    yield put({ type : ActionConstants.GET_PROJECT_DETAILS_SUCCESS, payload : apiResponse.projects});
}

/*
Sagas for fetching projectDetails w.r,t to project ID
*/
function* fetchSearchProjectDetails(action){
    const projectID = action.projectID;
    const searchResponse = yield fetch(`${BASE_PATH}/${projectID}?apikey=${API_KEY}`,{
        method : 'GET',
        headers: {
           'Content-Type': 'application/json',
           'Authorization' : API_KEY_AUTHORIZATION
        },
    }).then(response => response.json());
    console.log('searchResponse',searchResponse);
    yield put({ type : ActionConstants.GET_SEARCH_PROJECT_DETAILS_SUCCESS, payload : searchResponse.project})
}

/*
Sagas for fetching loginDetails
*/
function* getLoginDetails(action){
    console.log('getLoginDetails sagas', action);
    const apiKey =  action.apiKey;
    try{
        const loginResponse = yield fetch(`${BASE_PATH}/login?apikey=${apiKey}`,{
            method : 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization' : API_KEY_AUTHORIZATION
            },
        }).then(response => response.json());
        console.log('loginResponse',loginResponse);
        yield put({type : ActionConstants.GET_LOGIN_SUCCESS, isError : false})
    }catch(err){
        console.log('Errrr', err);
        yield put({type : ActionConstants.GET_LOGIN_FAILURE, isError : true})
    }
}
/*
function for watching all the Actions dispatches
*/
function* sagasActionWatchers() {
     yield takeLatest(ActionConstants.GET_PROJECT_DETAILS, fetchProjectDetails)
     yield takeLatest(ActionConstants.GET_SEARCH_PROJECT_DETAILS, fetchSearchProjectDetails)
     yield takeLatest(ActionConstants.GET_LOGIN, getLoginDetails)
}

export default function* rootSaga() {
   yield all([
    sagasActionWatchers(),
   ]);
}