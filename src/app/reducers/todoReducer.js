const initialState = []
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLTODO':
			return action.empDatas
		default:
			return state
	}
}

export default todoReducer
