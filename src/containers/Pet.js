import { connect } from 'react-redux'

import Pet from '../components/Pet/Pet.js'
import {openCreateModal, validatePet, handlePetChange, deletePetFromFirebase} from '../redux/actions/pet.js'

const mapStateToProps = (state, ownProps) => {
    return {
        createModal: state.pet.createModal,
        pet: state.pet.pet,
        petChange: state.pet.petChange
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        openCreateModal: () => {
            dispatch(openCreateModal(true, "新增"))
        },
        closeCreateModal: () => {
            dispatch(openCreateModal(false, ""))
            dispatch(handlePetChange({}))
        },
        validatePet: () => {
            dispatch(validatePet())
        },
        handlePetChange: (petChange) => {
            dispatch(handlePetChange(petChange))
        },
        editPet: (index, pet) => {
            dispatch(openCreateModal(true, "編輯"))
            const editPet = Object.assign({}, pet, {index : index})
            dispatch(handlePetChange(editPet))
        },
        deletePet: (index, pet) => {
            dispatch(deletePetFromFirebase(index, pet))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet)
