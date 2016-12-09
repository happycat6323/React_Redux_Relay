import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory,IndexRoute } from 'react-router' //v3.0.0

import store from './redux/store/config.js'
import App from './components/App.js'
import Home from './components/Home/Home.js'
import Zoo from './components/Zoo/Zoo.js'

render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="zoo" component={Zoo}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
)

//browserHistory