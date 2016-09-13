const initialState = {
	users: []
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ALLTODO':
			return Object.assign({}, state, { users: action.users })
		case 'ADD_SINGLETODO':
			// return {
			// 	users: [
			// 		{
			// 			name: 'Porntheera Apirachkul',
			// 			status: 'Unemployed'
			// 		},
			// 		{
			// 			name: 'Teerapong Singthong',
			// 			status: 'Employed'
			// 		}
			// 	]
			// }

			var users = []
			console.log(Object.assign({}, users, action.users))

			// let currentState = state
			// currentState.users.push(action.users)
			// return Object.assign({}, state, { users: currentState })
		default:
			return state
	}
}

export default todoReducer
