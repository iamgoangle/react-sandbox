const initialState = []

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLTODO':
			return [...state, action.users]
		case 'ADD_SINGLETODO':
			return [...state, action.users]
		default:
			return state
	}
}

export default todoReducer
