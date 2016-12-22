import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {activityInfo} from './home.js'
import {createModal} from './pet.js'
import commonModal from './commonModal.js'
import {entityInfo, entityPostState} from './entityInfo.js'

export default combineReducers({
    home: combineReducers({
        activityInfo
    }),
    pet: combineReducers({
        createModal
    }),
    commonModal,
    entityInfo,
    entityPostState,
    routing: routerReducer
})
