import { connect } from 'react-redux'

import Client from '../components/Client/Client.js'
import {subscribe, publish} from '../redux/actions/client.js'

const mapStateToProps = (state, ownProps) => {
    return {
        pushMessage: state.client.pushMessage,
        subscribeObject: state.client.subscribeObject
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        subscribe: () => {
            dispatch(subscribe("cat"))
        },
        publish: (message) => {
            const newMessage = {
                message: message,
                role: "client"
            }
            dispatch(publish("cat",newMessage))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Client)
