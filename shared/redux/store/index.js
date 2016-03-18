import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import reducers from '../reducers'
import thunkMiddleWare from 'redux-thunk'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleWare = syncHistory(browserHistory)

var middlewares = [reduxRouterMiddleWare, thunkMiddleWare]

if(NODE_ENV === 'development') {
  const loggerMiddleWare = require('redux-logger')()
  middlewares.push(loggerMiddleWare)
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const store = createStoreWithMiddleware(reducer)

reduxRouterMiddleWare.listenForReplays(store)

export default store
