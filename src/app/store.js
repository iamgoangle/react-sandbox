import { applyMiddleware, createStore } from 'redux'
import reduxThunk  from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers'

const loggerMiddleware = createLogger()
const middleware = applyMiddleware(
	reduxThunk, // lets us dispatch() functions
	loggerMiddleware // neat middleware that logs actions
)

const store = createStore(reducers, middleware)

export default store
