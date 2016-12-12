import { connect } from 'react-redux'
import Subpage from '../components/Subpages/Subpages.js'

const mapStateToProps = (state, ownProps) => {
    return {
        activityInfo: state.activityInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Subpage)
