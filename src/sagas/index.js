import { put, takeLatest, all } from 'redux-saga/effects';
import * as ActionConstants from '../actions/actionTypes';
import { API_KEY, API_HOST, BASE_PATH } from '../constants/constants';

/*
Sagas for fetching weather details
*/
function* loadWeatherDetails(action) {
    const lat = action.payload.latitude;
    const lon = action.payload.longitude
    try{
        const apiResponse = yield fetch(`${BASE_PATH}/forecast?lat=${lat}&lon=${lon}`,{
            method : 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST
            },
        }).then(response => response.json());
        yield put({ type : ActionConstants.LOAD_WEATHER_SUCCESS, payload : apiResponse});
        yield put({ type : ActionConstants.SET_CITY_NAME, payload : apiResponse.city});
    }catch(err){
        yield put({ type : ActionConstants.LOAD_WEATHER_FAILURE, payload : err});
    }
}

/*
Sagas for fetching weather details w.r.t location
*/
function* getWeatherDetailsByLocation(action) {
    const name = action.name;
    try{
        const apiResponse = yield fetch(`${BASE_PATH}/forecast?q=${name}`,{
            method : 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': API_HOST
            },
        }).then(response => response.json());
        yield put({ type : ActionConstants.LOAD_WEATHER_SUCCESS, payload : apiResponse});
        yield put({ type : ActionConstants.SET_CITY_NAME, payload : apiResponse.city});
    }catch(err){
        yield put({ type : ActionConstants.LOAD_WEATHER_FAILURE, payload : err});
    }
}

/*
function for watching all the Actions dispatches
*/
function* sagasActionWatchers() {
     yield takeLatest(ActionConstants.LOAD_WEATHER_LIST, loadWeatherDetails)
     yield takeLatest(ActionConstants.GET_WEATHER_DETAILS_BY_LOCATION, getWeatherDetailsByLocation)
}

export default function* rootSaga() {
   yield all([
    sagasActionWatchers(),
   ]);
}