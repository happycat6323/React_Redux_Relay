import { connect } from 'react-redux'

import {getActivityInfo} from '../redux/actions/home.js'
import Home from '../components/Home/Home.js'

const mapStateToProps = (state, ownProps) => {
    return {
        activityInfo: state.home.activityInfo
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
