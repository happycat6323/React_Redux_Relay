export const openCreateModal = (open) => {
    return {
        type: 'OPEN_CREATE_MODAL',
        open
    }
}

export const createPet = (pet) => {
    return {
        type: 'CREATE_PET',
        pet
    }
}

export const handlePetChange = (petChange) => {
    return {
        type: 'HANDLE_PET_CHANGE',
        petChange
    }
}