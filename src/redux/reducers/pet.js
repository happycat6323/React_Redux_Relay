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
            const pet = {name:action.name, status:action.status, description:action.description, species:action.species}
            return [...state,pet]
        case 'DELETE_PET':
            return action
        case 'UPDATE_PET':
            return action
        default:
            return state
    }
}