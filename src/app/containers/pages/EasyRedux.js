import React, { Component } from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'

class EasyRedux extends Component {
	componentDidMount () {
		// userReducer.js
		const userReducer = (state={}, action) => {
			switch (action.type) {
				case 'CHANGE_NAME':
					return {...state, name: action.payload}
				break
				case 'CHANGE_AGE':
					return {...state, age: action.payload}
				break
			}

			return state
		}

		// tweetsReducer.js
		const tweetsReducer = (state=[], action) => {
			switch (action.type) {
				case 'CHANGE_TWEET':
					return {...state, msg: action.payload}
				break
			}
			return state
		}

		// action.js
		const changeName = function (name) {
			return {
				type: 'CHANGE_NAME',
				payload: name
			}
		}

		const changeAge = function (age) {
			return {
				type: 'CHANGE_AGE',
				payload: age
			}
		}

		const changeTweet = function (tweet) {
			return {
				type: 'CHANGE_TWEET',
				payload: tweet
			}
		}

		// reducers/index.js
		const reducers = combineReducers ({
			user: userReducer,
			tweet: tweetsReducer
		})

		const store = createStore(reducers)

		/* subscribe */
		store.subscribe(() => {
			console.log("store changed:")
			console.log(store.getState())
		})

		/* handleClick*/
		store.dispatch(changeName('Porntheera'))
		store.dispatch(changeAge(30))
		store.dispatch(changeTweet(["Too fat"]))

		store.dispatch(changeName('Teerapong'))
		store.dispatch(changeAge(19))
		store.dispatch(changeTweet(["Too Richman Toy"]))
		// store.dispatch({type: "CHANGE_NAME", payload: "Porntheera"})
	}

	render () {
		return (
			<h1>See result at the console</h1>
		)
	}
}

export default EasyRedux
