const activityInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACTIVITY_INFO':
            return action.text
        default:
            return state
    }
}

export default activityInfo




