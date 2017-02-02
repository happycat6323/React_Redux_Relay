export const openCreateModal = (open) => {
    return {
        type: 'OPEN_CREATE_MODAL',
        open
    }
}

export function validatePet () {
    return (dispatch, state) => {
        let petChange = state().pet.petChange
        let validation = 1
        if(petChange.name === undefined || petChange.name === ""){
            petChange["validationName"] = 'error'
            validation = 0
        }
        else{
            petChange["validationName"] = null
        }
        if(petChange.status === undefined  || petChange.status === ""){
            petChange["validationStatus"] = 'error'
            validation = 0
        }
        else{
            petChange["validationStatus"] = null
        }
        if(petChange.species === undefined || petChange.species === ""){
            petChange["validationSpecies"] = 'error'
            validation = 0
        }
        else{
            petChange["validationSpecies"] = null
        }

        if(validation){
            dispatch(createPet(state().pet.petChange))
            dispatch(handlePetChange({}))
            dispatch(openCreateModal(false))
        }
        else{
            dispatch(handlePetChange(petChange))
        }
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