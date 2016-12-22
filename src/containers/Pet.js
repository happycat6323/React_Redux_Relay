import { connect } from 'react-redux'

import Pet from '../components/Pet/Pet.js'
import {openCreateModal,createPet} from '../redux/actions/pet.js'

const mapStateToProps = (state, ownProps) => {
    return {
        createModal: state.pet.createModal,
        pet: state.pet.pet
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
        createPet: (name,status,description,species) => {
            dispatch(createPet(name,status,description,species))
            dispatch(openCreateModal(false))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet)
