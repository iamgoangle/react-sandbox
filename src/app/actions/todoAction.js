export const getAllTodo = () => {
	return {
		type: 'GET_ALLTODO',
		users: [{
			name: 'Teerapong Singthong',
			status: 'Employed'
		}]
	}
}

export const addSingleTodo = () => {
	return {
		type: 'ADD_SINGLETODO',
		users: {
			name: 'Porntheera Apirachkul',
			status: 'Unemployed'
		}
	}
}
