import fetch from 'isomorphic-fetch'
//官網建議使用

function setActivityInfo (text){
    return {
        type: 'SET_ACTIVITY_INFO',
        text
    }
}

export const getActivityInfo = (activityId,fbId, dispatch, state) => {
    fetch('http://210.61.19.15/standard-platform/api/v1/activityInfo?activity_id='+activityId+'&fb_id='+fbId)
        .then(response => response.json())
        .then(json => dispatch(setActivityInfo(json)))
}