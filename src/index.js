import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './redux/store/config.js'
import App from './components/App.js'
import Home from './containers/Home.js'
import Login from './containers/Login.js'
import Pet from './containers/Pet.js'
import EntityDetection from './containers/EntityDetection.js'
import Client from './containers/Client.js'

const history = syncHistoryWithStore(browserHistory, store)

let FOLDER_NAME = ""

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={FOLDER_NAME + "/"} component={App}>
                <IndexRoute component={Home}/>
                <Route path="login" component={Login}/>
                <Route path="pet" component={Pet}/>
                <Route path="entityDetection" component={EntityDetection}/>
                <Route path="client" component={Client}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
