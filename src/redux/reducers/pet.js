export const createModal = (state = false, action) => {
    switch (action.type) {
        case 'OPEN_CREATE_MODAL':
            return action.open
        default:
            return state
    }
}

export const pet = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_PET':
            return [...state, action.pet]
        case 'DELETE_PET':
            return action
        case 'UPDATE_PET':
            return action
        default:
            return state
    }
}

export const petChange = (state = {}, action) => {
    switch (action.type) {
        case 'HANDLE_PET_CHANGE':
            return action.petChange
        default:
            return state
    }
}