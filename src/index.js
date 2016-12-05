import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import todoApp from './reducers'
//import App from './components/App.js'

//let store = createStore(todoApp,
//    applyMiddleware(thunkMiddleware)
//)
//把 root reducer 塞入 createStore()，建立store
//用redux提供的applyMiddleware()，加上redux-thunk的thunkMiddleware

render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('root')
)

//進入點

//<Provider/> 在root component 用來傳遞store，只要使用一次，之後的component就都可以使用store，很方便!
