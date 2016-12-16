const pet = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_PET':
            return [...state,action.value]
        case 'DELETE_PET':
            return action.value
        case 'UPDATE_PET':
            return action.value
        default:
            return state
    }
}

export default pet