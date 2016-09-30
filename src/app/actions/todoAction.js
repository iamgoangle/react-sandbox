import axios from 'axios'
import { config } from '../config/server.conf'

/*
	-> server/controllers/TodoController
	-> server/services/TodoServices
	-> server/models/todos
	-> reducers/todoReducer
*/

const HOST = `http://${config.SERVER.HOST}:${config.SERVER.PORT}`

// defined endpoint
const PRODUCT_ENDPOINT = `${config.API.products}`
const TODO_ENDPOINT = `${config.API.todos}`

const _actionType = {
	getAllTodo: 'GET_ALLTODO',
	addSingleTodo: 'ADD_SINGLETODO',
	fetchTodo: 'FETCH_TODO',
	removeTodo: 'DEL_TODO'
}

export const getAllTodo = () => {
	return {
		type: _actionType.getAllTodo,
		payload: {
			name: 'Teerapong Singthong',
			status: 'Employed'
		}
	}
}

export const addSingleTodo = (newTodo) => {
	return {
		type: _actionType.addSingleTodo,
		payload: newTodo
	}
}

export const removeTodo = (index) => {
	return {
		type: _actionType.removeTodo,
		payload: index
	}
}

export const fetchTodo = () => {
	return function (dispatch){
		axios.get(`${HOST}${TODO_ENDPOINT}/getAllTodos`)
		.then(response => {
			dispatch ({
				type: _actionType.fetchTodo,
				payload: response.data
			})
			// console.log(json.stringify(response.data))
		})
		.catch( (error) => {
			console.log(error)
		})
	}
}
