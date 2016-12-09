const activityInfo = (state = {description:""}, action) => {
    switch (action.type) {
        case 'SET_ACTIVITY_INFO':
            return action.text
        default:
            return state
    }
}

export default activityInfo

//得到MOD看奧運打卡拿大獎活動描述




