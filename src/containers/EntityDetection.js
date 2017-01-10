import { connect } from 'react-redux'

import {getEntityInfo, postEntityInfo, setEntities} from '../redux/actions/entityDetection.js'
import EntityDetection from '../components/EntityDetection/EntityDetection.js'
import {subscribe, publish, handlePushMessageChange} from '../redux/actions/client.js'

const mapStateToProps = (state, ownProps) => {
    return {
        entityInfo: state.entityDetection.entityInfo,
        postEntityStatus: state.entityDetection.postEntityStatus,
        entities: state.entityDetection.entities,
        pushMessage: state.client.pushMessage,
        subscribeObject: state.client.subscribeObject,
        pushMessageChange: state.client.pushMessageChange,
        selectSentence: state.entityDetection.selectSentence
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getEntityInfo: (sentence) => {
            dispatch(getEntityInfo(sentence))
        },
        postEntityInfo: (entities) => {
            dispatch(postEntityInfo(entities))
        },
        setEntities: (entities) => {
          dispatch(setEntities(entities))
        },
        subscribe: () => {
            dispatch(subscribe("cat"))
        },
        publish: (message) => {
            const newMessage = {
                message: message,
                role: "robot"
            }
            dispatch(publish("cat", newMessage))
        },
        handlePushMessageChange: (message) =>{
            dispatch(handlePushMessageChange(message))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntityDetection)
