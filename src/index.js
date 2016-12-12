import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory,IndexRoute } from 'react-router' //v3.0.0
//import { syncHistoryWithStore } from 'react-router-redux'
// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store)

import store from './redux/store/config.js'
import App from './components/App.js'
import Home from './components/Home/Home.js'
import Subpage from './containers/Subpage.js'

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="subpage" component={Subpage}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
)

//browserHistory