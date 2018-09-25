import { put, takeLatest, all } from 'redux-saga/effects';
import * as ActionConstants from '../actions/actionTypes';
import { PROJECT_DETAILS_URL } from '../constants/constants';

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
    yield put({ type : ActionConstants.GET_PROJECT_DETAILS_SUCCESS, payload : apiResponse.projects})
}

function* sagasActionWatchers() {
     yield takeLatest(ActionConstants.GET_PROJECT_DETAILS, fetchProjectDetails)
}

export default function* rootSaga() {
   yield all([
    sagasActionWatchers(),
   ]);
}