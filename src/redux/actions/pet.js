import firebase from '../../utils/firebase.js'

export const openCreateModal = (open, title) => {
    return {
        type: 'OPEN_CREATE_MODAL',
        open,
        title
    }
}

export const handlePetChange = (petChange) => {
    return {
        type: 'HANDLE_PET_CHANGE',
        petChange
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
            if(state().pet.createModal.title === "新增"){
                dispatch(setPetToFirebase())
            }
            else if(state().pet.createModal.title === "編輯"){
                dispatch(updatePetToFirebase())
            }
            dispatch(handlePetChange({}))
            dispatch(openCreateModal(false))
        }
        else{
            dispatch(handlePetChange(petChange))
        }
    }
}

export function setPetToFirebase () {
    return (dispatch, state) => {
        let postKey = firebase.database().ref('/' + state().login.userId).push().key
        firebase.database().ref('/' + state().login.userId).child(postKey).set(state().pet.petChange)
        dispatch(createPet(state().pet.petChange, postKey))
    }
}

export const createPet = (pet, postKey) => {
    return {
        type: 'CREATE_PET',
        pet,
        postKey
    }
}

export function updatePetToFirebase () {
    return (dispatch, state) => {
        let petChange = state().pet.petChange
        let pet = state().pet.pet
        pet[state().pet.petChange.index] = petChange
        delete petChange["index"]
        firebase.database().ref('/' + state().login.userId).child(state().pet.petChange.postKey).update(petChange)
        dispatch(updatePet(pet))
    }
}

export const updatePet = (pet) => {
    return {
        type: 'UPDATE_PET',
        pet
    }
}

export function deletePetFromFirebase (index, pet) {
    return (dispatch, state) => {
        let pets = JSON.parse(JSON.stringify(state().pet.pet))
        delete pets[index]
        firebase.database().ref('/' + state().login.userId).child(pet.postKey).remove()
        dispatch(deletePet(pets))
    }
}

export const deletePet = (pet) => {
    return {
        type: 'DELETE_PET',
        pet
    }
}
