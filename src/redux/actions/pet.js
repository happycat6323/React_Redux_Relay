export const openCreateModal = (open) => {
    return {
        type: 'OPEN_CREATE_MODAL',
        open
    }
}

export const createPet = (name, status, description, species) => {
    return {
        type: 'CREATE_PET',
        name,
        status,
        description,
        species
    }
}