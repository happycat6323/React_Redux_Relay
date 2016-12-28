import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './redux/store/config.js'
import App from './components/App.js'
import Home from './containers/Home.js'
import Pet from './containers/Pet.js'
import EntityDetection from './containers/EntityDetection.js'

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="pet" component={Pet}/>
          <Route path="entityDetection" component={EntityDetection}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
)
