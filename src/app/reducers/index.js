import { combineReducers } from 'redux'
import todoReducer from './todoReducer'

const reducers = combineReducers({
	todoState: todoReducer
})

export default reducers
