import * as ActionConstants from './actionTypes';

export const getProjectDetails = () =>{
    return {
        type : ActionConstants.GET_PROJECT_DETAILS
    }
}

export const getSearchDetails = (projectID) => {
    return {
        type : ActionConstants.GET_SEARCH_PROJECT_DETAILS,
        projectID
    }
}

export const loadWeatherDetails = (payload) =>{
    return {
        type : ActionConstants.LOAD_WEATHER_LIST,
        payload
    }
}

export const getWeatherDetailsByLocation = (name) => {
    return {
        type : ActionConstants.GET_WEATHER_DETAILS_BY_LOCATION,
        name
    }
}