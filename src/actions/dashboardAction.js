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