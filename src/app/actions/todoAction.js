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
	const genName = Math.random().toString(36).substring(7)
	return {
		type: 'ADD_SINGLETODO',
		payload: {
			name: genName,
			status: 'Unemployed'
		}
	}
}
