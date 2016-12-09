import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import combineReducer from '../reducers/index.js'

const store = createStore(combineReducer, {}, //The initial state
    applyMiddleware(thunk)
);

export default store;