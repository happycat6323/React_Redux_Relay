import { connect } from 'react-redux'

import CommonModal from '../components/CommonModal/CommonModal.js'
import {closeModal} from '../redux/actions/commonModal.js'

const mapStateToProps = (state, ownProps) => {
    return {
        commonModal: state.commonModal
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        closeModal: () => {
            dispatch(closeModal("close"))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommonModal)
