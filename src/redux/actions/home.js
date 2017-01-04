import fetch from 'isomorphic-fetch'

function setActivityInfo  (text) {
    return {
        type: 'SET_ACTIVITY_INFO',
        text
    }
}

export function getActivityInfo  (activityId,fbId)  {
    return function (dispatch){
        return fetch('http://210.61.19.15/standard-platform/api/v1/activityInfo?activity_id='+activityId+'&fb_id='+fbId)
            .then(response => response.json())
            .then(json => dispatch(setActivityInfo(json)))
    }
}