import { connect } from 'react-redux'

import Login from '../components/Login/Login.js'
import {handleLoginChange, createUser, loginUser} from '../redux/actions/login.js'

const mapStateToProps = (state, ownProps) => {
    return {
        loginChange: state.login.loginChange
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        handleLoginChange: (loginChange) => {
            dispatch(handleLoginChange(loginChange))
        },
        createUser: () => {
            dispatch(createUser())
        },
        LoginUser: () => {
            dispatch(loginUser())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)