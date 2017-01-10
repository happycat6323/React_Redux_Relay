import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {activityInfo} from './home.js'
import {createModal, pet} from './pet.js'
import commonModal from './commonModal.js'
import {entityInfo, postEntityStatus, entities, selectSentence} from './entityDetection.js'
import {client, subscribeObject, pushMessage, pushMessageChange, plots, currentPlot} from './client.js'

export default combineReducers({
    home: combineReducers({
        activityInfo
    }),
    pet: combineReducers({
        createModal,
        pet
    }),
    entityDetection: combineReducers({
        entityInfo,
        postEntityStatus,
        entities,
        selectSentence
    }),
    client: combineReducers({
        client,
        subscribeObject,
        pushMessage,
        pushMessageChange,
        plots,
        currentPlot
    }),
    commonModal,
    routing: routerReducer
})
