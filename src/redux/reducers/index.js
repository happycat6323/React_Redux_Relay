import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import activityInfo from './activityInfo.js'

export default combineReducers({
    activityInfo,
    routing: routerReducer
})