const commonModal = (state = "close", action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return action
        case 'CLOSE_MODAL':
            return action.title
        default:
            return state
    }
}

export default commonModal