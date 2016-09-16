/* TODO: Move endpoint server to centralize folder */
const _configEndPoint = {
	host: 'http://localhost:3030',
	apiKey: ''
}

/* TODO: Action type should be move to actionType.js */
const _actionType = {
	getAllTodo: 'GET_ALLTODO',
	addSingleTodo: 'ADD_SINGLETODO',
	fetchTodo: 'FETCH_TODO',
	removeTodo: 'DEL_TODO'
}

export const getAllTodo = () => {
	return {
		type: _actionType.getAllTodo,
		users: {
			name: 'Teerapong Singthong',
			status: 'Employed'
		}
	}
}

export const addSingleTodo = (newTodo) => {
	return {
		type: _actionType.addSingleTodo,
		users: newTodo
	}
}

export const removeTodo = (index) => {
	return {
		type: _actionType.removeTodo,
		users: index
	}
}

export const fetchTodo = () => {
	return {
		type: _actionType.fetchTodo
	}
}
