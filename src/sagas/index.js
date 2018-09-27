import { put, takeLatest, all } from 'redux-saga/effects';
import * as ActionConstants from '../actions/actionTypes';
import { PROJECT_DETAILS_URL } from '../constants/constants';
import { hashHistory } from 'react-router';

/*
Sagas for fetching projectDetails
*/
function* fetchProjectDetails() {
    console.log('in fetchProjectDetails');
    const apiResponse = yield fetch(PROJECT_DETAILS_URL,{
        method : 'GET',
        headers: {
           'Content-Type': 'application/json',
           'Authorization' : 'Basic ZzFrSmZTazczaGo6dUg4M005cUs3MTNiY3pEMTg='
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
    const searchResponse = yield fetch(`https://api.proworkflow.net/projects/${projectID}?apikey=VE4J-DTOL-GB9N-GPB9-PWFISMQ-DEV3572&_=1537980667340`,{
        method : 'GET',
        headers: {
           'Content-Type': 'application/json',
           'Authorization' : 'Basic ZzFrSmZTazczaGo6dUg4M005cUs3MTNiY3pEMTg='
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
        const loginResponse = yield fetch(`https://api.proworkflow.net/login?apikey=${apiKey}`,{
            method : 'GET',
            headers: {
               'Content-Type': 'application/json',
               'Authorization' : 'Basic ZzFrSmZTazczaGo6dUg4M005cUs3MTNiY3pEMTg='
            },
        }).then(response => response.json());
        if(loginResponse.count > 0){
            hashHistory.push('/http://localhost:3000/dashboard');
        }
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