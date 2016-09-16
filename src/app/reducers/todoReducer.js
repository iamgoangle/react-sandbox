const initialState = []

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLTODO':
			return [...state, action.users]
		case 'ADD_SINGLETODO':
			return [...state, action.users]
		case 'DEL_TODO':
			return [...state.slice(0, action.users), ...state.slice(action.users + 1)]
		default:
			return state
	}
}

export default todoReducer
