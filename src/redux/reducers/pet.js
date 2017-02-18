export const createModal = (state = {}, action) => {
    switch (action.type) {
        case 'OPEN_CREATE_MODAL':
            const createModal = {
                open: action.open,
                title: action.title
            }
            return createModal
        default:
            return state
    }
}

export const pet = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_PET':
            const pet = Object.assign({}, action.pet, {postKey : action.postKey})
            console.log(pet)
            return [...state, pet]
        case 'UPDATE_PET':
            return action.pet
        case 'DELETE_PET':
            return action
        default:
            return state
    }
}

export const petChange = (state = {}, action) => {
    switch (action.type) {
        case 'HANDLE_PET_CHANGE':
            const petChange = Object.assign({}, action.petChange)
            return petChange
        default:
            return state
    }
}