const initialState = {
	users: []
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLTODO':
			// return action.datas
			return Object.assign({}, state, { users: action.users })
		default:
			return state
	}
}

export default todoReducer
