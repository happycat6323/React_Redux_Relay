import { connect } from 'react-redux'

import Client from '../components/Client/Client.js'
import {subscribe, publish, handlePushMessageChange, getPlot, setCurrentPlot} from '../redux/actions/client.js'

const mapStateToProps = (state, ownProps) => {
    return {
        pushMessage: state.client.pushMessage,
        subscribeObject: state.client.subscribeObject,
        pushMessageChange: state.client.pushMessageChange,
        plots: state.client.plots,
        currentPlot: state.client.currentPlot
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
            dispatch(publish("cat", newMessage))
        },
        handlePushMessageChange: (message) =>{
            dispatch(handlePushMessageChange(message))
        },
        getPlot: () => {
            dispatch(getPlot())
        },
        setCurrentPlot: (plot, index) => {
            dispatch(setCurrentPlot(plot, index))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Client)
