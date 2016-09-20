/*
	Since one of the core tenets of Redux is to never mutate state,
	you'll often find yourself using Object.assign() to create copies
	of objects with new or updated values.
*/
const initialState = []

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLTODO':
			// return [...state, action.payload]
			return [action.payload]
		case 'ADD_SINGLETODO':
			return [...state, action.payload]
		case 'DEL_TODO':
			return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
		case 'FETCH_TODO':
			return Object.assign([], action.payload)
			//return action.payload
		default:
			return state
	}
}

export default todoReducer
