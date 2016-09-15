const initialState = {
	users: []
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLTODO':
			return Object.assign({}, state, { users: action.users })
		case 'ADD_SINGLETODO':
			return action.payload
		default:
			return state
	}
}

export default todoReducer
