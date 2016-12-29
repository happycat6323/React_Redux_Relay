import { connect } from 'react-redux'

import {getEntityInfo, postEntityToWit} from '../redux/actions/entityDetection.js'
import EntityDetection from '../components/EntityDetection/EntityDetection.js'
import {subscribe, publish} from '../redux/actions/client.js'

const mapStateToProps = (state, ownProps) => {
    return {
        entityInfo: state.entityDetection.entityInfo,
        entityPostState: state.entityDetection.entityPostState,
        pushMessage: state.client.pushMessage,
        subscribeObject: state.client.subscribeObject,
        selectSentence: state.entityDetection.selectSentence
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getEntityInfo: (sentence) => {
            dispatch(getEntityInfo(sentence))
        },
        postEntityToWit: (entities) => {
            dispatch(postEntityToWit(entities))
        },
        subscribe: () => {
            dispatch(subscribe("cat"))
        },
        publish: (message) => {
            const newMessage = {
                message: message,
                role: "robot"
            }
            dispatch(publish("cat",newMessage))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntityDetection)
