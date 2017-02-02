import { connect } from 'react-redux'

import Pet from '../components/Pet/Pet.js'
import {openCreateModal, validatePet, handlePetChange} from '../redux/actions/pet.js'

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
            dispatch(openCreateModal(true))
        },
        closeCreateModal: () => {
            dispatch(openCreateModal(false))
        },
        validatePet: () => {
            dispatch(validatePet())
        },
        handlePetChange: (petChange) => {
            dispatch(handlePetChange(petChange))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet)
