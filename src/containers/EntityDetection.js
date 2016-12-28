import { connect } from 'react-redux'
import {getEntityInfo, postEntityToWit} from '../redux/actions/entityDetection.js'
import EntityDetection from '../components/EntityDetection/EntityDetection.js'

const mapStateToProps = (state, ownProps) => {
    return {
        entityInfo: state.entityDetection.entityInfo,
        entityPostState: state.entityDetection.entityPostState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getEntityInfo: (sentence) => {
            dispatch(getEntityInfo(sentence))
        },
        postEntityToWit: (entities) => {
            dispatch(postEntityToWit(entities))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntityDetection)
