import { connect } from 'react-redux'

import Pet from '../components/Pet/Pet.js'
import {openCreateModal} from '../redux/actions/pet.js'

const mapStateToProps = (state, ownProps) => {
    return {
        createModal: state.pet.createModal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        openCreateModal: () => {
            dispatch(openCreateModal(true))
        },
        closeCreateModal: () => {
            dispatch(openCreateModal(false))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pet)
