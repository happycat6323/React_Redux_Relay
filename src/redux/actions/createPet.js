export const createPet = (pet) => {
    return {
        type: 'CREATE_PET',
        pet
    }
}

export default createPet