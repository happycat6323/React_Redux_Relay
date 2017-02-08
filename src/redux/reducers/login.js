export const loginChange = (state = {}, action) => {
    switch (action.type) {
        case 'HANDLE_LOGIN_CHANGE':
            const loginChange = Object.assign({},action.loginChange)
            return loginChange
        default:
            return state
    }
}