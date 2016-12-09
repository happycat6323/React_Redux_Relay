import { connect } from 'react-redux'
import {getActivityInfo} from '../redux/actions/getActivityInfo.js'
import Home from '../components/Home/ActivityInfo.js'

const mapStateToProps = (state, ownProps) => {
    return {
        activityInfo: state.activityInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getActivityInfo: () => {
            dispatch(getActivityInfo(149,964890790261256))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
