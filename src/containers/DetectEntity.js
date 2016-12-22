import { connect } from 'react-redux'
import {getEntityInfo, postEntityToWit} from '../redux/actions/entityInfo.js'
import List from '../components/DetectEntity/List.js'

const mapStateToProps = (state, ownProps) => {
    return {
        entityInfo: state.entityInfo,
        entityPostState: state.entityPostState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getEntityInfo: (sentence) => {
            dispatch(getEntityInfo(sentence))
        },
        postEntityToWit: (sentence, intent) => {
            dispatch(postEntityToWit(sentence, intent))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
