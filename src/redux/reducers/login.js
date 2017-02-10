export const loginChange = (state = {}, action) => {
    switch (action.type) {
        case 'HANDLE_LOGIN_CHANGE':
            const loginChange = Object.assign({},action.loginChange)
            return loginChange
        default:
            return state
    }
}

export const userId = (state = "", action) => {
    switch (action.type) {
        case 'SET_USER_ID':
            return action.userId
        default:
            return state
    }
}